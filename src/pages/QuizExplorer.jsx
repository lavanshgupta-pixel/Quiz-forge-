import { Search } from "lucide-react";
import QuizCard from "../components/common/QuizCard";
import React from "react";

const categories = ["All", "Programming", "Computer Science", "Database", "Networking", "Easy", "Medium", "Hard"];

export default function QuizExplorer({ openQuiz, search, setSearch, filter, setFilter, filtered }) {
  return (
    <div className="page">
      <div className="page-title">
        <div>
          <div className="eyebrow">QUIZ LIBRARY</div>
          <h1>Explore Quizzes</h1>
          <p>Choose a topic and put your knowledge to the test.</p>
        </div>
        <div className="search">
          <Search size={18} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search quizzes..." />
        </div>
      </div>
      <div className="filters">
        {categories.map((c) => (
          <button className={filter === c ? "filter active" : "filter"} key={c} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>
      <div className="quiz-grid">
        {filtered.map((q) => <QuizCard key={q.id} quiz={q} openQuiz={openQuiz} />)}
      </div>
      {!filtered.length && (
        <div className="empty"><Search size={40} /><h3>No quizzes found</h3><p>Try another search or filter.</p></div>
      )}
    </div>
  );
}
