import { ArrowLeft, BookOpen, Clock3, ShieldCheck, ChevronRight } from "lucide-react";

export default function QuizIntro({ quiz, startQuiz, back }) {
  if (!quiz) return null;
  return (
    <div className="center-page">
      <button className="back" onClick={back}><ArrowLeft size={17} /> Back to quizzes</button>
      <div className="intro-card">
        <div className={`big-icon ${quiz.color}`}>{quiz.icon}</div>
        <div className="eyebrow">{quiz.category} · {quiz.difficulty}</div>
        <h1>{quiz.title}</h1>
        <p>Test your knowledge with {quiz.questions} questions. Your result will be calculated automatically.</p>
        <div className="intro-stats">
          <span><BookOpen /> {quiz.questions} Questions</span>
          <span><Clock3 /> {quiz.time} Minutes</span>
          <span><ShieldCheck /> Auto Scoring</span>
        </div>
        <div className="notice">
          <Clock3 />
          <div>
            <b>Exam conditions</b>
            <p>The countdown starts when you click Start. The quiz will be submitted automatically when the timer reaches zero.</p>
          </div>
        </div>
        <button className="primary wide" onClick={startQuiz}>Start Quiz <ChevronRight /></button>
      </div>
    </div>
  );
}
