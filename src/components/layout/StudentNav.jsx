import { LayoutDashboard, BookOpen, Trophy, BarChart3, Bookmark, Users, LogIn } from "lucide-react";
import React from "react";
export default function StudentNav({ page, setPage }) {
  return (
    <nav className="snav">
      <label>STUDENT</label>
      <button className={page === "dashboard" ? "current" : ""} onClick={() => setPage("dashboard")}>
        <LayoutDashboard />Dashboard
      </button>
      <button className={page === "quizzes" ? "current" : ""} onClick={() => setPage("quizzes")}>
        <BookOpen />Explore Quizzes
      </button>
      <button className={page === "leaderboard" ? "current" : ""} onClick={() => setPage("leaderboard")}>
        <Trophy />Leaderboard
      </button>
      <button className={page === "analytics" ? "current" : ""} onClick={() => setPage("analytics")}>
        <BarChart3 />My Analytics
      </button>
      <button className={page === "bookmarks" ? "current" : ""} onClick={() => setPage("bookmarks")}>
        <Bookmark />Bookmarks
      </button>
      <label className="mt">ACCOUNT</label>
      <button onClick={() => alert("Profile settings are frontend-only in this MVP.")}>
        <Users />Profile
      </button>
      <button onClick={() => alert("This frontend demo does not connect to a backend yet.")}>
        <LogIn />Sign out
      </button>
    </nav>
  );
}
