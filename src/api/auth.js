// Stand-in for JWT auth. Once Express + bcrypt + JWT are wired up, the real
// branches below just need the matching routes to exist.
import { apiClient, USE_MOCK_API, mockDelay, setToken } from "./client";

// POST /api/auth/login  { email, password }
export async function login(email, password) {
  if (USE_MOCK_API) {
    await mockDelay();
    const user = { id: "mock-user", name: "Rushil Dawla", email, role: "student" };
    setToken("mock-jwt-token");
    return { user, token: "mock-jwt-token" };
  }
  const data = await apiClient.post("/auth/login", { email, password });
  setToken(data.token);
  return data;
}

// POST /api/auth/register  { name, email, password, role }
export async function register(details) {
  if (USE_MOCK_API) {
    await mockDelay();
    setToken("mock-jwt-token");
    return { user: { ...details, id: "mock-user" }, token: "mock-jwt-token" };
  }
  const data = await apiClient.post("/auth/register", details);
  setToken(data.token);
  return data;
}

// GET /api/auth/me
export async function getCurrentUser() {
  if (USE_MOCK_API) {
    await mockDelay();
    return { id: "mock-user", name: "Rushil Dawla", role: "student" };
  }
  return apiClient.get("/auth/me");
}

export function logout() {
  setToken(null);
}
