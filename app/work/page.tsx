import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="font-grotesk-a text-eg-blue-black text-3xl font-medium mb-5">Our Work</h1>
      <p className="font-helvetica text-eg-blue-black-85">Explore our portfolio to see the projects we've worked on and the impact we've made.</p>
    </div>
  );
}