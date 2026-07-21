import { useMutation } from "@tanstack/react-query";

export function useSubmitSearch() {
  const {
    mutate: submitSearch,
    data,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (queryString: string) =>
      // fetch("https://marketing-matcher.vercel.app/api/match", {
      fetch("http://localhost:3000/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ need: queryString }),
      }).then((res) => res.json()),
  });

  return { data, isLoading: isPending, isError, error, submitSearch };
}
