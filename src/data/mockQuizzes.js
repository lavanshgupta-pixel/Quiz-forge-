// Stand-in for: GET /api/quizzes (a MongoDB "quizzes" collection).
// Each object should map 1:1 to a future Mongoose Quiz document.
export const mockQuizzes = [
  { id: 1, title: "JavaScript Fundamentals", category: "Programming", difficulty: "Easy", questions: 10, time: 10, score: 86, attempted: true, icon: "JS", color: "violet" },
  { id: 2, title: "Data Structures", category: "Computer Science", difficulty: "Medium", questions: 15, time: 15, score: 78, attempted: true, icon: "DS", color: "blue" },
  { id: 3, title: "Database Management", category: "Database", difficulty: "Medium", questions: 12, time: 12, score: 92, attempted: true, icon: "DB", color: "emerald" },
  { id: 4, title: "Computer Networks", category: "Networking", difficulty: "Hard", questions: 20, time: 20, score: 0, attempted: false, icon: "CN", color: "orange" },
  { id: 5, title: "Operating Systems", category: "Computer Science", difficulty: "Medium", questions: 15, time: 15, score: 0, attempted: false, icon: "OS", color: "pink" },
  { id: 6, title: "Web Development", category: "Programming", difficulty: "Easy", questions: 10, time: 10, score: 0, attempted: false, icon: "WD", color: "cyan" },
];
