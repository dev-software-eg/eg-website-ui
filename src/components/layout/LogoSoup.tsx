import logoDetr from "../../assets/media/logo/logo-detr.svg";

const logoSrc = logoDetr.src;

interface LogoItem {
  name: string;
}

interface LogoSoupProps {
  eyebrow?: string;
  logos?: LogoItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const DEFAULT_LOGOS: LogoItem[] = [
  { name: "DETR" },
  { name: "Urology Nevada" },
  { name: "Hot August Nights" },
  { name: "Tourism & Cultural Affairs" },
  { name: "Nevada Cancer Coalition" },
  { name: "Nevada Secretary of State" },
  { name: "Silversummit Healthplan" },
  { name: "Stellar Snacks" },
  { name: "Nevada Division of Public and Behavioral Health" },
  { name: "Charter College" },
];

export default function LogoSoup({
  eyebrow = "Trusted By",
  logos = DEFAULT_LOGOS,
  ctaLabel = "See our work",
  ctaHref = "/work",
}: LogoSoupProps) {
  return (
    <section className="w-full bg-eg-red overflow-hidden flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-16 box-border flex flex-col items-center">
        <p className="m-0 text-eg-white text-xs font-helvetica font-bold uppercase leading-4.5 tracking-[3px]">
          {eyebrow}
        </p>

        <div className="mt-12 lg:mt-16 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-16">
          {logos.slice(0, 8).map((logo) => (
            <div key={logo.name} className="flex items-center">
              <img
                src={logoSrc}
                alt={logo.name}
                className="h-12 lg:h-14 w-auto max-w-full object-contain object-left"
              />
            </div>
          ))}

          {/* Row 3 spacers — push the arrow to the last column, lg only */}
          <div aria-hidden className="hidden lg:block" />
          <div aria-hidden className="hidden lg:block" />
          <div aria-hidden className="hidden lg:block" />
          <div className="hidden lg:flex items-start justify-end">
            <span className="text-eg-blue-black-95 text-2xl font-dm-sans font-bold">
              ↗
            </span>
          </div>

          {logos.slice(8).map((logo) => (
            <div key={logo.name} className="flex items-center">
              <img
                src={logoSrc}
                alt={logo.name}
                className="h-12 lg:h-14 w-auto max-w-full object-contain object-left"
              />
            </div>
          ))}

          {/* CTA — third column of the final row */}
          <div className="flex items-center">
            <a
              href={ctaHref}
              className="px-6 py-3.5 outline-solid outline-[1.5px] outline-eg-white text-eg-white no-underline transition-colors hover:bg-eg-white hover:text-eg-red"
            >
              <span className="text-[12.5px] font-grotesk-b font-medium leading-[16.5px] tracking-[0.5px]">
                {ctaLabel}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
