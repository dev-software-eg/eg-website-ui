"use client";

import { useRef, useEffect } from "react";
import { Tag, type TagVariant } from "../ui/Tag";

interface TagItem {
  label: string;
  variant: TagVariant;
}

interface FeaturedCaseStudyProps {
  eyebrow?: string;
  heading?: string;
  tags?: TagItem[];
  projectName?: string;
  imageSrc?: string;
  imageAlt?: string;
  client?: string;
  caseStudyHref?: string;
  quoteStart?: string;
  quoteHighlight?: string;
  quoteEnd?: string;
  attribution?: string;
}

export default function FeaturedCaseStudy({
  eyebrow = "Featured Case Study",
  heading = "Giving an arts advocacy organization the life and heart it deserves.",
  tags = [
    { label: "Fun", variant: "outline" },
    { label: "Creative", variant: "filled" },
    { label: "Collaborative", variant: "outline" },
  ],
  projectName = "Nevada Arts Council Branding",
  imageSrc,
  imageAlt = "Case study image",
  client = "Nevada Arts Council",
  caseStudyHref = "#",
  quoteStart = '"When a partner cares about your brand as much as you do, working together is a joy. Meeting with Estipona Group to work on this project was the ',
  quoteHighlight = "best part of my week",
  quoteEnd = '."',
  attribution = "Tony Manfredi — Executive Director, Nevada Arts Council",
}: FeaturedCaseStudyProps) {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    let hasScrolled = false;
    let isIntersecting = false;

    const tryReveal = () => {
      if (!hasScrolled || !isIntersecting) return;
      el.style.opacity = "1";
      cleanup();
    };

    const onScroll = () => {
      hasScrolled = true;
      tryReveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        tryReveal();
      },
      { threshold: 0.9 },
    );

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    observer.observe(el);

    return cleanup;
  }, []);

  return (
    <div className="w-full py-16 sm:py-20 lg:py-30 overflow-hidden flex flex-col justify-center items-center bg-eg-white">
      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-16 box-border flex flex-col items-center">
        {/* Top two-column header */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
          {/* Left — eyebrow + heading */}
          <div className="w-full lg:w-161 lg:shrink-0 flex flex-col justify-end items-start">
            <span className="text-eg-red text-xs font-helvetica font-bold uppercase leading-[19.2px] tracking-[3px]">
              {eyebrow}
            </span>

            <h2 className="mt-3 mb-0 max-w-148.75 text-eg-blue-black-95 text-3xl sm:text-4xl lg:text-[48px] font-grotesk-a font-medium lg:leading-[52.8px]">
              {heading}
            </h2>
          </div>

          {/* Right — tags + project name */}
          <div className="flex-1 w-full flex flex-col justify-end items-start lg:items-end gap-6">
            {/* Tags */}
            <div className="flex items-center gap-3">
              {tags.map((tag) => (
                <Tag key={tag.label} label={tag.label} variant={tag.variant} />
              ))}
            </div>

            {/* Project name */}
            <p className="m-0 text-left lg:text-right text-eg-blue-black-95 text-2xl font-helvetica font-normal leading-7.5 tracking-[0.16px]">
              {projectName}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full pt-10">
          <div
            className="w-full aspect-1280/465 rounded-[13px] overflow-hidden bg-cover bg-center flex items-center justify-center"
            style={{
              background: imageSrc ? undefined : "var(--eg-bg-gray)",
              backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
              backgroundSize: imageSrc ? "cover" : undefined,
              backgroundPosition: imageSrc ? "center" : undefined,
            }}
          >
            {!imageSrc && (
              <span className="text-eg-blue-black-25 text-sm font-helvetica font-normal uppercase tracking-[2px]">
                {imageAlt}
              </span>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="w-full pt-6 flex flex-col items-center gap-4">
          {/* Client row + CTA */}
          <div className="w-full py-6 border-b-[1.5px] border-[#EEEEEE] flex justify-between items-center">
            {/* Client */}
            <div className="flex flex-col">
              <span className="text-[#AAAAAA] text-xs font-helvetica font-bold uppercase leading-[19.2px] tracking-[3px]">
                Client
              </span>
              <span className="pt-1 text-eg-blue-black text-2xl font-helvetica font-normal leading-7.5 tracking-[0.16px]">
                {client}
              </span>
            </div>

            {/* CTA */}
            <a
              href={caseStudyHref}
              className="px-6 py-3.5 outline-solid outline-[1.5px] outline-eg-blue-black-95 outline-offset-[-1.5px] flex items-center gap-2 no-underline text-eg-blue-black-95 transition-colors hover:bg-eg-blue-black-06"
            >
              <span className="text-[12.5px] font-grotesk-b font-medium leading-[16.5px] tracking-[0.5px]">
                View the case study
              </span>
              <span className="text-xs font-dm-sans font-bold uppercase leading-4.5 tracking-[1.2px]">
                ↗
              </span>
            </a>
          </div>

          {/* Quote block */}
          <div
            ref={quoteRef}
            className="w-full pt-9 flex flex-col items-center gap-6 opacity-0 transition-opacity duration-7000 ease-out"
          >
            <p className="m-0 w-full max-w-217 mx-auto text-center text-xl sm:text-2xl lg:text-[32px] font-grotesk-a font-normal lg:leading-9.5">
              <span className="text-eg-blue-black-95">{quoteStart}</span>
              <span className="text-eg-red">{quoteHighlight}</span>
              <span className="text-eg-blue-black-95">{quoteEnd}</span>
            </p>

            <span className="text-[#999999] text-xs font-helvetica font-bold uppercase leading-[19.2px] tracking-[3px]">
              {attribution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
