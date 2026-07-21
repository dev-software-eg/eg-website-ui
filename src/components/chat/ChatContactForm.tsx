import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { ChatMessage } from "../hooks/useChat";

interface ChatContactFormProps {
  needsSummary?: string | null;
  messages?: ChatMessage[];
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  border: "1px solid var(--eg-blue-black-08)",
  outline: "none",
  fontSize: 13,
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
  color: "var(--eg-blue-black)",
  background: "var(--eg-white)",
  width: "100%",
  boxSizing: "border-box",
};

function formatChatLog(messages: ChatMessage[]): string {
  return messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n\n");
}

export function ChatContactForm({ needsSummary, messages = [] }: ChatContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(needsSummary ?? "");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;
    setSending(true);
    setSendError(null);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          submitter_name: name.trim(),
          submitter_email: email.trim(),
          submitter_phone: phone,
          needs_summary: message,
          chat_log: formatChatLog(messages),
          to_email: "dev-software@estiponagroup.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ background: "var(--eg-bg-gray)", padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
      <p style={{ margin: 0, fontSize: 10, fontFamily: "Helvetica Neue", fontWeight: 500, letterSpacing: 1.4, textTransform: "uppercase", color: "var(--eg-red)" }}>
        Get in Touch
      </p>
      {submitted ? (
        <p style={{ margin: 0, fontSize: 13, fontFamily: "Helvetica Neue", color: "var(--eg-blue-black)" }}>
          Thanks! We'll be in touch soon.
        </p>
      ) : (
        <>
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          <input type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
          <textarea placeholder="Your message" value={message} rows={5} onChange={(e) => setMessage(e.target.value)} style={inputStyle} />
          <button
            onClick={handleSubmit}
            disabled={sending}
            style={{ padding: "10px 16px", background: sending ? "var(--eg-blue-black-25)" : "var(--eg-blue-black)", color: "var(--eg-white)", border: "none", cursor: sending ? "wait" : "pointer", fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: 500, letterSpacing: 1.2, textTransform: "uppercase" }}
          >
            {sending ? "Sending…" : "Submit"}
          </button>
          {sendError && (
            <p style={{ margin: 0, fontSize: 12, fontFamily: "Helvetica Neue", color: "var(--eg-red)" }}>
              {sendError}
            </p>
          )}
        </>
      )}
    </div>
  );
}
