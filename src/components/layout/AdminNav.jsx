import { LayoutDashboard, BookOpen, Plus, BarChart3, Trophy } from "lucide-react";
import React from "react";
export default function AdminNav({ page, setPage }) {
  return (
    <nav className="snav">
      <label>ADMIN PANEL</label>
      <button className={page === "admin" ? "current" : ""} onClick={() => setPage("admin")}>
        <LayoutDashboard />Overview
      </button>
      <button className={page === "manage" ? "current" : ""} onClick={() => setPage("manage")}>
        <BookOpen />Manage Quizzes
      </button>
      <button onClick={() => alert("Question bank UI can be connected to the backend later.")}>
        <Plus />Question Bank
      </button>
      <button onClick={() => setPage("analytics")}><BarChart3 />Analytics</button>
      <button onClick={() => setPage("leaderboard")}><Trophy />Leaderboard</button>
    </nav>
  );
}
