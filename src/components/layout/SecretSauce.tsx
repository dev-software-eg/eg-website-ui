interface SecretSauceItem {
  heading: string;
  body: string;
}

interface SecretSauceProps {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  items?: SecretSauceItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const DEFAULT_ITEMS: SecretSauceItem[] = [
  {
    heading: "We see you as a partner, not just a client",
    body: "Your goals become our goals, and our collaboration leverages each of our strengths to deliver the best work.",
  },
  {
    heading: "We value doing good",
    body: "We have a roster of clients making the world a better place — in big ways and small. Supporting their work drives us.",
  },
  {
    heading: "Your media strategy serves your goals",
    body: "We don't charge commission or markup on external services, so we have no incentive to spend your media dollars willy-nilly.",
  },
  {
    heading: "We're a one-stop shop for everything marketing",
    body: "Yes, we do that! From logos and websites to translations and animations, our in-house services ensure consistency and efficiency.",
  },
  {
    heading: "Continuity of care",
    body: "We don't have a B team, so you'll work with the same talented, seasoned professionals on day 1 as day 501.",
  },
];

export default function SecretSauce({
  eyebrow = "Why Work With Us",
  headingPrefix = "Estipona Group's",
  headingHighlight = "Secret Sauce",
  items = DEFAULT_ITEMS,
  ctaLabel = "Learn more about EG",
  ctaHref = "/about",
}: SecretSauceProps) {
  return (
    <section className="w-full bg-eg-white overflow-hidden flex flex-col justify-center items-center py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-16 box-border flex flex-col">
        <p className="m-0 text-eg-red text-base font-helvetica font-bold uppercase leading-5 tracking-[3px]">
          {eyebrow}
        </p>

        <h2 className="m-0 mt-3 text-eg-blue-black-95 text-[clamp(32px,5vw,48px)] font-grotesk-a font-medium leading-[1.1]">
          {headingPrefix}
          <br />
          <span className="text-eg-red">{headingHighlight}</span>
        </h2>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.heading}
              className="bg-eg-bg-gray rounded-[13px] p-6 lg:p-8 flex flex-col gap-3"
            >
              <p className="m-0 text-eg-blue-black-95 text-lg lg:text-xl font-helvetica font-normal leading-6.5">
                {item.heading}
              </p>
              <p className="m-0 text-eg-blue-black-55 text-sm font-helvetica font-normal leading-5.5 tracking-[0.14px]">
                {item.body}
              </p>
            </div>
          ))}

          <a
            href={ctaHref}
            className="bg-eg-red rounded-[13px] p-6 lg:p-8 flex flex-col justify-between gap-8 min-h-40 no-underline transition-colors hover:bg-eg-red-dark"
          >
            <span className="text-eg-white text-lg lg:text-xl font-helvetica font-normal leading-6.5">
              {ctaLabel}
            </span>
            <span className="self-end text-eg-white text-xl font-dm-sans font-bold">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
