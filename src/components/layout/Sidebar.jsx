import { X, Target } from "lucide-react";
import StudentNav from "./StudentNav";
import AdminNav from "./AdminNav";
import React from "react";

export default function Sidebar({ role, page, setPage, sidebar, setSidebar }) {
  return (
    <aside className={`sidebar ${sidebar ? "show" : ""}`}>
      <button className="close-sidebar mobile-only" onClick={() => setSidebar(false)}>
        <X />
      </button>
      {role === "student" ? (
        <StudentNav page={page} setPage={setPage} />
      ) : (
        <AdminNav page={page} setPage={setPage} />
      )}
      <div className="sidebar-bottom">
        <div className="mini-card">
          <div className="mini-icon"><Target size={17} /></div>
          <div><b>Daily Goal</b><span>3 of 5 quizzes</span></div>
        </div>
      </div>
    </aside>
  );
}
