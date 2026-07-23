import Link from "next/link";
import egLogo from "../../assets/eg-logo-white.svg";

interface SocialLink {
  label: string;
  href: string;
}

interface FooterProps {
  eyebrow?: string;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  socialLinks?: SocialLink[];
}

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Linkedin", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer({
  eyebrow = "Let's build something together",
  heading = "Great work starts with a great relationship.",
  ctaLabel = "Get in touch",
  ctaHref = "/contact",
  socialLinks = DEFAULT_SOCIAL_LINKS,
}: FooterProps) {
  return (
    <footer className="w-full bg-eg-blue-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left — heading + CTA */}
        <div className="w-full lg:w-3/5 pb-12 lg:pb-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-white/20">
          <p className="m-0 text-eg-white text-xs font-helvetica font-bold uppercase leading-4 tracking-[3px]">
            {eyebrow}
          </p>

          <h2 className="max-w-125 mt-8 mb-12 text-eg-white text-4xl sm:text-5xl font-grotesk-a font-medium leading-tight">
            {heading}
          </h2>

          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-eg-white text-xs font-helvetica font-medium uppercase leading-4 tracking-widest no-underline transition-colors hover:border-eg-sage-dark"
          >
            {ctaLabel}
            <span aria-hidden>↗</span>
          </Link>
        </div>

        {/* Right — logo, socials, copyright */}
        <div className="w-full lg:w-2/5 pt-12 lg:pt-0 lg:pl-20 flex flex-col items-start">
          <img src={egLogo.src} alt="Estipona Group" className="h-18 w-auto" />

          <nav className="mt-9 flex flex-col gap-2">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-eg-white/50 text-lg font-helvetica font-normal leading-6 tracking-tight no-underline transition-colors hover:text-eg-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="m-0 mt-8 text-eg-white/20 text-lg font-grotesk-a font-normal leading-5">
            © {new Date().getFullYear()} Estipona Group
          </p>
        </div>
      </div>
    </footer>
  );
}
