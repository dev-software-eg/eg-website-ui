import { useState, useCallback } from "react";
import type { SearchMatch } from "../components/CaseStudyModal";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [needsSummary, setNeedsSummary] = useState<string | null>(null);
  const [hasCaseStudies, setHasCaseStudies] = useState(false);
  const [caseStudies, setCaseStudies] = useState<SearchMatch[]>([]);

  const sendMessage = useCallback(
    async (content: string) => {
      const next: ChatMessage[] = [...messages, { role: "user", content }];
      setMessages(next);
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next }),
        });
        const data = await res.json();
        if (data.showContactForm) setShowContactForm(true);
        if (data.needsSummary) setNeedsSummary(data.needsSummary);
        if (data.hasCaseStudies && Array.isArray(data.caseStudies)) {
          setHasCaseStudies(true);
          setCaseStudies(data.caseStudies);
        }
        if (data.messages) {
          setMessages(data.messages);
        } else {
          const reply = data.reply ?? data.message ?? data.content ?? "No response.";
          setMessages([...next, { role: "assistant", content: reply }]);
        }
      } catch {
        setError("Failed to get a response. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const reset = useCallback(() => {
    setMessages([]);
    setError(null);
    setShowContactForm(false);
    setNeedsSummary(null);
    setHasCaseStudies(false);
    setCaseStudies([]);
  }, []);

  return { messages, isLoading, error, showContactForm, needsSummary, hasCaseStudies, caseStudies, sendMessage, reset };
}
