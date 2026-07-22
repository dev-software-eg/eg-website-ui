import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="font-grotesk-a text-eg-blue-black text-3xl font-medium mb-5">About Us</h1>
      <p className="font-helvetica text-eg-blue-black-85">Learn more about our company, our mission, and the team behind our success.</p>
    </div>
  );
}