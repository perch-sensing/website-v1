import { useEffect, useState } from "react";

/**
 * Tracks as CSS media query that is the intersection of all provided constraints
 *  @returns boolean representing state of query
 */
export default function useMediaQuery(...constraints) {
  const query = matchMedia(
    "screen and " + constraints.map((c) => `(${c})`).join(" and ")
  );
  const [matches, setMatches] = useState(matchMedia(query).matches);
  useEffect(() => {
    function queryCallback(e) {
      setMatches(query.matches);
    }

    query.addListener(queryCallback);
    return () => query.removeListener(queryCallback);
  }, [query]);
  return matches;
}
