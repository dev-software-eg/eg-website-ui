"use client";

import { useState, useRef } from "react";

interface Category {
  id: string;
  label: string;
  subheading?: string;
  description: string;
  href?: string;
}

interface WhatWeDoProps {
  heading?: string;
  subheading?: string;
  categories?: Category[];
}

const DEFAULT_CATEGORIES: Category[] = [
  {
    id: "creative",
    label: "Creative",
    subheading: "01",
    description:
      "From logos and brand development to websites and billboards, if people see it, we make it.",
    href: "/services/creative",
  },
  {
    id: "marketing",
    label: "Marketing",
    subheading: "02",
    description:
      "Integrated campaigns that reach the right audience at the right moment across every channel.",
    href: "/services/marketing",
  },
  {
    id: "digital",
    label: "Digital",
    subheading: "03",
    description:
      "Web, mobile, and social experiences built to perform and built to last.",
    href: "/services/digital",
  },
  {
    id: "strategy",
    label: "Strategy",
    subheading: "04",
    description:
      "Research-backed positioning and planning that gives every initiative a clear direction.",
    href: "/services/strategy",
  },
  {
    id: "pr",
    label: "Public Relations",
    subheading: "05",
    description:
      "Earned media, crisis communications, and reputation management that shapes the narrative.",
    href: "/services/pr",
  },
  {
    id: "support",
    label: "Support",
    subheading: "06",
    description:
      "Ongoing partnership and responsive help so your work never stops moving forward.",
    href: "/services/support",
  },
];

export default function WhatWeDo({
  heading = "What we do",
  subheading = "We're the team committed to doing whatever it takes to help you achieve your goals, and we have the tools to get it done.",
  categories = DEFAULT_CATEGORIES,
}: WhatWeDoProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  const containerRef = useRef<HTMLDivElement>(null);
  const sageRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (sageRef.current) {
      sageRef.current.style.transform = `translate(${x - 450}px, ${y - 450}px)`;
      sageRef.current.style.opacity = "1";
    }
    if (redRef.current) {
      redRef.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      redRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (sageRef.current) sageRef.current.style.opacity = "0";
    if (redRef.current) redRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col lg:flex-row min-h-fit lg:min-h-155 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 0% 100%, rgba(188, 40, 20, 0.55) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 60%, rgba(109, 154, 146, 0.50) 0%, transparent 55%),
          var(--eg-blue-black)
        `,
      }}
    >
      {/* Sage glow — cursor-tracked, desktop-only (no cursor on touch) */}
      <div
        ref={sageRef}
        aria-hidden
        className="hidden lg:block absolute top-0 left-0 w-225 h-225 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(157,190,183,0.18) 0%, transparent 65%)",
          transform: "translate(-450px, -450px)",
          opacity: 0,
          transition: "opacity 0.4s ease",
        }}
      />
      {/* Red glow — slight CSS lag for depth, desktop-only */}
      <div
        ref={redRef}
        aria-hidden
        className="hidden lg:block absolute top-0 left-0 w-150 h-150 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(188,40,20,0.12) 0%, transparent 65%)",
          transform: "translate(-300px, -300px)",
          opacity: 0,
          transition:
            "transform 0.25s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.4s ease",
        }}
      />
      {/* Left panel — overflow visible so subheading can bleed into right panel */}
      <div className="w-full lg:w-[45%] shrink-0 flex flex-col p-8 sm:p-12 lg:pt-18 lg:pr-20 lg:pb-18 lg:pl-24 overflow-visible">
        {/* Heading block — aligned with category list, subheading bleeds right at lg+ */}
        <div className="mb-12 overflow-visible w-full lg:w-3/5 lg:self-end">
          <h2 className="mb-4 text-eg-white text-4xl font-helvetica font-normal leading-10">
            {heading}
          </h2>
          <p className="m-0 w-full lg:w-[110%] text-white/50 text-2xl font-helvetica font-light leading-7.5 tracking-[0.14px]">
            {subheading}
          </p>
        </div>

        {/* Category list — right-aligned 60% of left panel at lg+ */}
        <div className="flex flex-col w-full lg:w-3/5 lg:self-end">
          {categories.map((cat, i) => {
            const isActive = cat.id === activeId;
            return (
              <div key={cat.id}>
                <button
                  onClick={() => setActiveId(cat.id)}
                  className={`block w-full text-left bg-transparent border-none border-r cursor-pointer py-4.5 text-[22px] font-helvetica leading-7 transition-colors ${
                    isActive
                      ? "border-eg-white text-eg-white font-normal"
                      : "border-white/8 text-white/35 font-light"
                  }`}
                >
                  {cat.label}
                </button>
                {i < categories.length && (
                  <div className="h-px bg-white/8" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 p-8 sm:p-12 lg:pt-18 lg:pr-24 lg:pb-18 lg:pl-20 flex flex-col justify-center relative overflow-hidden">
        {/* Watermark */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-[55%] left-[30%] -translate-x-1/2 -translate-y-1/2 text-white/4 text-[140px] font-helvetica font-bold whitespace-nowrap pointer-events-none select-none tracking-[-4px]"
        >
          {active.subheading}
        </div>

        {/* Detail content */}
        <div key={activeId} className="relative mt-12 lg:mt-55">
          <h3 className="mb-4 text-eg-white text-[42px] font-helvetica font-light leading-12">
            {active.label}
          </h3>

          <div className="flex items-end justify-between gap-6">
            <p className="m-0 text-white/70 text-sm font-helvetica font-normal leading-5.5 tracking-[0.14px] max-w-70">
              {active.description}
            </p>

            {active.href && (
              <a
                href={active.href}
                className="shrink-0 w-10 h-10 flex items-center justify-center border border-white/25 text-eg-white text-lg no-underline transition-colors hover:bg-white/10 hover:border-white/60"
              >
                ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
