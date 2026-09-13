import { apiClient, USE_MOCK_API, mockDelay } from "./client";
import { mockStudentAnalytics, mockAdminOverview } from "../data/mockAnalytics";

// GET /api/analytics/me
export async function getStudentAnalytics() {
  if (USE_MOCK_API) {
    await mockDelay();
    return mockStudentAnalytics;
  }
  return apiClient.get("/analytics/me");
}

// GET /api/analytics/admin
export async function getAdminOverview() {
  if (USE_MOCK_API) {
    await mockDelay();
    return mockAdminOverview;
  }
  return apiClient.get("/analytics/admin");
}
