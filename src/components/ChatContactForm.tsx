import { useState } from "react";

interface ChatContactFormProps {
  needsSummary?: string | null;
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

export function ChatContactForm({ needsSummary }: ChatContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        description: needsSummary ?? undefined,
      }),
    }).catch(() => {});
    setSubmitted(true);
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
          <textarea placeholder="Your message" value={needsSummary ?? ""} rows={5} readOnly style={inputStyle} />
          <button
            onClick={handleSubmit}
            style={{ padding: "10px 16px", background: "var(--eg-blue-black)", color: "var(--eg-white)", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: 500, letterSpacing: 1.2, textTransform: "uppercase" }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
