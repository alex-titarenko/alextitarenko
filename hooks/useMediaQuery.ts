import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const listener = () => setMatches(mediaQuery.matches);

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches)

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
