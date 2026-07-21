"use client";

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

const labelClass =
  "mb-1.5 text-[10px] font-helvetica font-medium tracking-[1.4px] uppercase text-eg-blue-black-25";

const bodyClass = "m-0 text-sm font-helvetica font-normal leading-[22px] text-eg-blue-black";

const tagClass =
  "px-2.5 py-1 text-[11px] font-helvetica font-normal tracking-[0.5px] border border-eg-blue-black-08 text-eg-white bg-eg-red";

export function CaseStudyModal({ match, onClose }: { match: SearchMatch; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[rgba(10,14,20,0.55)] z-1000 flex items-center justify-center px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-eg-white w-[min(600px,90vw)] max-h-[80vh] overflow-y-auto relative"
      >
        <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-6">
          <p className="mb-3 text-[10px] font-helvetica font-medium tracking-[1.4px] uppercase text-eg-red">
            {match.industry ?? "Case Study"}
          </p>
          <h2 className="mb-2 text-2xl sm:text-[28px] font-helvetica font-medium leading-8.5 text-eg-blue-black">
            {match.title}
          </h2>
          {match.client && (
            <p className="m-0 text-[13px] font-helvetica font-normal text-eg-blue-black-25">
              {match.client}
            </p>
          )}
        </div>

        <div className="h-px bg-eg-blue-black-08 mx-6 sm:mx-10" />

        <div className="px-6 sm:px-10 pt-6 pb-8 sm:pb-10 flex flex-col gap-6">
          {match.services && match.services.length > 0 && (
            <div>
              <p className={labelClass}>Services</p>
              <div className="flex gap-2 flex-wrap">
                {match.services.map((s) => <span key={s} className={tagClass}>{s}</span>)}
              </div>
            </div>
          )}
          {match.summary && (
            <div>
              <p className={labelClass}>Summary</p>
              <p className={bodyClass}>{match.summary}</p>
            </div>
          )}
          {match.result && (
            <div>
              <p className={labelClass}>Result</p>
              <p className={bodyClass}>{match.result}</p>
            </div>
          )}
          <div>
            <p className={labelClass}>Why this matches</p>
            <p className={bodyClass}>{match.reason}</p>
          </div>
          <a
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-2 px-6 py-3 bg-eg-blue-black text-eg-white text-xs font-helvetica font-medium tracking-[1.2px] uppercase no-underline"
          >
            View Case Study ↗
          </a>
        </div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-transparent border-none cursor-pointer text-xl text-eg-blue-black-25 leading-none p-1"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
