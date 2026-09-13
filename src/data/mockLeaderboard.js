// Stand-in for: GET /api/leaderboard
export const mockLeaderboard = [
  { rank: 1, name: "Aarav Sharma", score: "98%" },
  { rank: 2, name: "Priya Singh", score: "96%" },
  { rank: 3, name: "Rohan Verma", score: "94%" },
  { rank: 4, name: "Rushil Dawla", score: "92%" },
  { rank: 5, name: "Ananya Gupta", score: "90%" },
  { rank: 6, name: "Kunal Mehta", score: "88%" },
];

// Stand-in for: GET /api/leaderboard/me
export const mockMyRankSummary = {
  rank: 4,
  averageScore: "92%",
  activeStreakDays: 7,
};
