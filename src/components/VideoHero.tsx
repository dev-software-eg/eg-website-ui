interface VideoHeroProps {
  videoSrc?: string;
  eyebrow?: string;
  heading: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function VideoHero({
  videoSrc,
  eyebrow = 'Graphic Design Agency',
  heading = 'Stories that move people.',
  ctaLabel = 'See Our Work',
  ctaHref = '/work',
}: VideoHeroProps) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '67vh', overflow: 'hidden' }}>
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, var(--eg-blue-black) 0%, var(--eg-blue-mid) 50%, var(--eg-blue-black) 100%)',
          }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(25, 28, 37, 0.30) 0%, rgba(25, 28, 37, 0.70) 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}
      >
        {eyebrow && (
          <div
            style={{
              paddingBottom: 12,
              color: 'var(--eg-sage)',
              fontSize: 12,
              fontFamily: 'Helvetica Neue',
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: '16px',
              letterSpacing: 3,
            }}
          >
            {eyebrow}
          </div>
        )}

        <h1
          style={{
            margin: 0,
            paddingBottom: 16,
            color: 'var(--eg-white)',
            fontSize: 48,
            fontFamily: 'Helvetica Neue',
            fontWeight: 300,
            lineHeight: '52.80px',
          }}
        >
          {heading}
        </h1>

        {ctaLabel && (
          <a
            href={ctaHref}
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 8,
              paddingBottom: 8,
              background: 'var(--eg-red)',
              color: 'var(--eg-white)',
              fontSize: 12,
              fontFamily: 'Helvetica Neue',
              fontWeight: 500,
              textTransform: 'uppercase',
              lineHeight: '16px',
              letterSpacing: 1.20,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}
