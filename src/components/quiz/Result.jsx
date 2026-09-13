import { Trophy } from "lucide-react";

export default function Result({ attempt, quiz, questionCount, review, backToDashboard }) {
  const score = attempt?.score || 0;
  const correct = attempt?.correct ?? Math.round((score / 100) * questionCount);
  const total = attempt?.total ?? questionCount;

  return (
    <div className="center-page">
      <div className="result-card">
        <div className="result-badge"><Trophy size={35} /></div>
        <div className="eyebrow">QUIZ COMPLETED</div>
        <h1>Great job!</h1>
        <p>You completed <b>{quiz?.title}</b>.</p>
        <div className="score-ring"><strong>{score}%</strong><span>Your Score</span></div>
        <div className="result-stats">
          <div><b>{correct}</b><span>Correct</span></div>
          <div><b>{total - correct}</b><span>Incorrect</span></div>
          <div><b>{total}</b><span>Total</span></div>
        </div>
        <div className="result-actions">
          <button className="secondary" onClick={review}>Review Answers</button>
          <button className="primary" onClick={backToDashboard}>Back to Dashboard</button>
        </div>
      </div>
    </div>
  );
}
