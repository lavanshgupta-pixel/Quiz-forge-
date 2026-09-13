import React from "react";
import { useEffect, useState } from "react";
import TopBar from "./components/layout/TopBar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import QuizExplorer from "./pages/QuizExplorer";
import Leaderboard from "./pages/Leaderboard";
import Analytics from "./pages/Analytics";
import Bookmarks from "./pages/Bookmarks";
import AdminDashboard from "./pages/AdminDashboard";
import ManageQuizzes from "./pages/ManageQuizzes";
import QuizIntro from "./components/quiz/QuizIntro";
import QuizRunner from "./components/quiz/QuizRunner";
import Result from "./components/quiz/Result";
import Review from "./components/quiz/Review";
import { useQuizzes } from "./hooks/useQuizzes";
import { getQuestions, submitAttempt } from "./api/quizzes";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("student");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sidebar, setSidebar] = useState(false);
  const [attempt, setAttempt] = useState(null);
  const [questions, setQuestions] = useState([]);

  const { quizzes, loading: quizzesLoading } = useQuizzes();

  const openQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setPage("quiz-intro");
    setSidebar(false);
  };

  const startQuiz = async () => {
    const qs = await getQuestions(selectedQuiz.id);
    setQuestions(qs);
    setAttempt({ answers: {}, started: Date.now(), submitted: false });
    setPage("quiz");
  };

  const submitQuiz = async (answers) => {
    const outcome = await submitAttempt(selectedQuiz.id, answers);
    setAttempt((a) => ({ ...a, answers, ...outcome, submitted: true }));
    setPage("result");
  };

  const filtered = quizzes.filter(
    (q) =>
      (filter === "All" || q.category === filter || q.difficulty === filter) &&
      q.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <TopBar page={page} setPage={setPage} role={role} setRole={setRole} setSidebar={setSidebar} />

      <div className="shell">
        <Sidebar role={role} page={page} setPage={setPage} sidebar={sidebar} setSidebar={setSidebar} />

        <main className="content">
          {quizzesLoading && page !== "quiz" && page !== "quiz-intro" ? (
            <div className="page"><p className="muted">Loading quizzes…</p></div>
          ) : (
            <>
              {page === "dashboard" && role === "student" && (
                <Dashboard quizzes={quizzes} openQuiz={openQuiz} setPage={setPage} />
              )}
              {page === "quizzes" && (
                <QuizExplorer openQuiz={openQuiz} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} filtered={filtered} />
              )}
              {page === "leaderboard" && <Leaderboard />}
              {page === "analytics" && <Analytics />}
              {page === "bookmarks" && <Bookmarks quizzes={quizzes} openQuiz={openQuiz} />}
              {page === "admin" && role === "admin" && <AdminDashboard quizzes={quizzes} setPage={setPage} />}
              {page === "manage" && role === "admin" && <ManageQuizzes quizzes={quizzes} openQuiz={openQuiz} />}
              {page === "quiz-intro" && <QuizIntro quiz={selectedQuiz} startQuiz={startQuiz} back={() => setPage("quizzes")} />}
              {page === "quiz" && <QuizRunner quiz={selectedQuiz} questions={questions} submitQuiz={submitQuiz} />}
              {page === "result" && (
                <Result attempt={attempt} quiz={selectedQuiz} questionCount={questions.length} review={() => setPage("review")} backToDashboard={() => setPage("dashboard")} />
              )}
              {page === "review" && (
                <Review attempt={attempt} quiz={selectedQuiz} questions={questions} back={() => setPage("result")} />
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
