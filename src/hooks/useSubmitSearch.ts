import { useState, useCallback } from "react";
import type { SearchMatch } from "../components/layout/CaseStudyModal";

interface SearchResult {
  matches: SearchMatch[];
}

export function useSubmitSearch() {
  const [data, setData] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitSearch = useCallback(async (queryString: string) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const res = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ need: queryString }),
      });
      const result = await res.json();
      setData(result);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error("Search failed"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError, error, submitSearch };
}
