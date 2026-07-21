import { useState } from 'react';

interface ValueTagProps {
  label: string;
  description?: string;
}

export default function ValueTag({ label, description }: ValueTagProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const tagStyle: React.CSSProperties = open
    ? { background: 'var(--eg-red)', outline: '1px var(--eg-red) solid', outlineOffset: '-1px', color: 'var(--eg-white)' }
    : hovered
    ? { outline: '1px var(--eg-sage-dark) solid', outlineOffset: '-1px', color: 'var(--eg-blue-black)' }
    : { outline: '1px var(--eg-blue-black-15) solid', outlineOffset: '-1px', color: 'var(--eg-sage-dark)' };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <div
        role="button"
        tabIndex={0}
        style={{
          height: 30,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 6,
          paddingBottom: 6,
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s, outline-color 0.2s, color 0.2s',
          ...tagStyle,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={e => e.key === 'Enter' && setOpen(prev => !prev)}
      >
        <span style={{ fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: 500, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, color: 'inherit' }}>
          {label}
        </span>
      </div>
      {open && description && (
        <div style={{ paddingTop: 4 }}>
          <div style={{ maxWidth: 320, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'var(--eg-bg-light)', outline: '1px var(--eg-blue-black-08) solid', outlineOffset: '-1px' }}>
            <span style={{ color: 'var(--eg-blue-black-55)', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: 400, lineHeight: '22.75px' }}>
              {description}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

const DEFAULT_VALUES = [
  { label: 'Fun',           description: 'We bring levity and genuine enthusiasm to every project.' },
  { label: 'Collaborative', description: 'We work best as an extension of your team, not apart from it.' },
  { label: 'Transparent',   description: 'No surprises. We share process, progress, and honest feedback.' },
  { label: 'Creative',      description: 'We bring this value to every project we take on.' },
  { label: 'Client-Centric',description: 'Your goals drive every decision we make.' },
  { label: 'Caring',        description: 'We invest in the people and work we partner with.' },
  { label: 'Innovative',    description: 'We seek new approaches over comfortable defaults.' },
  { label: 'Respectful',    description: 'We honor every voice in the room.' },
];

export function ValueTagGroup({ values = DEFAULT_VALUES }: { values?: typeof DEFAULT_VALUES }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {values.map(v => (
        <ValueTag key={v.label} label={v.label} description={v.description} />
      ))}
    </div>
  );
}
