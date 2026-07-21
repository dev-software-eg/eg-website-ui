import { useState, useCallback, useRef } from "react";
import type { SearchMatch } from "../components/CaseStudyModal";

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
  const contactFormSetRef = useRef(false);
  const [needsSummary, setNeedsSummary] = useState<string | null>(null);
  const [caseStudiesAfterIndex, setCaseStudiesAfterIndex] = useState<number | null>(null);
  const [caseStudies, setCaseStudies] = useState<SearchMatch[]>([]);
  const caseStudiesSetRef = useRef(false);

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

        const updatedMessages: ChatMessage[] = data.messages ?? [
          ...next,
          { role: "assistant", content: data.reply ?? data.message ?? data.content ?? "No response." },
        ];
        setMessages(updatedMessages);

        // Only pin the form once — ignore subsequent responses with showContactForm: true
        if (data.showContactForm && !contactFormSetRef.current) {
          contactFormSetRef.current = true;
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
    contactFormSetRef.current = false;
    setNeedsSummary(null);
    setCaseStudiesAfterIndex(null);
    setCaseStudies([]);
    caseStudiesSetRef.current = false;
  }, []);

  return { messages, isLoading, error, contactFormAfterIndex, needsSummary, caseStudiesAfterIndex, caseStudies, sendMessage, reset };
}
