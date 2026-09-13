// Stand-in for: GET /api/quizzes/:quizId/questions (a "questions" collection,
// each document referencing a quizId). All demo quizzes currently share this
// one question bank — once connected to MongoDB, getQuestions(quizId) in
// src/api/quizzes.js should return questions filtered by quizId instead.
export const mockQuestions = [
  { q: "Which keyword is used to declare a block-scoped variable in JavaScript?", options: ["var", "let", "define", "constvar"], answer: 1, explanation: "The let keyword declares a block-scoped local variable." },
  { q: "Which data structure follows the LIFO principle?", options: ["Queue", "Linked List", "Stack", "Tree"], answer: 2, explanation: "A stack follows Last-In, First-Out (LIFO)." },
  { q: "Which method converts JSON text into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], answer: 0, explanation: "JSON.parse() parses JSON text and produces the corresponding JavaScript value." },
  { q: "Which HTTP status code means 'Not Found'?", options: ["200", "301", "404", "500"], answer: 2, explanation: "HTTP 404 indicates that the requested resource could not be found." },
  { q: "Which database model does MongoDB primarily use?", options: ["Relational", "Document", "Graph", "Hierarchical"], answer: 1, explanation: "MongoDB is a NoSQL document database." },
];
