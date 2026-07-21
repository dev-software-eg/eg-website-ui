import { useState } from 'react';

type NavLinkState = 'rest' | 'hover' | 'active';

interface NavLinkProps {
  children: React.ReactNode;
  active?: boolean;
}

export function NavLink({ children, active = false }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  const color = active
    ? 'var(--eg-red)'
    : hovered
    ? 'var(--eg-blue-black)'
    : 'var(--eg-blue-black-55)';

  return (
    <span
      style={{
        color,
        fontSize: 12,
        fontFamily: 'Helvetica Neue',
        fontWeight: 400,
        textTransform: 'uppercase',
        lineHeight: '16px',
        letterSpacing: 1.20,
        cursor: 'pointer',
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}

interface HoverButtonProps {
  variant: 'primary' | 'outline' | 'sage';
  label: string;
}

export function HoverButton({ variant, label }: HoverButtonProps) {
  const [hovered, setHovered] = useState(false);

  const variantStyles: Record<string, { rest: React.CSSProperties; hover: React.CSSProperties }> = {
    primary: {
      rest:  { background: 'var(--eg-red)',      outline: '1px var(--eg-red) solid',      color: 'var(--eg-white)' },
      hover: { background: 'var(--eg-red-dark)', outline: '1px var(--eg-red-dark) solid', color: 'var(--eg-white)' },
    },
    outline: {
      rest:  { outline: '1px var(--eg-blue-black-15) solid', color: 'var(--eg-blue-black)' },
      hover: { outline: '1px var(--eg-sage-dark) solid',     color: 'var(--eg-blue-black)' },
    },
    sage: {
      rest:  { background: 'var(--eg-sage)',       color: 'var(--eg-blue-black)' },
      hover: { background: 'var(--eg-sage-light)', color: 'var(--eg-blue-black)' },
    },
  };

  const base = variantStyles[variant][hovered ? 'hover' : 'rest'];

  return (
    <div
      style={{
        height: 34,
        paddingLeft: 16,
        paddingRight: 16,
        outlineOffset: '-1px',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s, outline-color 0.2s',
        ...base,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: 500, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, color: 'inherit' }}>
        {label}
      </span>
    </div>
  );
}

export type { NavLinkState };
