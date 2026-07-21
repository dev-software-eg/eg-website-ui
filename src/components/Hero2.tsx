interface Hero2Props {
  title?: string;
  subtitle?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero2({
  title = 'We use marketing',
  subtitle = 'to solve problems.',
  body = 'At Estipona Group, we help businesses and organizations address challenges and meet goals. Buying, joining, understanding, watching, asking, celebrating, believing — if you want people to do something, we can help.',
  imageSrc = 'https://placehold.co/981x1136',
  imageAlt = '',
}: Hero2Props) {
  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        minHeight: 600,
        background: '#F7F6F4',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      {/* Left — content */}
      <div
        style={{
          width: '50%',
          flexShrink: 0,
          boxSizing: 'border-box',
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 184,
          paddingRight: 64,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {/* Heading */}
          <div style={{ width: 556 }}>
            <span
              style={{
                color: 'rgba(25,28,37,0.95)',
                fontSize: 96,
                fontFamily: "'Test Die Grotesk A', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                lineHeight: '82px',
                wordWrap: 'break-word',
              }}
            >
              {title}{' '}
            </span>
            <span
              style={{
                color: 'var(--eg-red)',
                fontSize: 96,
                fontFamily: "'Test Die Grotesk A', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                lineHeight: '82px',
                wordWrap: 'break-word',
              }}
            >
              {subtitle}
            </span>
          </div>

          {/* Body */}
          <p
            style={{
              margin: 0,
              width: 503,
              color: 'rgba(25,28,37,0.95)',
              fontSize: 24,
              fontFamily: 'Helvetica Neue, sans-serif',
              fontWeight: 400,
              lineHeight: '30px',
              letterSpacing: 0.16,
              wordWrap: 'break-word',
            }}
          >
            {body}
          </p>
        </div>
      </div>

      {/* Right — image with circle crop */}
      <div
        style={{
          width: '50%',
          flexShrink: 0,
          boxSizing: 'border-box',
          paddingLeft: 40,
          paddingRight: 40,
          overflow: 'hidden',
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 520,
            height: 520,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
}
