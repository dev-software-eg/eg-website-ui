import { useState } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  deliverables?: string[];
}

interface ServiceAccordionProps {
  items: ServiceItem[];
  defaultOpenIndex?: number;
}

export default function ServiceAccordion({ items, defaultOpenIndex = 0 }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={item.title}
            style={{ borderBottom: '1px var(--eg-blue-black-08) solid' }}
          >
            <div
              role="button"
              tabIndex={0}
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              onKeyDown={e => e.key === 'Enter' && setOpenIndex(isOpen ? null : i)}
            >
              <span
                style={{
                  color: isOpen ? 'var(--eg-red)' : 'var(--eg-blue-black)',
                  fontSize: 16,
                  fontFamily: 'Helvetica Neue',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: 0.80,
                  transition: 'color 0.2s',
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  color: 'var(--eg-sage-dark)',
                  fontSize: 16,
                  fontFamily: 'Helvetica Neue',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: 0.80,
                }}
              >
                {isOpen ? '−' : '+'}
              </span>
            </div>

            {isOpen && (
              <div style={{ paddingBottom: 24 }}>
                <p
                  style={{
                    margin: 0,
                    color: 'var(--eg-blue-black-55)',
                    fontSize: 14,
                    fontFamily: 'Helvetica Neue',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: 0.14,
                  }}
                >
                  {item.description}
                </p>

                {item.deliverables && item.deliverables.length > 0 && (
                  <div style={{ paddingTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.deliverables.map(pill => (
                      <div
                        key={pill}
                        style={{
                          height: 26,
                          paddingLeft: 13,
                          paddingRight: 13,
                          display: 'flex',
                          alignItems: 'center',
                          outline: '1px var(--eg-blue-black-15) solid',
                          outlineOffset: '-1px',
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--eg-sage-dark)',
                            fontSize: 12,
                            fontFamily: 'Helvetica Neue',
                            fontWeight: 400,
                            textTransform: 'uppercase',
                            lineHeight: '16px',
                            letterSpacing: 1.20,
                          }}
                        >
                          {pill}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
