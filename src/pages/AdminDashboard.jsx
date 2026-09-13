import { Plus, BookOpen, Users, Target, Award } from "lucide-react";
import Stat from "../components/common/Stat";
import { useAsync } from "../hooks/useAsync";
import { getAdminOverview } from "../api/analytics";
import React from "react";

export default function AdminDashboard({ quizzes, setPage }) {
  const { data, loading } = useAsync(getAdminOverview, []);

  if (loading) return <div className="page"><p className="muted">Loading overview…</p></div>;

  return (
    <div className="page">
      <div className="page-title">
        <div><div className="eyebrow">ADMINISTRATION</div><h1>QuizForge Admin</h1><p>Create, manage and analyse your quizzes.</p></div>
        <button className="primary" onClick={() => setPage("manage")}><Plus /> Create Quiz</button>
      </div>
      <div className="stats-grid">
        <Stat icon={<BookOpen />} label="Total Quizzes" value={data.totalQuizzes} sub={data.totalQuizzesNote} />
        <Stat icon={<Users />} label="Students" value={data.totalStudents} sub={data.totalStudentsNote} />
        <Stat icon={<Target />} label="Attempts" value={data.totalAttempts} sub={data.totalAttemptsNote} />
        <Stat icon={<Award />} label="Avg. Score" value={data.avgScore} sub={data.avgScoreNote} />
      </div>
      <div className="two-col">
        <div className="panel">
          <h3>Recent Quizzes</h3>
          {quizzes.slice(0, 4).map((q) => (
            <div className="activity" key={q.id}>
              <span className={`activity-icon ${q.color}`}>{q.icon}</span>
              <div><b>{q.title}</b><small>{q.questions} questions · {q.difficulty}</small></div>
              <button className="ghost" onClick={() => setPage("manage")}>Manage</button>
            </div>
          ))}
        </div>
        <div className="panel">
          <h3>Platform Overview</h3>
          <div className="admin-bars">
            {data.platformOverview.map((x) => (
              <div key={x.label}>
                <div><span>{x.label}</span><b>{x.value}%</b></div>
                <div className="admin-bar"><span style={{ width: `${x.value}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
