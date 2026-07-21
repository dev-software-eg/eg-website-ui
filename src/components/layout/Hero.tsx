import heroImage from "../../assets/media/home/hero.png";

// Reference pattern for fluid typography/spacing: prefer text-[clamp(...)] arbitrary
// values over stepped breakpoint jumps when a value should scale continuously with viewport.
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
    <div className="w-full h-[90vh] min-h-150 bg-eg-bg-light flex flex-col lg:flex-row overflow-hidden">
      {/* Left — content */}
      <div className="w-full lg:w-1/2 shrink-0 min-w-0 box-border overflow-hidden py-12 lg:py-20 pl-[clamp(24px,9vw,184px)] pr-[clamp(24px,4vw,64px)] flex flex-col justify-center items-start">
        <div className="flex flex-col gap-8 w-full min-w-0">
          {/* Heading */}
          <div className="w-full max-w-139">
            <span className="text-eg-blue-black-95 text-[clamp(36px,6vw,96px)] font-grotesk-a font-bold leading-[1.1] wrap-break-word">
              {title}{" "}
            </span>
            <span className="text-eg-red text-[clamp(36px,6vw,96px)] font-grotesk-a font-bold leading-[1.1] wrap-break-word">
              {subtitle}
            </span>
          </div>

          {/* Body */}
          <p className="m-0 w-full max-w-125.75 text-eg-blue-black-95 text-[clamp(16px,1.6vw,24px)] font-helvetica font-normal leading-[1.3] tracking-[0.16px] wrap-break-word">
            {body}
          </p>
        </div>
      </div>

      {/* Right - content*/}
      <div
        role="img"
        aria-label={imageAlt}
        className="w-full h-64 sm:h-80 lg:h-auto lg:w-1/2 shrink-0 min-w-0 box-border px-10 overflow-hidden bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </div>
  );
}
