import { useState, useRef, useEffect } from "react";
import searchIcon from "../assets/search-icon-light.svg";
import { useSubmitSearch } from "../hooks/useSubmitSearch";
import { Loading } from "./Loading";
import { CaseStudyModal, type SearchMatch } from "./CaseStudyModal";

export default function SearchButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SearchMatch | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const { data, isLoading, submitSearch } = useSubmitSearch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "Enter" && open) {
      submitSearch(inputRef.current?.value || "");
    }
  };

  return (
    <div style={{ position: "relative", width: 64, flexShrink: 0 }}>
      <input
        ref={inputRef}
        type="search"
        placeholder={"Search..."}
        disabled={isLoading}
        onKeyDown={(e) => handleKeyDown(e)}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 64,
          width: open ? 280 : 0,
          padding: open ? "0 20px" : 0,
          border: "none",
          borderLeft: open ? "1px var(--eg-blue-black-08) solid" : "none",
          outline: "none",
          background: isLoading ? "var(--eg-bg-gray)" : "var(--eg-white)",
          color: isLoading ? "var(--eg-blue-black-25)" : "var(--eg-blue-black)",
          fontSize: 12,
          fontFamily: "Helvetica Neue",
          fontWeight: 400,
          letterSpacing: 1.2,
          overflow: "hidden",
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s",
          boxShadow: open ? "-4px 0 12px var(--eg-blue-black-06)" : "none",
          cursor: isLoading ? "wait" : "text",
        }}
      />

      {isLoading && open && (
        <div style={{
          position: "absolute",
          right: 84,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}>
          <Loading size="small" />
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          position: "absolute",
          inset: 0,
          background: open ? "var(--eg-sage-dark)" : "var(--eg-sage)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          transition: "background 0.2s",
        }}
      >
        <img src={searchIcon} alt="Search" style={{ height: 30 }} />
      </button>

      {/* Results panel */}
      {open && data?.matches && (
        <div style={{
          position: "absolute",
          top: "100%",
          right: 0,
          width: 344,
          background: "var(--eg-white)",
          boxShadow: "0 8px 32px var(--eg-blue-black-08)",
          zIndex: 100,
        }}>
          <p style={{
            margin: 0,
            padding: "20px 20px 12px",
            fontSize: 10,
            fontFamily: "Helvetica Neue",
            fontWeight: 500,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            color: "var(--eg-red)",
          }}>
            Results
          </p>
          {data.matches.map((match: SearchMatch, i: number) => (
            <button
              key={i}
              onClick={() => setSelected(match)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "14px 20px",
                borderTop: "1px solid var(--eg-blue-black-08)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--eg-bg-gray)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
            >
              <p style={{ margin: "0 0 4px", fontSize: 13, fontFamily: "Helvetica Neue", fontWeight: 500, lineHeight: "18px", color: "var(--eg-blue-black)" }}>
                {match.title}
              </p>
              <p style={{ margin: 0, fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: 400, lineHeight: "16px", color: "var(--eg-blue-black-25)" }}>
                {match.reason}
              </p>
            </button>
          ))}
        </div>
      )}

      {selected && <CaseStudyModal match={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
