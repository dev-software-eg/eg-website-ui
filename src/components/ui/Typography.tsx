import type { JSX } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'eyebrow';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
}

const styles: Record<TypographyVariant, React.CSSProperties> = {
  h1: {
    color: 'var(--eg-blue-black)',
    fontSize: 80,
    fontFamily: 'Helvetica Neue',
    fontWeight: 300,
    lineHeight: '84px',
  },
  h2: {
    color: 'var(--eg-blue-black)',
    fontSize: 48,
    fontFamily: 'Helvetica Neue',
    fontWeight: 300,
    lineHeight: '52.80px',
  },
  h3: {
    color: 'var(--eg-blue-black)',
    fontSize: 28,
    fontFamily: 'Helvetica Neue',
    fontWeight: 400,
    lineHeight: '33.60px',
  },
  h4: {
    color: 'var(--eg-blue-black)',
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: 400,
    lineHeight: '23.40px',
  },
  body: {
    color: 'var(--eg-blue-black-55)',
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: 400,
    lineHeight: '25.60px',
    letterSpacing: 0.16,
  },
  eyebrow: {
    color: 'var(--eg-sage-dark)',
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '19.20px',
    letterSpacing: 3,
  },
};

const tags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  eyebrow: 'span',
};

export default function Typography({ variant, children }: TypographyProps) {
  const Tag = tags[variant] as React.ElementType;
  return <Tag style={{ margin: 0, ...styles[variant] }}>{children}</Tag>;
}
