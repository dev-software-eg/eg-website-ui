import { useState } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'sage' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonSurface = 'light' | 'dark';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  surface?: ButtonSurface;
  children: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { paddingLeft: 16, paddingRight: 16, paddingTop: 8,  paddingBottom: 8,  fontSize: 12, lineHeight: '16px', letterSpacing: 1.20 },
  md: { paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, fontSize: 14, lineHeight: '20px', letterSpacing: 1.40 },
  lg: { paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, fontSize: 16, lineHeight: '24px', letterSpacing: 1.60 },
};

function getVariantStyles(variant: ButtonVariant, surface: ButtonSurface, hovered: boolean): React.CSSProperties {
  const dark = surface === 'dark';

  switch (variant) {
    case 'primary':
      return {
        background: hovered ? 'var(--eg-red-dark)' : 'var(--eg-red)',
        outline: `1px ${hovered ? 'var(--eg-red-dark)' : 'var(--eg-red)'} solid`,
        outlineOffset: '-1px',
        color: 'var(--eg-white)',
      };
    case 'outline':
      return {
        outline: `1px ${hovered ? 'var(--eg-sage-dark)' : dark ? 'var(--eg-white-40)' : 'var(--eg-blue-black-40)'} solid`,
        outlineOffset: '-1px',
        color: dark ? 'var(--eg-white)' : 'var(--eg-blue-black)',
      };
    case 'sage':
      return {
        background: hovered ? 'var(--eg-sage-light)' : 'var(--eg-sage)',
        outline: `1px ${hovered ? 'var(--eg-sage-light)' : 'var(--eg-sage)'} solid`,
        outlineOffset: '-1px',
        color: 'var(--eg-blue-black)',
      };
    case 'ghost':
      return {
        color: dark ? 'var(--eg-white)' : 'var(--eg-blue-black)',
        opacity: hovered ? 0.7 : 1,
      };
  }
}

export default function Button({
  variant = 'primary',
  size = 'md',
  surface = 'light',
  children,
  style,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: 500,
        textTransform: 'uppercase',
        transition: 'background 0.2s, outline-color 0.2s, opacity 0.2s',
        ...sizeStyles[size],
        ...getVariantStyles(variant, surface, hovered),
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
