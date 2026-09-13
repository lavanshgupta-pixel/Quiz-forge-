import { useEffect, useState } from "react";

// Generic "fetch this on mount" hook used by pages that own their own data
// (Leaderboard, Analytics, Admin overview) so each stays a self-contained
// unit that's easy to point at a real endpoint later.
export function useAsync(asyncFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    asyncFn()
      .then((result) => { if (active) setData(result); })
      .catch((err) => { if (active) setError(err); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
