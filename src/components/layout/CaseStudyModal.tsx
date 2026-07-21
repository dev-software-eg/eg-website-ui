import { useEffect } from "react";
import { createPortal } from "react-dom";

export interface SearchMatch {
  title: string;
  client?: string;
  services?: string[];
  industry?: string;
  summary?: string;
  result?: string;
  url: string;
  reason: string;
}

const labelStyle: React.CSSProperties = {
  margin: "0 0 6px",
  fontSize: 10,
  fontFamily: "Helvetica Neue",
  fontWeight: 500,
  letterSpacing: 1.4,
  textTransform: "uppercase",
  color: "var(--eg-blue-black-25)",
};

const bodyStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 14,
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
  lineHeight: "22px",
  color: "var(--eg-blue-black)",
};

const tagStyle: React.CSSProperties = {
  padding: "4px 10px",
  fontSize: 11,
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
  letterSpacing: 0.5,
  border: "1px solid var(--eg-blue-black-08)",
  color: "var(--eg-white)",
  background: "var(--eg-red)",
};

export function CaseStudyModal({ match, onClose }: { match: SearchMatch; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,14,20,0.55)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--eg-white)",
          width: "min(600px, 90vw)",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <div style={{ padding: "40px 40px 24px" }}>
          <p style={{ margin: "0 0 12px", fontSize: 10, fontFamily: "Helvetica Neue", fontWeight: 500, letterSpacing: 1.4, textTransform: "uppercase", color: "var(--eg-red)" }}>
            {match.industry ?? "Case Study"}
          </p>
          <h2 style={{ margin: "0 0 8px", fontSize: 28, fontFamily: "Helvetica Neue", fontWeight: 500, lineHeight: "34px", color: "var(--eg-blue-black)" }}>
            {match.title}
          </h2>
          {match.client && (
            <p style={{ margin: 0, fontSize: 13, fontFamily: "Helvetica Neue", fontWeight: 400, color: "var(--eg-blue-black-25)" }}>
              {match.client}
            </p>
          )}
        </div>

        <div style={{ height: 1, background: "var(--eg-blue-black-08)", margin: "0 40px" }} />

        <div style={{ padding: "24px 40px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
          {match.services && match.services.length > 0 && (
            <div>
              <p style={labelStyle}>Services</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {match.services.map((s) => <span key={s} style={tagStyle}>{s}</span>)}
              </div>
            </div>
          )}
          {match.summary && (
            <div>
              <p style={labelStyle}>Summary</p>
              <p style={bodyStyle}>{match.summary}</p>
            </div>
          )}
          {match.result && (
            <div>
              <p style={labelStyle}>Result</p>
              <p style={bodyStyle}>{match.result}</p>
            </div>
          )}
          <div>
            <p style={labelStyle}>Why this matches</p>
            <p style={bodyStyle}>{match.reason}</p>
          </div>
          <a
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: "flex-start", marginTop: 8, padding: "12px 24px", background: "var(--eg-blue-black)", color: "var(--eg-white)", fontSize: 12, fontFamily: "Helvetica Neue", fontWeight: 500, letterSpacing: 1.2, textTransform: "uppercase", textDecoration: "none" }}
          >
            View Case Study ↗
          </a>
        </div>

        <button
          onClick={onClose}
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "var(--eg-blue-black-25)", lineHeight: 1, padding: 4 }}
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
