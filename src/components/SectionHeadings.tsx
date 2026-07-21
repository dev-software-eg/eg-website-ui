interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, heading, centered = false }: SectionHeadingProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: centered ? 'center' : 'flex-start' }}>
      {eyebrow && (
        <span
          style={{
            color: 'var(--eg-sage-dark)',
            fontSize: 12,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: '16px',
            letterSpacing: 3,
            textAlign: centered ? 'center' : 'left',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          margin: 0,
          paddingTop: eyebrow ? 16 : 0,
          color: 'var(--eg-blue-black)',
          fontSize: 48,
          fontFamily: 'Helvetica Neue',
          fontWeight: 300,
          lineHeight: '52.80px',
          textAlign: centered ? 'center' : 'left',
        }}
      >
        {heading}
      </h2>
    </div>
  );
}
