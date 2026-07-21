import { useState } from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
  initial?: string;
}

export default function TeamCard({ name, role, bio, imageSrc, initial }: TeamCardProps) {
  const [hovered, setHovered] = useState(false);
  const fallbackInitial = initial ?? name.charAt(0);

  return (
    <div
      style={{ width: 200, display: 'flex', flexDirection: 'column', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          height: 240,
          background: imageSrc ? undefined : 'linear-gradient(160deg, var(--eg-sage-light) 0%, var(--eg-bg-light) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span
            style={{
              color: 'var(--eg-sage-dark)',
              fontSize: 48,
              fontFamily: 'Helvetica Neue',
              fontWeight: 300,
              lineHeight: '48px',
              opacity: 0.50,
            }}
          >
            {fallbackInitial}
          </span>
        )}

        {bio && hovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--eg-blue-black-85)',
              padding: 20,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                margin: 0,
                color: 'var(--eg-white)',
                fontSize: 14,
                fontFamily: 'Helvetica Neue',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: 0.14,
              }}
            >
              {bio}
            </p>
          </div>
        )}
      </div>

      <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            color: 'var(--eg-blue-black)',
            fontSize: 16,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            lineHeight: '25.60px',
            letterSpacing: 0.16,
          }}
        >
          {name}
        </span>
        <span
          style={{
            paddingTop: 4,
            color: 'var(--eg-sage-dark)',
            fontSize: 12,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: '16px',
            letterSpacing: 1.20,
          }}
        >
          {role}
        </span>
      </div>
    </div>
  );
}
