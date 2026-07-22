"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useChat } from "../../hooks/useChat";
import { Loading } from "../ui/Loading";
import { CaseStudyModal, type SearchMatch } from "../layout/CaseStudyModal";
import { ChatContactForm } from "../chat/ChatContactForm";
const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#eg-chat-clip)">
      <path className="eg-sparkle-lg" d="M14.7766 21.7289L15.1539 24.0306C15.233 24.5137 15.891 24.5137 15.9701 24.0306L16.3474 21.7289C16.8007 18.9626 18.8539 16.7956 21.4759 16.3172L23.6572 15.9191C24.115 15.8357 24.115 15.1413 23.6572 15.0579L21.4764 14.6598C18.8544 14.1814 16.8012 12.0144 16.3479 9.24807L15.9706 6.94642C15.8915 6.46328 15.2335 6.46275 15.1544 6.94642L14.7801 9.23012C14.3248 12.0075 12.2631 14.183 9.63103 14.6635L7.46731 15.0584C7.00894 15.1419 7.00894 15.8362 7.46731 15.9196L9.64904 16.3178C12.2706 16.7962 14.3238 18.9632 14.7776 21.7295L14.7766 21.7289Z" fill="#191C25" fillOpacity="0.95" />
      <path className="eg-sparkle-sm" d="M10.192 5.88562C10.4427 5.83968 10.4427 5.46003 10.192 5.4141L8.73432 5.14797C7.16557 4.86178 5.93709 3.56549 5.66538 1.91013L5.41318 0.372004C5.36964 0.107464 5.00986 0.107464 4.96632 0.372004L4.71612 1.89957C4.44391 3.56179 3.20993 4.86337 1.63517 5.15061L0.188024 5.41462C-0.0626748 5.46056 -0.0626748 5.84021 0.188024 5.88615L1.64618 6.15227C3.21493 6.43846 4.44341 7.73476 4.71462 9.39011L4.96682 10.9282C5.01036 11.1928 5.37014 11.1928 5.41368 10.9282L5.66588 9.39011C5.93709 7.73476 7.16557 6.43846 8.73432 6.15227L10.1925 5.88615L10.192 5.88562Z" fill="#191C25" fillOpacity="0.95" />
      <path className="eg-sparkle-xs" d="M16.6841 2.51422L17.3552 2.63672C18.1738 2.78615 18.8153 3.46307 18.957 4.32692L19.073 5.035C19.0981 5.1876 19.3057 5.1876 19.3307 5.035L19.4468 4.32692C19.5885 3.46307 20.2295 2.78615 21.0486 2.63672L21.7196 2.51422C21.8643 2.48782 21.8643 2.26869 21.7196 2.24229L21.0486 2.11978C20.23 1.97035 19.5885 1.29343 19.4468 0.429583L19.3307 -0.278495C19.3057 -0.431094 19.0981 -0.431094 19.073 -0.278495L18.958 0.423775C18.8158 1.29132 18.1718 1.97088 17.3497 2.12084L16.6841 2.24229C16.5395 2.26869 16.5395 2.48782 16.6841 2.51422Z" fill="#191C25" fillOpacity="0.95" />
    </g>
    <defs>
      <clipPath id="eg-chat-clip">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    messages,
    isLoading,
    error,
    contactFormAfterIndex,
    needsSummary,
    caseStudiesAfterIndex,
    caseStudies,
    sendMessage,
    reset,
  } = useChat();
  const [selected, setSelected] = useState<SearchMatch | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading, contactFormAfterIndex, caseStudiesAfterIndex]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    sendMessage(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };


  return (
    <div className="relative w-16 h-full shrink-0">
      {/* Toggle button */}
      <button
        className={`eg-chat-btn${open ? " eg-chat-btn--open" : ""} absolute inset-0 bg-transparent border-none cursor-pointer flex items-center justify-center p-0 transition-colors`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <ChatIcon />
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className={`bg-eg-white shadow-[0_8px_40px_rgba(10,14,20,0.18)] flex flex-col z-100 ${
            fullscreen
              ? "fixed inset-0 w-screen h-screen"
              : "absolute top-full right-0 w-[min(380px,calc(100vw-32px))] h-[min(500px,70vh)]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-eg-blue-black-08 shrink-0">
            <div>
              <p className="m-0 text-[13px] font-helvetica font-medium text-eg-blue-black leading-4.5">
                Ask us anything
              </p>
              <p className="m-0 text-[11px] font-helvetica font-normal text-eg-blue-black-25">
                Estipona Group AI
              </p>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  className="bg-transparent border-none cursor-pointer text-[10px] font-helvetica font-medium tracking-[1.2px] uppercase text-eg-blue-black-25 px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setFullscreen((prev) => !prev)}
                title={fullscreen ? "Collapse" : "Expand"}
                className="bg-transparent border-none cursor-pointer text-[28px] text-eg-blue-black-25 px-2 py-1 leading-none"
              >
                {fullscreen ? "⤡" : "⤢"}
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3"
          >
            {messages.length === 0 && (
              <p className="m-auto text-center text-[13px] font-helvetica font-normal text-eg-blue-black-25 leading-5">
                What can we help you with?
              </p>
            )}

            {messages.map((msg, i) => (
              <React.Fragment key={i}>
                <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 text-[13px] font-helvetica font-normal leading-5 ${
                      msg.role === "user"
                        ? "bg-eg-blue-black text-eg-white"
                        : "bg-eg-bg-gray text-eg-blue-black"
                    }`}
                  >
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                          h1: ({ children }) => <p className="m-0 mb-2 font-semibold text-sm">{children}</p>,
                          h2: ({ children }) => <p className="mt-2 mb-1 font-semibold text-[13px]">{children}</p>,
                          h3: ({ children }) => <p className="mt-2 mb-1 font-semibold text-xs">{children}</p>,
                          p: ({ children }) => <p className="m-0 mb-2">{children}</p>,
                          ul: ({ children }) => <ul className="m-0 mb-2 pl-4.5">{children}</ul>,
                          ol: ({ children }) => <ol className="m-0 mb-2 pl-4.5">{children}</ol>,
                          li: ({ children }) => <li className="mb-1">{children}</li>,
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>

                {/* Contact form appears inline at the position it was triggered */}
                {i === contactFormAfterIndex && (
                  <ChatContactForm needsSummary={needsSummary} messages={messages} />
                )}

                {/* Case studies pinned inline at the position they were triggered */}
                {i === caseStudiesAfterIndex && caseStudies.length > 0 && (
                  <div className="flex flex-col gap-0">
                    <p className="m-0 mb-2 text-[10px] font-helvetica font-medium tracking-[1.4px] uppercase text-eg-red">
                      Related Work
                    </p>
                    {caseStudies.map((match, j) => (
                      <button
                        key={j}
                        onClick={() => setSelected(match)}
                        className="block w-full text-left px-3.5 py-3 border-none border-b border-eg-blue-black-08 bg-eg-bg-gray cursor-pointer transition-colors hover:bg-eg-blue-black-06"
                      >
                        <p className="m-0 mb-0.75 text-[13px] font-helvetica font-medium leading-4.5 text-eg-blue-black">{match.title}</p>
                        <p className="m-0 text-[11px] font-helvetica font-normal leading-4 text-eg-blue-black-25">{match.reason}</p>
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2.5 bg-eg-bg-gray text-eg-red">
                  <Loading size="small" />
                </div>
              </div>
            )}

            {error && (
              <p className="m-0 text-xs font-helvetica text-eg-red text-center">
                {error}
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-eg-blue-black-08 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              disabled={isLoading}
              className={`flex-1 px-4 py-3.5 border-none outline-none text-[13px] font-helvetica font-normal text-eg-blue-black bg-eg-white ${
                isLoading ? "cursor-wait" : "cursor-text"
              }`}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`px-5 border-none text-eg-white text-lg transition-colors shrink-0 ${
                isLoading || !input.trim()
                  ? "bg-eg-bg-gray cursor-default"
                  : "bg-eg-blue-black cursor-pointer"
              }`}
            >
              ↑
            </button>
          </div>
        </div>
      )}

      {selected && (
        <CaseStudyModal match={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
