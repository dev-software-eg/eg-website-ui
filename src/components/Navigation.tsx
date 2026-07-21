import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { type NavLink } from "../api/models";
import egLogo from "../assets/eg-logo.svg";
import searchIcon from "../assets/search-icon-light.svg";
import SearchButton from "./SearchButton";
import ConversationButton from "./ChatButton";

interface NavigationProps {
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "What We Do", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation({ links = DEFAULT_LINKS }: NavigationProps) {
  const { pathname } = useLocation();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <nav
      style={{
        height: 64,
        paddingLeft: 32,
        background: "var(--eg-white)",
        // boxShadow: "0px 1px 0px var(--eg-blue-black-06)",
        // outline: "1px var(--eg-blue-black-08) solid",
        outlineOffset: "-1px",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={egLogo} alt="EG Studio Logo" style={{ height: 40 }} />
      </Link>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map(({ label, href }) => {
          const isActive = pathname === href;
          const isHovered = href === hoveredHref;
          const color = isActive
            ? "var(--eg-red)"
            : isHovered
              ? "var(--eg-blue-black)"
              : "var(--eg-blue-black-55)";

          return (
            <Link
              key={href}
              to={href}
              style={{
                color,
                fontSize: 12,
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                // textTransform: "uppercase",
                lineHeight: "16px",
                letterSpacing: 1.2,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={() => setHoveredHref(href)}
              onMouseLeave={() => setHoveredHref(null)}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <ConversationButton />
      {/* <SearchButton /> */}
    </nav>
  );
}
