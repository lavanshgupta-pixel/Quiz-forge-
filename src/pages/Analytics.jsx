import { Target, Award, Clock3, Trophy } from "lucide-react";
import Stat from "../components/common/Stat";
import { useAsync } from "../hooks/useAsync";
import { getStudentAnalytics } from "../api/analytics";
import React from "react";

export default function Analytics() {
  const { data, loading } = useAsync(getStudentAnalytics, []);

  if (loading) return <div className="page"><p className="muted">Loading analytics…</p></div>;

  return (
    <div className="page">
      <div className="page-title">
        <div><div className="eyebrow">PERFORMANCE</div><h1>My Analytics</h1><p>Understand your strengths and improve your weak areas.</p></div>
      </div>
      <div className="stats-grid">
        <Stat icon={<Target />} label="Overall Accuracy" value={data.overallAccuracy} sub={data.accuracyTrend} />
        <Stat icon={<Award />} label="Average Score" value={data.averageScore} sub={data.averageScoreNote} />
        <Stat icon={<Clock3 />} label="Avg. Time" value={data.avgTime} sub="Per quiz" />
        <Stat icon={<Trophy />} label="Best Subject" value={data.bestSubject} sub={data.bestSubjectScore} />
      </div>
      <div className="two-col">
        <div className="panel">
          <h3>Subject-wise Performance</h3>
          {data.subjectPerformance.map((s) => (
            <div className="meter" key={s.subject}>
              <div><span>{s.subject}</span><b>{s.value}%</b></div>
              <div><span style={{ width: `${s.value}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="panel">
          <h3>Score Trend</h3>
          <div className="line-chart">
            <div className="line-shape">↗</div>
            <b>{data.scoreTrend.value}</b>
            <small>{data.scoreTrend.note}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
