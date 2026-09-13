import { useEffect, useState } from "react";
import { ChevronRight, Clock3, CheckCircle2 } from "lucide-react";

export default function QuizRunner({ quiz, questions, submitQuiz }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [seconds, setSeconds] = useState((quiz?.time || 10) * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) { clearInterval(timer); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) submitQuiz(answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  if (!questions.length) return null;

  const q = questions[index % questions.length];
  const chosen = answers[index];
  const pick = (a) => setAnswers({ ...answers, [index]: a });
  const next = () => (index < questions.length - 1 ? setIndex(index + 1) : submitQuiz(answers));

  return (
    <div className="quiz-page">
      <div className="quiz-top">
        <div><span className="eyebrow">QUIZ IN PROGRESS</span><h2>{quiz?.title}</h2></div>
        <div className={`timer ${seconds < 60 ? "danger" : ""}`}>
          <Clock3 size={19} />{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
        </div>
      </div>
      <div className="quiz-layout">
        <div className="question-panel">
          <div className="question-count">Question {index + 1} of {questions.length}</div>
          <div className="progress-line"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
          <h1>{q.q}</h1>
          <div className="options">
            {q.options.map((o, i) => (
              <button key={o} className={chosen === i ? "option selected" : "option"} onClick={() => pick(i)}>
                <span>{String.fromCharCode(65 + i)}</span>{o}{chosen === i && <CheckCircle2 />}
              </button>
            ))}
          </div>
          <div className="question-actions">
            {index > 0 && <button className="secondary" onClick={() => setIndex(index - 1)}>Previous</button>}
            <button className="primary" disabled={chosen === undefined} onClick={next}>
              {index === questions.length - 1 ? "Submit Quiz" : "Next Question"} <ChevronRight />
            </button>
          </div>
        </div>
        <div className="question-nav panel">
          <h3>Questions</h3>
          <div className="qnums">
            {questions.map((_, i) => (
              <button
                key={i}
                className={`${i === index ? "now " : ""}${answers[i] !== undefined ? "done" : ""}`}
                onClick={() => setIndex(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p><span className="dot done-dot" /> Answered <span>{Object.keys(answers).length}</span></p>
          <p><span className="dot" /> Remaining <span>{questions.length - Object.keys(answers).length}</span></p>
        </div>
      </div>
    </div>
  );
}
