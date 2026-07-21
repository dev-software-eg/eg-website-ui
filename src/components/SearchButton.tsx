import { useState, useRef, useEffect } from "react";
import searchIcon from "../assets/search-icon-light.svg";
import { useSubmitSearch } from "../hooks/useSubmitSearch";

export default function SearchButton() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
  //     setOpen(false);
  //   }
  // };

  const { data, isLoading, submitSearch } = useSubmitSearch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "Enter" && open) {
      submitSearch(inputRef.current?.value || "");

   
    }
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div style={{ position: "relative", width: 64, flexShrink: 0 }}>
     
      {/* Input — absolutely positioned, expands leftward over nav content */}
      <input
        ref={inputRef}
        type="search"
        placeholder={isLoading ? "Searching…" : "Search…"}
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
    </div>
  );
}
