"use client";

import React from "react";
import heroImage from "../../assets/media/home/hero.png";

const heroImageSrc = heroImage.src;

interface Trait {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  badgeHeading: string;
  badgeBody: string;
}

interface WhoWeAreProps {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  headingSuffix?: string;
  body?: string;
  traits?: Trait[];
  defaultTraitId?: string;
}

const DEFAULT_TRAITS: Trait[] = [
  {
    id: "fun",
    label: "Fun",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're fun.",
    badgeBody: "Placeholder copy — a story that shows the team doesn't take itself too seriously.",
  },
  {
    id: "creative",
    label: "Creative",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're creative.",
    badgeBody: "Placeholder copy — a story that shows an unexpected creative solution.",
  },
  {
    id: "transparent",
    label: "Transparent",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're transparent.",
    badgeBody: "Placeholder copy — a story that shows honesty with a client, even when it was hard.",
  },
  {
    id: "collaborative",
    label: "Collaborative",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're collaborative.",
    badgeBody: "Placeholder copy — a story that shows working side by side with a client's team.",
  },
  {
    id: "respectful",
    label: "Respectful",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're respectful.",
    badgeBody: "Placeholder copy — a story that shows respecting a client's time, budget, or vision.",
  },
  {
    id: "caring",
    label: "Caring",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We care.",
    badgeBody:
      "A 4 a.m. vinyl installation at the Nevada Legislature. The work behind the work.",
  },
  {
    id: "client-centric",
    label: "Client-centric",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're client-centric.",
    badgeBody: "Placeholder copy — a story that shows putting the client's goals first.",
  },
  {
    id: "innovative",
    label: "Innovative",
    imageSrc: heroImageSrc,
    imageAlt: "https://placehold.co/397x410",
    badgeHeading: "We're innovative.",
    badgeBody: "Placeholder copy — a story that shows trying something new before anyone else did.",
  },
];

export default function WhoWeAre({
  eyebrow = "Who We Are",
  headingPrefix = "When you’re looking for a ",
  headingHighlight = "partner,",
  headingSuffix = " not just a vendor",
  body = "When you partner with us, you get an extension of your team, not just a vendor who takes orders. Over our 30+ years, we’ve seen that the strongest results come from working closely with our clients. When we build a true partnership, we can help move your business forward.",
  traits = DEFAULT_TRAITS,
  defaultTraitId = "caring",
}: WhoWeAreProps) {
  const [activeId, setActiveId] = React.useState<string>(defaultTraitId);
  const active = traits.find((trait) => trait.id === activeId) ?? traits[0];

  return (
    <section className="w-full bg-eg-bg-light overflow-hidden flex flex-col justify-center items-center py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-16 box-border flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left — content */}
        <div className="w-full lg:w-3/5 min-w-0 flex flex-col gap-6">
          <p className="m-0 text-eg-red text-base font-helvetica font-bold uppercase leading-5 tracking-[3px]">
            {eyebrow}
          </p>

          <h2 className="m-0 max-w-160 text-eg-blue-black-95 text-[clamp(32px,5vw,48px)] font-grotesk-a font-medium leading-[1.1] wrap-break-word">
            {headingPrefix}
            <span className="text-eg-red">{headingHighlight}</span>
            {headingSuffix}
          </h2>

          <p className="m-0 max-w-160 text-eg-blue-black-95 text-[clamp(18px,2vw,24px)] font-helvetica font-normal leading-8 tracking-tight wrap-break-word">
            {body}
          </p>

          <ul className="m-0 p-0 mt-2 list-none flex flex-wrap gap-3">
            {traits.map((trait) => {
              const isHighlighted = trait.id === activeId;
              return (
                <li
                  key={trait.id}
                  onClick={() => setActiveId(trait.id)}
                  className={`px-3 py-1.5 border-[1.25px] text-xs font-grotesk-b font-medium uppercase leading-4 tracking-wide cursor-pointer transition-colors ease-in duration-300 ${
                    isHighlighted
                      ? "bg-eg-red border-eg-red text-eg-white"
                      : "border-eg-blue-black-95 text-eg-blue-black-95 hover:bg-eg-red hover:text-eg-white hover:border-eg-red "
                  }`}
                >
                  {trait.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — badge */}
        <div className="w-full lg:w-2/5 shrink-0 flex justify-center items-center">
          <div key={active.id} className="relative w-full max-w-100">
            <div
              role="img"
              aria-label={active.imageAlt}
              className="w-full aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${active.imageSrc})` }}
            />

            <div className="absolute -bottom-10 sm:-bottom-12 right-4 sm:right-8 size-56 sm:size-64 rounded-full bg-eg-blue-black-95 flex flex-col justify-center items-center gap-2 px-8 text-center">
              <p className="m-0 text-eg-white text-2xl font-helvetica font-bold leading-8 tracking-tight">
                {active.badgeHeading}
              </p>
              <p className="m-0 text-eg-white text-lg font-grotesk-a font-normal leading-5">
                {active.badgeBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
