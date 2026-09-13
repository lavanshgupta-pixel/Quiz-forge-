import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import React from "react";
export default function Review({ attempt, quiz, questions, back }) {
  return (
    <div className="page">
      <button className="back" onClick={back}><ArrowLeft /> Back to result</button>
      <div className="page-title">
        <div>
          <div className="eyebrow">ANSWER REVIEW</div>
          <h1>{quiz?.title}</h1>
          <p>Review your answers and explanations.</p>
        </div>
      </div>
      {questions.map((q, i) => {
        const a = attempt?.answers?.[i];
        return (
          <div className="review-card" key={i}>
            <div className="review-q"><span>{i + 1}</span><h3>{q.q}</h3></div>
            <div className="review-options">
              {q.options.map((o, j) => (
                <div
                  className={`review-option ${j === q.answer ? "correct" : ""} ${j === a && a !== q.answer ? "wrong" : ""}`}
                  key={o}
                >
                  <span>{String.fromCharCode(65 + j)}</span>{o}{j === q.answer && <CheckCircle2 />}
                </div>
              ))}
            </div>
            <div className="explanation">
              <Sparkles size={17} />
              <div><b>Explanation</b><p>{q.explanation}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
