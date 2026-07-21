import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useChat } from "../hooks/useChat";
import { Loading } from "./Loading";
import { CaseStudyModal, type SearchMatch } from "./CaseStudyModal";
import { ChatContactForm } from "./ChatContactForm";
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
    <div style={{ position: "relative", width: 64, flexShrink: 0 }}>
      {/* Toggle button */}
      <button
        className="eg-chat-btn"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          transition: "background 0.2s",
        }}
      >
        <ChatIcon />
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: fullscreen ? "fixed" : "absolute",
            top: fullscreen ? 0 : "100%",
            right: 0,
            left: fullscreen ? 0 : "auto",
            bottom: fullscreen ? 0 : "auto",
            width: fullscreen ? "100vw" : 380,
            height: fullscreen ? "100vh" : 500,
            background: "var(--eg-white)",
            boxShadow: "0 8px 40px rgba(10,14,20,0.18)",
            display: "flex",
            flexDirection: "column",
            zIndex: 100,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid var(--eg-blue-black-08)",
              flexShrink: 0,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  fontFamily: "Helvetica Neue",
                  fontWeight: 500,
                  color: "var(--eg-blue-black)",
                  lineHeight: "18px",
                }}
              >
                Ask us anything
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  color: "var(--eg-blue-black-25)",
                }}
              >
                Estipona Group AI
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 10,
                    fontFamily: "Helvetica Neue",
                    fontWeight: 500,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    color: "var(--eg-blue-black-25)",
                    padding: "4px 8px",
                  }}
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setFullscreen((prev) => !prev)}
                title={fullscreen ? "Collapse" : "Expand"}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 28,
                  color: "var(--eg-blue-black-25)",
                  padding: "4px 8px",
                  lineHeight: 1,
                }}
              >
                {fullscreen ? "⤡" : "⤢"}
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {messages.length === 0 && (
              <p
                style={{
                  margin: "auto",
                  textAlign: "center",
                  fontSize: 13,
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  color: "var(--eg-blue-black-25)",
                  lineHeight: "20px",
                }}
              >
                What can we help you with?
              </p>
            )}

            {messages.map((msg, i) => (
              <React.Fragment key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "78%",
                      padding: "10px 14px",
                      background: msg.role === "user" ? "var(--eg-blue-black)" : "var(--eg-bg-gray)",
                      color: msg.role === "user" ? "var(--eg-white)" : "var(--eg-blue-black)",
                      fontSize: 13,
                      fontFamily: "Helvetica Neue",
                      fontWeight: 400,
                      lineHeight: "20px",
                    }}
                  >
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                          h1: ({ children }) => <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 14 }}>{children}</p>,
                          h2: ({ children }) => <p style={{ margin: "8px 0 4px", fontWeight: 600, fontSize: 13 }}>{children}</p>,
                          h3: ({ children }) => <p style={{ margin: "8px 0 4px", fontWeight: 600, fontSize: 12 }}>{children}</p>,
                          p: ({ children }) => <p style={{ margin: "0 0 8px" }}>{children}</p>,
                          ul: ({ children }) => <ul style={{ margin: "0 0 8px", paddingLeft: 18 }}>{children}</ul>,
                          ol: ({ children }) => <ol style={{ margin: "0 0 8px", paddingLeft: 18 }}>{children}</ol>,
                          li: ({ children }) => <li style={{ marginBottom: 4 }}>{children}</li>,
                          strong: ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
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
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    <p style={{ margin: "0 0 8px", fontSize: 10, fontFamily: "Helvetica Neue", fontWeight: 500, letterSpacing: 1.4, textTransform: "uppercase", color: "var(--eg-red)" }}>
                      Related Work
                    </p>
                    {caseStudies.map((match, j) => (
                      <button
                        key={j}
                        onClick={() => setSelected(match)}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 14px", border: "none", borderBottom: "1px solid var(--eg-blue-black-08)", background: "var(--eg-bg-gray)", cursor: "pointer", transition: "background 0.15s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.06)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--eg-bg-gray)")}
                      >
                        <p style={{ margin: "0 0 3px", fontSize: 13, fontFamily: "Helvetica Neue", fontWeight: 500, lineHeight: "18px", color: "var(--eg-blue-black)" }}>{match.title}</p>
                        <p style={{ margin: 0, fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: 400, lineHeight: "16px", color: "var(--eg-blue-black-25)" }}>{match.reason}</p>
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ padding: "10px 14px", background: "var(--eg-bg-gray)", color: "var(--eg-red)" }}>
                  <Loading size="small" />
                </div>
              </div>
            )}

            {error && (
              <p style={{ margin: 0, fontSize: 12, fontFamily: "Helvetica Neue", color: "var(--eg-red)", textAlign: "center" }}>
                {error}
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid var(--eg-blue-black-08)",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "14px 16px",
                border: "none",
                outline: "none",
                fontSize: 13,
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                color: "var(--eg-blue-black)",
                background: "var(--eg-white)",
                cursor: isLoading ? "wait" : "text",
              }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              style={{
                padding: "0 20px",
                background:
                  isLoading || !input.trim()
                    ? "var(--eg-bg-gray)"
                    : "var(--eg-blue-black)",
                border: "none",
                cursor: isLoading || !input.trim() ? "default" : "pointer",
                color: "var(--eg-white)",
                fontSize: 18,
                transition: "background 0.15s",
                flexShrink: 0,
              }}
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
