import { useRef, useEffect } from 'react';

const GROTESK_A: React.CSSProperties['fontFamily'] = '"Test Die Grotesk A", "Helvetica Neue", sans-serif';
const GROTESK_B: React.CSSProperties['fontFamily'] = '"Test Die Grotesk B", "Helvetica Neue", sans-serif';

interface Tag {
  label: string;
  variant: 'outline' | 'filled';
}

interface FeaturedCaseStudyProps {
  eyebrow?: string;
  heading?: string;
  tags?: Tag[];
  projectName?: string;
  imageSrc?: string;
  imageAlt?: string;
  client?: string;
  caseStudyHref?: string;
  quoteStart?: string;
  quoteHighlight?: string;
  quoteEnd?: string;
  attribution?: string;
}

export default function FeaturedCaseStudy({
  eyebrow = 'Featured Case Study',
  heading = 'Giving an arts advocacy organization the life and heart it deserves.',
  tags = [
    { label: 'Fun', variant: 'outline' },
    { label: 'Creative', variant: 'filled' },
    { label: 'Collaborative', variant: 'outline' },
  ],
  projectName = 'Nevada Arts Council Branding',
  imageSrc,
  imageAlt = 'Case study image',
  client = 'Nevada Arts Council',
  caseStudyHref = '#',
  quoteStart = '"When a partner cares about your brand as much as you do, working together is a joy. Meeting with Estipona Group to work on this project was the ',
  quoteHighlight = 'best part of my week',
  quoteEnd = '."',
  attribution = 'Tony Manfredi — Executive Director, Nevada Arts Council',
}: FeaturedCaseStudyProps) {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateX(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        width: '100%',
        paddingTop: 120,
        paddingBottom: 120,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--eg-white)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1280,
          paddingLeft: 64,
          paddingRight: 64,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Top two-column header */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 48,
          }}
        >
          {/* Left — eyebrow + heading */}
          <div
            style={{
              width: 644,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                color: 'var(--eg-red)',
                fontSize: 12,
                fontFamily: 'Helvetica Neue, sans-serif',
                fontWeight: 700,
                textTransform: 'uppercase',
                lineHeight: '19.2px',
                letterSpacing: 3,
              }}
            >
              {eyebrow}
            </span>

            <h2
              style={{
                margin: '12px 0 0',
                maxWidth: 595,
                color: 'var(--eg-blue-black-95)',
                fontSize: 48,
                fontFamily: GROTESK_A,
                fontWeight: 500,
                lineHeight: '52.8px',
              }}
            >
              {heading}
            </h2>
          </div>

          {/* Right — tags + project name */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              gap: 24,
            }}
          >
            {/* Tags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {tags.map(tag => (
                <div
                  key={tag.label}
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 7,
                    paddingBottom: 7,
                    background: tag.variant === 'filled' ? 'var(--eg-red)' : 'transparent',
                    outline: tag.variant === 'outline' ? '1.5px rgba(25,28,37,0.95) solid' : 'none',
                    outlineOffset: '-1.5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      color: tag.variant === 'filled' ? 'var(--eg-bg-light)' : 'var(--eg-blue-black-95)',
                      fontSize: 12.5,
                      fontFamily: GROTESK_B,
                      fontWeight: 500,
                      lineHeight: '16.5px',
                      letterSpacing: 0.5,
                    }}
                  >
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Project name */}
            <p
              style={{
                margin: 0,
                textAlign: 'right',
                color: 'var(--eg-blue-black-95)',
                fontSize: 24,
                fontFamily: 'Helvetica Neue, sans-serif',
                fontWeight: 400,
                lineHeight: '30px',
                letterSpacing: 0.16,
              }}
            >
              {projectName}
            </p>
          </div>
        </div>

        {/* Image */}
        <div style={{ width: '100%', paddingTop: 40 }}>
          <div
            style={{
              width: '100%',
              height: 465,
              borderRadius: 13,
              overflow: 'hidden',
              background: imageSrc ? undefined : 'var(--eg-bg-gray)',
              backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!imageSrc && (
              <span
                style={{
                  color: 'var(--eg-blue-black-25)',
                  fontSize: 14,
                  fontFamily: 'Helvetica Neue, sans-serif',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                {imageAlt}
              </span>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            width: '100%',
            paddingTop: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {/* Client row + CTA */}
          <div
            style={{
              width: '100%',
              paddingTop: 24,
              paddingBottom: 24,
              borderBottom: '1.5px #EEEEEE solid',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Client */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  color: '#AAAAAA',
                  fontSize: 12,
                  fontFamily: 'Helvetica Neue, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  lineHeight: '19.2px',
                  letterSpacing: 3,
                }}
              >
                Client
              </span>
              <span
                style={{
                  paddingTop: 4,
                  color: 'var(--eg-blue-black)',
                  fontSize: 24,
                  fontFamily: 'Helvetica Neue, sans-serif',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: 0.16,
                }}
              >
                {client}
              </span>
            </div>

            {/* CTA */}
            <a
              href={caseStudyHref}
              style={{
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 14,
                paddingBottom: 14,
                outline: '1.5px rgba(25,28,37,0.95) solid',
                outlineOffset: '-1.5px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                color: 'var(--eg-blue-black-95)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--eg-blue-black-06)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span
                style={{
                  fontSize: 12.5,
                  fontFamily: GROTESK_B,
                  fontWeight: 500,
                  lineHeight: '16.5px',
                  letterSpacing: 0.5,
                }}
              >
                View the case study
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  lineHeight: '18px',
                  letterSpacing: 1.2,
                }}
              >
                ↗
              </span>
            </a>
          </div>

          {/* Quote block */}
          <div
            ref={quoteRef}
            style={{
              paddingTop: 36,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
              opacity: 0,
              transform: 'translateX(48px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: 868,
                textAlign: 'center',
                fontSize: 32,
                fontFamily: GROTESK_A,
                fontWeight: 400,
                lineHeight: '38px',
              }}
            >
              <span style={{ color: 'var(--eg-blue-black-95)' }}>{quoteStart}</span>
              <span style={{ color: 'var(--eg-red)' }}>{quoteHighlight}</span>
              <span style={{ color: 'var(--eg-blue-black-95)' }}>{quoteEnd}</span>
            </p>

            <span
              style={{
                color: '#999999',
                fontSize: 12,
                fontFamily: 'Helvetica Neue, sans-serif',
                fontWeight: 700,
                textTransform: 'uppercase',
                lineHeight: '19.2px',
                letterSpacing: 3,
              }}
            >
              {attribution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
