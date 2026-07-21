import { useRef, useEffect } from 'react';

interface PartnerCarouselProps {
  partners: string[];
  speed?: number;
}

export default function PartnerCarousel({ partners, speed = 40 }: PartnerCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      posRef.current -= speed / 60;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
    };
  }, [speed]);

  const items = [...partners, ...partners];

  return (
    <div
      style={{
        width: '100%',
        borderTop: '1px var(--eg-blue-black-08) solid',
        borderBottom: '1px var(--eg-blue-black-08) solid',
        height: 66,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div ref={trackRef} style={{ display: 'flex', gap: 64, paddingLeft: 24, willChange: 'transform', whiteSpace: 'nowrap' }}>
        {items.map((name, i) => (
          <span
            key={i}
            style={{
              color: 'var(--eg-blue-black-25)',
              fontSize: 12,
              fontFamily: 'Helvetica Neue',
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: '16px',
              letterSpacing: 1.20,
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
