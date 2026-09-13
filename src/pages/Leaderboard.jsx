import { Trophy, Target, Flame } from "lucide-react";
import { useAsync } from "../hooks/useAsync";
import { getLeaderboard, getMyRankSummary } from "../api/leaderboard";
import React from "react";

export default function Leaderboard() {
  const { data: users, loading: usersLoading } = useAsync(getLeaderboard, []);
  const { data: summary, loading: summaryLoading } = useAsync(getMyRankSummary, []);

  if (usersLoading || summaryLoading) {
    return <div className="page"><p className="muted">Loading leaderboard…</p></div>;
  }

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <div className="eyebrow">COMPETITION</div>
          <h1>Leaderboard</h1>
          <p>See how you rank against other students.</p>
        </div>
        <span className="period">This Month ▾</span>
      </div>
      <div className="leader-hero">
        <div><Trophy size={48} /><b>#{summary.rank}</b><span>Your current rank</span></div>
        <div><Target size={48} /><b>{summary.averageScore}</b><span>Average score</span></div>
        <div><Flame size={48} /><b>{summary.activeStreakDays} days</b><span>Active streak</span></div>
      </div>
      <div className="panel table">
        <div className="table-head"><span>Rank</span><span>Student</span><span>Score</span></div>
        {users.map((u) => (
          <div className={`table-row ${u.rank === summary.rank ? "you" : ""}`} key={u.name}>
            <strong>#{u.rank}</strong>
            <div className="user">
              <span className="avatar sm">{u.name.split(" ").map((x) => x[0]).join("")}</span>
              {u.name} {u.rank === summary.rank && <em>You</em>}
            </div>
            <b>{u.score}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
