import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useChat } from "../hooks/useChat";
import { Loading } from "./Loading";
import { CaseStudyModal, type SearchMatch } from "./CaseStudyModal";
import aiIcon from "../assets/ai-icon.svg";

const contactInputStyle: React.CSSProperties = {
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

const ChatIcon = () => <img src={aiIcon} alt="AI Icon" />;
// const ChatIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//     <path
//       d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
//       stroke="white"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    messages,
    isLoading,
    error,
    showContactForm,
    needsSummary,
    hasCaseStudies,
    caseStudies,
    sendMessage,
    reset,
  } = useChat();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [selected, setSelected] = useState<SearchMatch | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading]);

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

  function setContactMessage(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div style={{ position: "relative", width: 64, flexShrink: 0 }}>
      {/* Toggle button */}
      <button
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
            position: "absolute",
            top: "100%",
            right: 0,
            width: 380,
            height: 500,
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
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "10px 14px",
                    background:
                      msg.role === "user"
                        ? "var(--eg-blue-black)"
                        : "var(--eg-bg-gray)",
                    color:
                      msg.role === "user"
                        ? "var(--eg-white)"
                        : "var(--eg-blue-black)",
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
                        h1: ({ children }) => (
                          <p
                            style={{
                              margin: "0 0 8px",
                              fontWeight: 600,
                              fontSize: 14,
                            }}
                          >
                            {children}
                          </p>
                        ),
                        h2: ({ children }) => (
                          <p
                            style={{
                              margin: "8px 0 4px",
                              fontWeight: 600,
                              fontSize: 13,
                            }}
                          >
                            {children}
                          </p>
                        ),
                        h3: ({ children }) => (
                          <p
                            style={{
                              margin: "8px 0 4px",
                              fontWeight: 600,
                              fontSize: 12,
                            }}
                          >
                            {children}
                          </p>
                        ),
                        p: ({ children }) => (
                          <p style={{ margin: "0 0 8px" }}>{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul style={{ margin: "0 0 8px", paddingLeft: 18 }}>
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol style={{ margin: "0 0 8px", paddingLeft: 18 }}>
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li style={{ marginBottom: 4 }}>{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong style={{ fontWeight: 600 }}>
                            {children}
                          </strong>
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 14px",
                    background: "var(--eg-bg-gray)",
                    color: "var(--eg-red)",
                  }}
                >
                  <Loading size="small" />
                </div>
              </div>
            )}

            {error && (
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  fontFamily: "Helvetica Neue",
                  color: "var(--eg-red)",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            {showContactForm && (
              <div
                style={{
                  background: "var(--eg-bg-gray)",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    fontFamily: "Helvetica Neue",
                    fontWeight: 500,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: "var(--eg-red)",
                  }}
                >
                  Get in Touch
                </p>
                {contactSubmitted ? (
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      fontFamily: "Helvetica Neue",
                      color: "var(--eg-blue-black)",
                    }}
                  >
                    Thanks! We'll be in touch soon.
                  </p>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      style={contactInputStyle}
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      style={contactInputStyle}
                    />
                    <textarea
                      id="feedback"
                      name="message"
                      placeholder="Your message"
                      value={needsSummary ?? ""}
                      rows={5}
                      cols={40}
                      onChange={(e) => setContactMessage(e.target.value)}
                      style={contactInputStyle}
                    ></textarea>
                    <button
                      onClick={() => {
                        if (contactName.trim() && contactEmail.trim()) {
                          fetch("http://localhost:3000/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              name: contactName.trim(),
                              email: contactEmail.trim(),
                              description: needsSummary ?? undefined,
                            }),
                          }).catch(() => {});
                          setContactSubmitted(true);
                        }
                      }}
                      style={{
                        padding: "10px 16px",
                        background: "var(--eg-blue-black)",
                        color: "var(--eg-white)",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 11,
                        fontFamily: "Helvetica Neue",
                        fontWeight: 500,
                        letterSpacing: 1.2,
                        textTransform: "uppercase",
                      }}
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            )}

            {hasCaseStudies && caseStudies.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <p style={{
                  margin: "0 0 8px",
                  fontSize: 10,
                  fontFamily: "Helvetica Neue",
                  fontWeight: 500,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "var(--eg-red)",
                }}>
                  Related Work
                </p>
                {caseStudies.map((match, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(match)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 14px",
                      border: "none",
                      borderBottom: "1px solid var(--eg-blue-black-08)",
                      background: "var(--eg-bg-gray)",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.06)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background = "var(--eg-bg-gray)")
                    }
                  >
                    <p style={{ margin: "0 0 3px", fontSize: 13, fontFamily: "Helvetica Neue", fontWeight: 500, lineHeight: "18px", color: "var(--eg-blue-black)" }}>
                      {match.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: 400, lineHeight: "16px", color: "var(--eg-blue-black-25)" }}>
                      {match.reason}
                    </p>
                  </button>
                ))}
              </div>
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

      {selected && <CaseStudyModal match={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
