type DividerVariant = 'sage' | 'red' | 'dark';

interface DividerProps {
  variant?: DividerVariant;
}

const COLORS: Record<DividerVariant, string> = {
  sage: 'var(--eg-sage-35)',
  red:  'var(--eg-red)',
  dark: 'var(--eg-blue-black-12)',
};

export default function Divider({ variant = 'dark' }: DividerProps) {
  return (
    <div
      style={{
        height: 1,
        background: COLORS[variant],
        width: '100%',
      }}
    />
  );
}

export function RedAccent() {
  return (
    <div
      style={{
        width: 48,
        height: 2,
        background: 'var(--eg-red)',
      }}
    />
  );
}
