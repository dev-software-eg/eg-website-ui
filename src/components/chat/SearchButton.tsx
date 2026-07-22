"use client";

import { useState, useRef, useEffect } from "react";
import searchIcon from "../../assets/search-icon-light.svg";
import { useSubmitSearch } from "../../hooks/useSubmitSearch";
import { Loading } from "../ui/Loading";
import { CaseStudyModal, type SearchMatch } from "../layout/CaseStudyModal";

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
    <div className="relative w-16 shrink-0">
      <input
        ref={inputRef}
        type="search"
        placeholder={"Search..."}
        disabled={isLoading}
        onKeyDown={(e) => handleKeyDown(e)}
        className={`absolute inset-y-0 right-16 border-none outline-none font-helvetica text-xs tracking-[1.2px] overflow-hidden transition-[width,padding,background,box-shadow] duration-300 ease-in-out ${
          open
            ? "w-[min(280px,calc(100vw-96px))] max-w-70 px-5 border-l border-eg-blue-black-08 shadow-[-4px_0_12px_var(--eg-blue-black-06)]"
            : "w-0 px-0 border-l-0 shadow-none"
        } ${isLoading ? "bg-eg-bg-gray text-eg-blue-black-25 cursor-wait" : "bg-eg-white text-eg-blue-black cursor-text"}`}
      />

      {isLoading && open && (
        <div className="absolute right-21 top-1/2 -translate-y-1/2 pointer-events-none">
          <Loading size="small" />
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`absolute inset-0 border-none cursor-pointer flex items-center justify-center p-0 transition-colors ${
          open ? "bg-eg-sage-dark" : "bg-eg-sage"
        }`}
      >
        <img src={searchIcon.src} alt="Search" className="h-7.5" />
      </button>

      {/* Results panel */}
      {open && data?.matches && (
        <div className="absolute top-full right-0 w-86 max-w-[calc(100vw-32px)] bg-eg-white shadow-[0_8px_32px_var(--eg-blue-black-08)] z-100">
          <p className="m-0 pt-5 px-5 pb-3 text-[10px] font-helvetica font-medium tracking-[1.4px] uppercase text-eg-red">
            Results
          </p>
          {data.matches.map((match: SearchMatch, i: number) => (
            <button
              key={i}
              onClick={() => setSelected(match)}
              className="block w-full text-left py-3.5 px-5 border-none border-t border-eg-blue-black-08 bg-transparent cursor-pointer transition-colors hover:bg-eg-bg-gray"
            >
              <p className="mb-1 text-[13px] font-helvetica font-medium leading-4.5 text-eg-blue-black">
                {match.title}
              </p>
              <p className="m-0 text-[11px] font-helvetica font-normal leading-4 text-eg-blue-black-25">
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
