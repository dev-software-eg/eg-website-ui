interface CaseStudyCardProps {
  index?: string;
  client: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  imageBg?: string;
}

export default function CaseStudyCard({
  index = '01',
  client,
  title,
  description,
  tags = [],
  href = '#',
  imageBg = 'linear-gradient(135deg, var(--eg-sage-light) 0%, var(--eg-bg-light) 100%)',
}: CaseStudyCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        outline: '1px var(--eg-blue-black-08) solid',
        outlineOffset: '-1px',
        overflow: 'hidden',
      }}
    >
      {/* Image / thumbnail side */}
      <div
        style={{
          width: '50%',
          background: imageBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 240,
        }}
      >
        <span
          style={{
            color: 'var(--eg-sage-40)',
            fontSize: 80,
            fontFamily: 'Helvetica Neue',
            fontWeight: 300,
            lineHeight: '120px',
          }}
        >
          {index}
        </span>
      </div>

      {/* Content side */}
      <div
        style={{
          width: '50%',
          padding: 32,
          background: 'var(--eg-white)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            paddingBottom: 12,
            color: 'var(--eg-sage-dark)',
            fontSize: 12,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: '16px',
            letterSpacing: 3,
          }}
        >
          {client}
        </div>

        <h3
          style={{
            margin: 0,
            paddingBottom: 12,
            color: 'var(--eg-blue-black)',
            fontSize: 28,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            lineHeight: '33.60px',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            paddingBottom: 20,
            color: 'var(--eg-blue-black-55)',
            fontSize: 14,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: 0.14,
          }}
        >
          {description}
        </p>

        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            {tags.map(tag => (
              <div
                key={tag}
                style={{
                  height: 30,
                  paddingLeft: 16,
                  paddingRight: 16,
                  display: 'flex',
                  alignItems: 'center',
                  outline: '1px var(--eg-blue-black-15) solid',
                  outlineOffset: '-1px',
                }}
              >
                <span
                  style={{
                    color: 'var(--eg-sage-dark)',
                    fontSize: 12,
                    fontFamily: 'Helvetica Neue',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    lineHeight: '16px',
                    letterSpacing: 1.20,
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}

        <a
          href={href}
          style={{
            display: 'inline-block',
            borderBottom: '1px var(--eg-blue-black-08) solid',
            paddingBottom: 4,
            color: 'var(--eg-blue-black)',
            fontSize: 12,
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: '16px',
            letterSpacing: 1.20,
            textDecoration: 'none',
          }}
        >
          View Case Study →
        </a>
      </div>
    </div>
  );
}
