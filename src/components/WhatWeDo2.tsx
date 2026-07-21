import { useState, useRef } from 'react';

interface Category {
  id: string;
  label: string;
  description: string;
  href?: string;
}

interface WhatWeDo2Props {
  heading?: string;
  subheading?: string;
  categories?: Category[];
  backgroundSrc?: string;
}

const DEFAULT_CATEGORIES: Category[] = [
  { id: 'creative',  label: 'Creative',        description: 'From logos and brand development to websites and billboards, if people see it, we make it.', href: '/services/creative' },
  { id: 'marketing', label: 'Marketing',        description: 'Integrated campaigns that reach the right audience at the right moment across every channel.', href: '/services/marketing' },
  { id: 'digital',   label: 'Digital',          description: 'Web, mobile, and social experiences built to perform and built to last.', href: '/services/digital' },
  { id: 'strategy',  label: 'Strategy',         description: 'Research-backed positioning and planning that gives every initiative a clear direction.', href: '/services/strategy' },
  { id: 'pr',        label: 'Public Relations', description: 'Earned media, crisis communications, and reputation management that shapes the narrative.', href: '/services/pr' },
  { id: 'support',   label: 'Support',          description: 'Ongoing partnership and responsive help so your work never stops moving forward.', href: '/services/support' },
];

const GROTESK: React.CSSProperties['fontFamily'] = '"Test Die Grotesk A", "Helvetica Neue", sans-serif';

export default function WhatWeDo2({
  heading = 'What we do',
  subheading = "We're the team committed to doing whatever it takes to help you achieve your goals, and we have the tools to get it done.",
  categories = DEFAULT_CATEGORIES,
  backgroundSrc,
}: WhatWeDo2Props) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const activeIndex = categories.findIndex(c => c.id === activeId);
  const active = categories[activeIndex] ?? categories[0];
  const activeNumber = String(activeIndex + 1).padStart(2, '0');

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
      sageRef.current.style.opacity = '1';
    }
    if (redRef.current) {
      redRef.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      redRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (sageRef.current) sageRef.current.style.opacity = '0';
    if (redRef.current) redRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
        backgroundColor: backgroundSrc ? undefined : 'var(--eg-blue-black)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Sage glow — tracks cursor directly via ref */}
      <div
        ref={sageRef}
        aria-hidden
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(157,190,183,0.18) 0%, transparent 65%)',
          transform: 'translate(-450px, -450px)',
          opacity: 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          willChange: 'transform',
          top: 0,
          left: 0,
        }}
      />
      {/* Red glow — slight CSS lag for depth */}
      <div
        ref={redRef}
        aria-hidden
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(188,40,20,0.12) 0%, transparent 65%)',
          transform: 'translate(-300px, -300px)',
          opacity: 0,
          transition: 'transform 0.25s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.4s ease',
          pointerEvents: 'none',
          willChange: 'transform',
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          width: '100%',
          maxWidth: 1280,
          paddingTop: 96,
          paddingBottom: 96,
          paddingLeft: 32,
          paddingRight: 32,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h2
            style={{
              margin: 0,
              color: 'var(--eg-white)',
              fontSize: 48,
              fontFamily: GROTESK,
              fontWeight: 500,
              lineHeight: '52.8px',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: 571,
              color: 'var(--eg-white)',
              fontSize: 24,
              fontFamily: 'Helvetica Neue, sans-serif',
              fontWeight: 400,
              lineHeight: '30px',
              letterSpacing: 0.16,
            }}
          >
            {subheading}
          </p>
        </div>

        {/* Two-col panel */}
        <div
          style={{
            paddingTop: 56,
            display: 'flex',
            alignItems: 'flex-end',
            gap: 72,
          }}
        >
          {/* Left — category list */}
          <div
            style={{
              width: 480,
              flexShrink: 0,
              alignSelf: 'stretch',
              borderRight: '1px rgba(255,255,255,0.10) solid',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {categories.map(cat => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px rgba(255,255,255,0.08) solid',
                    cursor: 'pointer',
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingRight: 32,
                    paddingLeft: 0,
                    color: isActive ? 'var(--eg-white)' : 'rgba(255,255,255,0.52)',
                    fontSize: 32,
                    fontFamily: GROTESK,
                    fontWeight: 400,
                    lineHeight: '38px',
                    transition: 'color 0.2s',
                  }}
                >
                  {cat.label}
                  {/* Active accent bar — sits on the right border */}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        right: -2,
                        top: 0,
                        bottom: 0,
                        width: 3,
                        background: 'var(--eg-white)',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — detail */}
          <div
            style={{
              flex: 1,
              paddingLeft: 64,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              key={activeId}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                gap: 8,
              }}
            >
              <div style={{ width: 400, display: 'flex', flexDirection: 'column' }}>
                {/* Number watermark */}
                <div
                  aria-hidden
                  style={{
                    color: 'rgba(255,255,255,0.04)',
                    fontSize: 180,
                    fontFamily: GROTESK,
                    fontWeight: 700,
                    lineHeight: '96px',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    textAlign: 'right',
                  }}
                >
                  {activeNumber}
                </div>

                {/* Category name */}
                <div style={{ marginTop: -20, marginBottom: 20 }}>
                  <h3
                    style={{
                      margin: 0,
                      color: 'var(--eg-white)',
                      fontSize: 48,
                      fontFamily: GROTESK,
                      fontWeight: 500,
                      lineHeight: '52.8px',
                    }}
                  >
                    {active.label}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    color: 'var(--eg-white)',
                    fontSize: 24,
                    fontFamily: 'Helvetica Neue, sans-serif',
                    fontWeight: 400,
                    lineHeight: '30px',
                    letterSpacing: 0.16,
                  }}
                >
                  {active.description}
                </p>
              </div>

              {/* Arrow link */}
              {active.href && (
                <a
                  href={active.href}
                  style={{
                    flexShrink: 0,
                    padding: '7px 10px',
                    color: 'var(--eg-bg-light)',
                    fontSize: 36,
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    lineHeight: '18px',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: 1.2,
                    alignSelf: 'flex-end',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
