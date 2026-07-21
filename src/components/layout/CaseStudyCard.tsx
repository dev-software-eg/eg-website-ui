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
    <div className="flex flex-col lg:flex-row outline-solid outline-1 outline-eg-blue-black-08 -outline-offset-1 overflow-hidden">
      {/* Image / thumbnail side */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center min-h-60"
        style={{ background: imageBg }}
      >
        <span className="text-eg-sage-40 text-8xl font-helvetica font-light leading-30">
          {index}
        </span>
      </div>

      {/* Content side */}
      <div className="w-full lg:w-1/2 p-8 bg-eg-white flex flex-col justify-center">
        <div className="pb-3 text-eg-sage-dark text-xs font-helvetica font-normal uppercase leading-4 tracking-[3px]">
          {client}
        </div>

        <h3 className="m-0 pb-3 text-eg-blue-black text-[28px] font-helvetica font-normal leading-8.4">
          {title}
        </h3>

        <p className="m-0 pb-5 text-eg-blue-black-55 text-sm font-helvetica font-normal leading-5 tracking-[0.14px]">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex gap-2 mb-5">
            {tags.map(tag => (
              <div
                key={tag}
                className="h-7.5 px-4 flex items-center outline-solid outline-1 outline-eg-blue-black-15 -outline-offset-1"
              >
                <span className="text-eg-sage-dark text-xs font-helvetica font-medium uppercase leading-4 tracking-[1.2px]">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}

        <a
          href={href}
          className="inline-block border-b border-eg-blue-black-08 pb-1 text-eg-blue-black text-xs font-helvetica font-normal uppercase leading-4 tracking-[1.2px] no-underline"
        >
          View Case Study →
        </a>
      </div>
    </div>
  );
}
