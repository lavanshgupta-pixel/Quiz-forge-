import { apiClient, USE_MOCK_API, mockDelay } from "./client";
import { mockLeaderboard, mockMyRankSummary } from "../data/mockLeaderboard";

// GET /api/leaderboard
export async function getLeaderboard() {
  if (USE_MOCK_API) {
    await mockDelay();
    return mockLeaderboard;
  }
  return apiClient.get("/leaderboard");
}

// GET /api/leaderboard/me
export async function getMyRankSummary() {
  if (USE_MOCK_API) {
    await mockDelay();
    return mockMyRankSummary;
  }
  return apiClient.get("/leaderboard/me");
}
