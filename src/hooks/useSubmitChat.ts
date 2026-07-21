import { useMutation } from "@tanstack/react-query";

export function useSubmitChat() {
  const {
    mutate: submitConversation,
    data,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (queryString: string) =>
      // fetch("https://marketing-matcher.vercel.app/api/chat", {
      fetch("http://localhost:3000/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ need: queryString }),
      }).then((res) => res.json()),
  });

  return { data, isLoading: isPending, isError, error, submitConversation };
}