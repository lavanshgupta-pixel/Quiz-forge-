import QuizCard from "../components/common/QuizCard";
import React from "react";

export default function Bookmarks({ quizzes, openQuiz }) {
  return (
    <div className="page">
      <div className="page-title">
        <div><div className="eyebrow">SAVED FOR LATER</div><h1>Bookmarks</h1><p>Questions and quizzes you've saved.</p></div>
      </div>
      <div className="quiz-grid">
        {quizzes.slice(1, 4).map((q) => <QuizCard key={q.id} quiz={q} openQuiz={openQuiz} />)}
      </div>
    </div>
  );
}
