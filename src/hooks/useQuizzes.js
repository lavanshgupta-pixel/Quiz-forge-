import { useEffect, useState, useCallback } from "react";
import { getQuizzes } from "../api/quizzes";

// Loads the quiz list once and exposes a refetch, so any page (Dashboard,
// Explorer, Bookmarks, Admin) can share the same data source.
export function useQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {
    setLoading(true);
    getQuizzes()
      .then(setQuizzes)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { quizzes, loading, error, refetch };
}
