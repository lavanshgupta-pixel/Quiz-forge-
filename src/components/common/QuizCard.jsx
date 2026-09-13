import { CheckCircle2, Play } from "lucide-react";
import React from "react";

export default function QuizCard({ quiz, openQuiz }) {
  return (
    <article className="quiz-card">
      <div className={`quiz-icon ${quiz.color}`}>{quiz.icon}</div>
      <div className="quiz-meta">
        <span>{quiz.category}</span>
        <span className={`difficulty ${quiz.difficulty.toLowerCase()}`}>{quiz.difficulty}</span>
      </div>
      <h3>{quiz.title}</h3>
      <p>{quiz.questions} questions · {quiz.time} min</p>
      <div className="card-footer">
        {quiz.attempted ? (
          <span className="score"><CheckCircle2 size={15} /> Best {quiz.score}%</span>
        ) : (
          <span className="muted">Not attempted</span>
        )}
        <button className="small-primary" onClick={() => openQuiz(quiz)}>
          <Play size={14} /> Start
        </button>
      </div>
    </article>
  );
}
