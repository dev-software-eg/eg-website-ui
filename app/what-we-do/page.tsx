import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
};

export default function WhatWeDo() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="font-grotesk-a text-eg-blue-black text-3xl font-medium mb-5">What We Do</h1>
      <p className="font-helvetica text-eg-blue-black-85">Learn more about our services and how we can help you achieve your goals.</p>
    </div>
  );
}