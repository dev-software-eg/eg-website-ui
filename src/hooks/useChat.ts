import { useState, useCallback, useRef } from "react";
import type { SearchMatch } from "../components/layout/CaseStudyModal";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Index in messages array after which the contact form should appear; null = not shown
  const [contactFormAfterIndex, setContactFormAfterIndex] = useState<number | null>(null);
  const [needsSummary, setNeedsSummary] = useState<string | null>(null);
  const [caseStudiesAfterIndex, setCaseStudiesAfterIndex] = useState<number | null>(null);
  const [caseStudies, setCaseStudies] = useState<SearchMatch[]>([]);
  const caseStudiesSetRef = useRef(false);
  // Groups every turn of a conversation into one logged record server-side;
  // regenerated on reset() so a new conversation doesn't overwrite the last one.
  const conversationIdRef = useRef(crypto.randomUUID());

  const sendMessage = useCallback(
    async (content: string) => {
      const next: ChatMessage[] = [...messages, { role: "user", content }];
      setMessages(next);
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next, conversationId: conversationIdRef.current }),
        });
        const data = await res.json();

        const updatedMessages: ChatMessage[] = data.messages ?? [
          ...next,
          { role: "assistant", content: data.reply ?? data.message ?? data.content ?? "No response." },
        ];
        setMessages(updatedMessages);

        if (data.showContactForm) {
          setContactFormAfterIndex(updatedMessages.length - 1);
          if (data.needsSummary) setNeedsSummary(data.needsSummary);
        }

        if (data.hasCaseStudies && Array.isArray(data.caseStudies) && !caseStudiesSetRef.current) {
          caseStudiesSetRef.current = true;
          setCaseStudiesAfterIndex(updatedMessages.length - 1);
          setCaseStudies(data.caseStudies);
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
    setContactFormAfterIndex(null);
    setNeedsSummary(null);
    setCaseStudiesAfterIndex(null);
    setCaseStudies([]);
    caseStudiesSetRef.current = false;
    conversationIdRef.current = crypto.randomUUID();
  }, []);

  return { messages, isLoading, error, contactFormAfterIndex, needsSummary, caseStudiesAfterIndex, caseStudies, sendMessage, reset };
}
