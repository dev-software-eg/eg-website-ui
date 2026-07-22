"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { ChatMessage } from "../../hooks/useChat";

interface ChatContactFormProps {
  needsSummary?: string | null;
  messages?: ChatMessage[];
}

const inputClass =
  "px-3 py-2.5 border border-eg-blue-black-08 outline-none text-[13px] font-helvetica font-normal text-eg-blue-black bg-eg-white w-full box-border";

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          submitter_name: name.trim(),
          submitter_email: email.trim(),
          submitter_phone: phone,
          needs_summary: message,
          chat_log: formatChatLog(messages),
          to_email: "dev-software@estiponagroup.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-eg-bg-gray p-4 flex flex-col gap-2.5">
      <p className="m-0 text-[10px] font-helvetica font-medium tracking-[1.4px] uppercase text-eg-red">
        Get in Touch
      </p>
      {submitted ? (
        <p className="m-0 text-[13px] font-helvetica text-eg-blue-black">
          Thanks! We'll be in touch soon.
        </p>
      ) : (
        <>
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
          <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          <input type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
          <textarea placeholder="Your message" value={message} rows={5} onChange={(e) => setMessage(e.target.value)} className={inputClass} />
          <button
            onClick={handleSubmit}
            disabled={sending}
            className={`px-4 py-2.5 text-eg-white border-none text-[11px] font-helvetica font-medium tracking-[1.2px] uppercase ${
              sending ? "bg-eg-blue-black-25 cursor-wait" : "bg-eg-blue-black cursor-pointer"
            }`}
          >
            {sending ? "Sending…" : "Submit"}
          </button>
          {sendError && (
            <p className="m-0 text-xs font-helvetica text-eg-red">
              {sendError}
            </p>
          )}
        </>
      )}
    </div>
  );
}
