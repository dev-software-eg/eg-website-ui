export function Loading({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const dotSize = size === "small" ? 4 : size === "large" ? 8 : 6;
  const gap = size === "small" ? 3 : size === "large" ? 6 : 4;

  return (
    <>
      <style>{`
        @keyframes eg-dot-blink {
          0%, 80%, 100% { opacity: 0.15; transform: translateY(0); }
          40%            { opacity: 1;    transform: translateY(-3px); }
        }
      `}</style>
      <span style={{ display: "inline-flex", alignItems: "center", gap }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              background: "currentColor",
              display: "inline-block",
              animation: `eg-dot-blink 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              color: "var(--eg-red)",
            }}
          />
        ))}
      </span>
    </>
  );
}
