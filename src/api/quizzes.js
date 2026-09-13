// Every function here has a "mock" branch (works today, no backend) and a
// "real" branch (calls your future Express/MongoDB REST API). Flip
// VITE_USE_MOCK_API to "false" in .env once the backend routes below exist.
import { apiClient, USE_MOCK_API, mockDelay } from "./client";
import { mockQuizzes } from "../data/mockQuizzes";
import { mockQuestions } from "../data/mockQuestions";

// GET /api/quizzes
export async function getQuizzes() {
  if (USE_MOCK_API) {
    await mockDelay();
    return mockQuizzes;
  }
  return apiClient.get("/quizzes");
}

// GET /api/quizzes/:quizId
export async function getQuizById(quizId) {
  if (USE_MOCK_API) {
    await mockDelay();
    return mockQuizzes.find((quiz) => quiz.id === quizId) || null;
  }
  return apiClient.get(`/quizzes/${quizId}`);
}

// GET /api/quizzes/:quizId/questions
export async function getQuestions(quizId) {
  if (USE_MOCK_API) {
    await mockDelay();
    // TODO(backend): return questions filtered by quizId once quizzes each
    // have their own question set in MongoDB.
    return mockQuestions;
  }
  return apiClient.get(`/quizzes/${quizId}/questions`);
}

// POST /api/quizzes/:quizId/attempts  { answers }
export async function submitAttempt(quizId, answers) {
  if (USE_MOCK_API) {
    await mockDelay();
    const correct = Object.entries(answers).filter(
      ([index, chosen]) => mockQuestions[Number(index)]?.answer === chosen
    ).length;
    return {
      score: Math.round((correct / mockQuestions.length) * 100),
      correct,
      total: mockQuestions.length,
    };
  }
  return apiClient.post(`/quizzes/${quizId}/attempts`, { answers });
}

// POST /api/quizzes  (admin — create quiz)
export async function createQuiz(quizData) {
  if (USE_MOCK_API) {
    await mockDelay();
    return { id: Date.now(), ...quizData };
  }
  return apiClient.post("/quizzes", quizData);
}
