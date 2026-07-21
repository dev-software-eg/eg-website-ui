import heroImage from "../../assets/media/home/hero.png";

const heroImageSrc = heroImage.src;

interface HeroProps {
  title?: string;
  subtitle?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title = "We use marketing",
  subtitle = "to solve problems.",
  body = "At Estipona Group, we help businesses and organizations address challenges and meet goals. Buying, joining, understanding, watching, asking, celebrating, believing — if you want people to do something, we can help.",
  imageSrc = heroImageSrc,
  imageAlt = "https://placehold.co/981x1136",
}: HeroProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        minHeight: 600,
        background: "#F7F6F4",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* Left — content */}
      <div
        style={{
          width: "50%",
          flexShrink: 0,
          minWidth: 0,
          boxSizing: "border-box",
          overflow: "hidden",
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: "clamp(24px, 9vw, 184px)",
          paddingRight: "clamp(24px, 4vw, 64px)",
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
            gap: 32,
            width: "100%",
            minWidth: 0,
          }}
        >
          {/* Heading */}
          <div style={{ width: "100%", maxWidth: 556 }}>
            <span
              style={{
                color: "rgba(25,28,37,0.95)",
                fontSize: "clamp(36px, 6vw, 96px)",
                fontFamily:
                  "'Test Die Grotesk A', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                lineHeight: 1.1,
                wordWrap: "break-word",
              }}
            >
              {title}{" "}
            </span>
            <span
              style={{
                color: "var(--eg-red)",
                fontSize: "clamp(36px, 6vw, 96px)",
                fontFamily:
                  "'Test Die Grotesk A', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                lineHeight: 1.1,
                wordWrap: "break-word",
              }}
            >
              {subtitle}
            </span>
          </div>

          {/* Body */}
          <p
            style={{
              margin: 0,
              width: "100%",
              maxWidth: 503,
              color: "rgba(25,28,37,0.95)",
              fontSize: "clamp(16px, 1.6vw, 24px)",
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: 0.16,
              wordWrap: "break-word",
            }}
          >
            {body}
          </p>
        </div>
      </div>

      {/* Right - content*/}
      <div
        role="img"
        aria-label={imageAlt}
        style={{
          width: "50%",
          flexShrink: 0,
          minWidth: 0,
          boxSizing: "border-box",
          paddingLeft: 40,
          paddingRight: 40,
          overflow: "hidden",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
}
