import { useEffect, useRef, useState, Children } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 24 },
  down:  { x: 0,   y: -24 },
  left:  { x: 24,  y: 0 },
  right: { x: -24, y: 0 },
  none:  { x: 0,   y: 0 },
};

export function ScrollReveal({ children, delay = 0, direction = 'up', duration = 0.6 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { x, y } = OFFSET[direction];

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0)' : `translate(${x}px, ${y}px)`,
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  stagger?: number;
  direction?: Direction;
  duration?: number;
}

export function StaggerReveal({ children, stagger = 0.1, direction = 'up', duration = 0.6 }: StaggerRevealProps) {
  return (
    <>
      {Children.map(children, (child, i) => (
        <ScrollReveal key={i} delay={i * stagger} direction={direction} duration={duration}>
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
