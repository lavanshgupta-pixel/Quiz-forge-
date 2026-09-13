import { useState } from "react";
import React from "react";
import { Plus, CheckCircle2, X } from "lucide-react";

export default function ManageQuizzes({ quizzes, openQuiz }) {
  const [created, setCreated] = useState(false);

  return (
    <div className="page">
      <div className="page-title">
        <div><div className="eyebrow">CONTENT MANAGEMENT</div><h1>Manage Quizzes</h1><p>Manage your quiz library and question sets.</p></div>
        <button className="primary" onClick={() => setCreated(true)}><Plus /> New Quiz</button>
      </div>
      {created && (
        <div className="notice success">
          <CheckCircle2 />
          <div><b>Frontend demo</b><p>This form can be wired to POST /api/quizzes once the Express backend exists — see src/api/quizzes.js.</p></div>
          <button onClick={() => setCreated(false)}><X /></button>
        </div>
      )}
      <div className="panel table">
        <div className="table-head"><span>Quiz</span><span>Category</span><span>Questions</span><span>Actions</span></div>
        {quizzes.map((q) => (
          <div className="table-row" key={q.id}>
            <div className="user"><span className={`activity-icon ${q.color}`}>{q.icon}</span><b>{q.title}</b></div>
            <span>{q.category}</span>
            <span>{q.questions}</span>
            <button className="ghost" onClick={() => openQuiz(q)}>Preview</button>
          </div>
        ))}
      </div>
    </div>
  );
}
