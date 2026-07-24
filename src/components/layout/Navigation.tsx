"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavLink } from "../../api/models";
import egLogo from "../../assets/eg-logo-red.svg";
import ConversationButton from "../chat/ChatButton";

interface NavigationProps {
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  // { label: "Work", href: "/work" },
  // { label: "What We Do", href: "/what-we-do" },
  // { label: "About", href: "/about" },
  // { label: "Contact", href: "/contact" },
];

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {open ? (
      <path d="M6 6L18 18M18 6L6 18" stroke="#191C25" strokeWidth="1.5" strokeLinecap="round" />
    ) : (
      <path d="M4 7H20M4 12H20M4 17H20" stroke="#191C25" strokeWidth="1.5" strokeLinecap="round" />
    )}
  </svg>
);

export default function Navigation({ links = DEFAULT_LINKS }: NavigationProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="relative h-16 pl-4 sm:pl-8 bg-eg-white flex items-stretch justify-between">
      <Link href="/" className="flex items-center">
        <img src={egLogo.src} alt="EG Studio Logo" className="h-10" />
      </Link>

      <div className="flex items-stretch">
        <div className="hidden lg:flex items-center gap-8">
          {/* {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-helvetica text-xs font-normal leading-4 tracking-[1.2px] no-underline transition-colors ${
                  isActive ? "text-eg-red" : "text-eg-blue-black-55 hover:text-eg-blue-black"
                }`}
              >
                {label}
              </Link>
            );
          })} */}
        </div>

        <button
          type="button"
          className="flex lg:hidden items-center justify-center px-4 h-full"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <MenuIcon open={mobileOpen} />
        </button>

        <ConversationButton />
      </div>

      {mobileOpen && (
        <div className="absolute top-full inset-x-0 z-50 flex flex-col gap-4 p-6 bg-eg-white shadow-lg lg:hidden">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-helvetica text-sm font-normal tracking-[1.2px] no-underline ${
                  isActive ? "text-eg-red" : "text-eg-blue-black-55"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
