// Thin fetch wrapper. This is the ONLY file that needs to know about HTTP.
// Once your Express backend is ready:
//   1. Set VITE_USE_MOCK_API=false in .env
//   2. Set VITE_API_BASE_URL to your backend URL (e.g. http://localhost:5000/api)
// Every function in this folder already has a matching real-API branch —
// no component or page code needs to change.

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// "true" unless explicitly turned off — lets the app run with zero backend.
export const USE_MOCK_API = (import.meta.env.VITE_USE_MOCK_API ?? "true") !== "false";

const TOKEN_KEY = "quizforge_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function request(path, options = {}) {
  const token = getToken();

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    let message = res.statusText;
    try {
      const body = await res.json();
      message = body.message || message;
    } catch {
      // response wasn't JSON — keep the default message
    }
    throw new Error(message || `Request failed with status ${res.status}`);
  }

  if (res.status === 204) return null;

  const contentType = res.headers.get("content-type") || "";
  return contentType.includes("application/json") ? res.json() : res.text();
}

export const apiClient = {
  get: (path) => request(path, { method: "GET" }),
  post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
  patch: (path, body) => request(path, { method: "PATCH", body: JSON.stringify(body) }),
  del: (path) => request(path, { method: "DELETE" }),
};

// Small helper so mock functions can simulate real network latency —
// keeps loading states honest during frontend development.
export const mockDelay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));
