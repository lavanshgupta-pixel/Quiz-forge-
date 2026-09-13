import { Sparkles, ChevronRight, GraduationCap, Trophy, Target, Flame, Award } from "lucide-react";
import Stat from "../components/common/Stat";
import QuizCard from "../components/common/QuizCard";
import React from "react";

const weeklyProgress = [35, 55, 42, 70, 58, 82, 66];
const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function Dashboard({ quizzes, openQuiz, setPage }) {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <div className="eyebrow"><Sparkles size={14} /> Welcome back</div>
          <h1>Ready to <span>challenge yourself?</span></h1>
          <p>Test your knowledge, track your progress, and climb the leaderboard.</p>
          <button className="primary" onClick={() => setPage("quizzes")}>Explore Quizzes <ChevronRight size={18} /></button>
        </div>
        <div className="hero-orb"><GraduationCap size={66} /><span>Learn.</span><span>Practice.</span><span>Master.</span></div>
      </section>

      <section className="stats-grid">
        <Stat icon={<Trophy />} label="Quizzes Attempted" value="12" sub="+3 this week" />
        <Stat icon={<Target />} label="Average Score" value="84%" sub="+6% vs last month" />
        <Stat icon={<Flame />} label="Current Streak" value="7 days" sub="Personal best: 12" />
        <Stat icon={<Award />} label="Global Rank" value="#24" sub="Top 8% of students" />
      </section>

      <div className="section-head">
        <div><h2>Continue Learning</h2><p>Pick up where you left off.</p></div>
        <button className="text-btn" onClick={() => setPage("quizzes")}>View all <ChevronRight size={16} /></button>
      </div>
      <div className="quiz-grid">
        {quizzes.slice(0, 3).map((q) => <QuizCard key={q.id} quiz={q} openQuiz={openQuiz} />)}
      </div>

      <div className="two-col">
        <div className="panel progress-panel">
          <div className="panel-head"><div><h3>Weekly Progress</h3><p>Quizzes completed this week</p></div><span className="trend">+24%</span></div>
          <div className="chart">
            {weeklyProgress.map((v, i) => (
              <div className="bar-wrap" key={i}>
                <div className="bar" style={{ height: `${v}%` }}></div>
                <small>{weekLabels[i]}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-head"><div><h3>Recent Activity</h3><p>Your latest quiz attempts</p></div></div>
          <div className="activity-list">
            {quizzes.slice(0, 4).map((q) => (
              <div className="activity" key={q.id}>
                <span className={`activity-icon ${q.color}`}>{q.icon}</span>
                <div><b>{q.title}</b><small>{q.attempted ? "Completed" : "Not attempted"}</small></div>
                <strong>{q.attempted ? `${q.score}%` : "—"}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
