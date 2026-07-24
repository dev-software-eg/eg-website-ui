import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { type NavLink } from "@/api/models";

const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "What we do", href: "/what-we-do" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = {
  title: {
    default: "Estipona Group",
    template: "%s | Estipona Group",
  },
  description: "We use marketing to solve problems.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation links={NAV_LINKS} />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
