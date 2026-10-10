import { useEffect, useState } from 'react';

/** Current time, refreshed every `tickMs` so day-based content updates live. */
export function useNow(tickMs = 60_000): Date {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), tickMs);
    return () => window.clearInterval(t);
  }, [tickMs]);
  return now;
}