import { Menu, Sparkles } from "lucide-react";
import React from "react";

export default function TopBar({ page, setPage, role, setRole, setSidebar }) {
  return (
    <header className="topbar">
      <button className="icon-btn mobile-only" onClick={() => setSidebar(true)}>
        <Menu size={21} />
      </button>
      <button className="brand" onClick={() => setPage("dashboard")}>
        <span className="brand-mark"><Sparkles size={18} /></span>
        <span>Quiz<span>Forge</span></span>
      </button>
      <nav className="topnav">
        <button className={page === "dashboard" ? "active" : ""} onClick={() => setPage("dashboard")}>Dashboard</button>
        <button className={page === "quizzes" ? "active" : ""} onClick={() => setPage("quizzes")}>Explore Quizzes</button>
        <button onClick={() => setPage("leaderboard")}>Leaderboard</button>
      </nav>
      <div className="top-actions">
        <div className="role-switch">
          <button
            className={role === "student" ? "selected" : ""}
            onClick={() => { setRole("student"); setPage("dashboard"); }}
          >
            Student
          </button>
          <button
            className={role === "admin" ? "selected" : ""}
            onClick={() => { setRole("admin"); setPage("admin"); }}
          >
            Admin
          </button>
        </div>
        <div className="avatar">RD</div>
      </div>
    </header>
  );
}
