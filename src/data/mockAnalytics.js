// Stand-in for: GET /api/analytics/me (student) and GET /api/analytics/admin
export const mockStudentAnalytics = {
  overallAccuracy: "87%",
  accuracyTrend: "↑ 5.4% this month",
  averageScore: "84%",
  averageScoreNote: "Across 12 quizzes",
  avgTime: "8m 24s",
  bestSubject: "DBMS",
  bestSubjectScore: "92% average",
  subjectPerformance: [
    { subject: "Programming", value: 86 },
    { subject: "Database", value: 92 },
    { subject: "Networking", value: 71 },
    { subject: "Data Structures", value: 82 },
    { subject: "Operating Systems", value: 76 },
  ],
  scoreTrend: { value: "84%", note: "+6% from last month" },
};

export const mockAdminOverview = {
  totalQuizzes: 24,
  totalQuizzesNote: "+4 this month",
  totalStudents: 486,
  totalStudentsNote: "+32 this week",
  totalAttempts: "2,840",
  totalAttemptsNote: "+18% this month",
  avgScore: "76%",
  avgScoreNote: "Across all quizzes",
  platformOverview: [
    { label: "Students", value: 78 },
    { label: "Attempts", value: 64 },
    { label: "Completion", value: 82 },
    { label: "Pass rate", value: 76 },
  ],
};
