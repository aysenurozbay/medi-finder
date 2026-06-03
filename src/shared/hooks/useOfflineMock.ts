import { useEffect, useState } from "react";

export function useOfflineMock() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const shouldGoOffline = Math.random() < 0.1; // %10 chance
      setIsOffline(shouldGoOffline);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return isOffline;
}
