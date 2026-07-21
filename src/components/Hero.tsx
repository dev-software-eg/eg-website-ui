interface HeroProps {
  title?: string;
  subtitle?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const headingStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 96,
  fontFamily: "'Test Die Grotesk A', 'Helvetica Neue', sans-serif",
  fontWeight: 700,
  lineHeight: "88px",
  wordWrap: "break-word",
};

export default function Hero({
  title = "We use marketing",
  subtitle = "to solve problems.",
  body = "At Estipona Group, we help businesses and organizations address challenges and meet goals. Buying, joining, understanding, watching, asking, celebrating, believing — if you want people to do something, we can help.",
  imageSrc = "https://placehold.co/900x900",
  imageAlt = "",
}: HeroProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "90vh",
        background: "var(--eg-bg-light)",
      }}
    >
      {/* Left — content */}
      <div
        style={{
          width: "50%",
          flexShrink: 0,
          boxSizing: "border-box",
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 184,
          paddingRight: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 48,
            maxWidth: 556,
          }}
        >
          <div>
            <h1 style={{ ...headingStyle, color: "var(--eg-blue-black-95)" }}>
              {title}
            </h1>
            <h1 style={{ ...headingStyle, color: "var(--eg-red)" }}>
              {subtitle}
            </h1>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: 503,
              color: "var(--eg-blue-black-95)",
              fontSize: 16,
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 400,
              lineHeight: "26px",
              letterSpacing: 0.16,
            }}
          >
            {body}
          </p>
        </div>
      </div>

      {/* Right — full-bleed image */}
      <div
        style={{
          width: "50%",
          flexShrink: 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
