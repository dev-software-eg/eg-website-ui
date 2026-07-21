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
      style={{
        position: "relative",
        display: "flex",
        minHeight: 620,
        overflow: "hidden",
        background: `
          radial-gradient(ellipse at 0% 100%, rgba(188, 40, 20, 0.55) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 60%, rgba(109, 154, 146, 0.50) 0%, transparent 55%),
          var(--eg-blue-black)
        `,
      }}
    >
      {/* Sage glow — tracks cursor directly via ref */}
      <div
        ref={sageRef}
        aria-hidden
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(157,190,183,0.18) 0%, transparent 65%)",
          transform: "translate(-450px, -450px)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          willChange: "transform",
          top: 0,
          left: 0,
        }}
      />
      {/* Red glow — slight CSS lag for depth */}
      <div
        ref={redRef}
        aria-hidden
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(188,40,20,0.12) 0%, transparent 65%)",
          transform: "translate(-300px, -300px)",
          opacity: 0,
          transition:
            "transform 0.25s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.4s ease",
          pointerEvents: "none",
          willChange: "transform",
          top: 0,
          left: 0,
        }}
      />
      {/* Left panel — overflow visible so subheading can bleed into right panel */}
      <div
        style={{
          width: "45%",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px 72px 96px",
          overflow: "visible",
        }}
      >
        {/* Heading block — aligned with category list, subheading bleeds right */}
        <div style={{ marginBottom: 48, overflow: "visible", width: "60%", alignSelf: "flex-end" }}>
          <h2
            style={{
              margin: "0 0 16px",
              color: "var(--eg-white)",
              fontSize: 36,
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 400,
              lineHeight: "40px",
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              margin: 0,
              width: "110%",
              color: "rgba(255,255,255,0.50)",
              fontSize: 24,
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 300,
              lineHeight: "30px",
              letterSpacing: 0.14,
            }}
          >
            {subheading}
          </p>
        </div>

        {/* Category list — unchanged: right-aligned 60% of left panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            alignSelf: "flex-end",
          }}
        >
          {categories.map((cat, i) => {
            const isActive = cat.id === activeId;
            return (
              <div key={cat.id}>
                <button
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    borderRight: isActive
                      ? "1px solid var(--eg-white)"
                      : "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                    padding: "18px 0",
                    color: isActive
                      ? "var(--eg-white)"
                      : "rgba(255,255,255,0.35)",
                    fontSize: 22,
                    fontFamily: "Helvetica Neue, sans-serif",
                    fontWeight: isActive ? 400 : 300,
                    lineHeight: "28px",
                    transition: "color 0.2s",
                  }}
                >
                  {cat.label}
                </button>
                {i < categories.length && (
                  <div
                    style={{ height: 1, background: "rgba(255,255,255,0.08)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right panel */}
      <div
        style={{
          flex: 1,
          padding: "72px 96px 72px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "55%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            color: "rgba(255,255,255,0.04)",
            fontSize: 140,
            fontFamily: "Helvetica Neue, sans-serif",
            fontWeight: 700,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: -4,
          }}
        >
          {active.subheading}
        </div>

        {/* Detail content */}
        <div key={activeId} style={{ position: "relative", marginTop: 220 }}>
          <h3
            style={{
              margin: "0 0 16px",
              color: "var(--eg-white)",
              fontSize: 42,
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 300,
              lineHeight: "48px",
            }}
          >
            {active.label}
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.70)",
                fontSize: 14,
                fontFamily: "Helvetica Neue, sans-serif",
                fontWeight: 400,
                lineHeight: "22px",
                letterSpacing: 0.14,
                maxWidth: 280,
              }}
            >
              {active.description}
            </p>

            {active.href && (
              <a
                href={active.href}
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px rgba(255,255,255,0.25) solid",
                  color: "var(--eg-white)",
                  fontSize: 18,
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.10)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.60)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.25)";
                }}
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
