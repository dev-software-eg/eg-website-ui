import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="font-grotesk-a text-eg-blue-black text-3xl font-medium mb-5">
        Case Study One
      </h1>
      <p className="font-helvetica text-eg-blue-black-85">
        Case Study One: A Comprehensive Overview of Our Project, Its Objectives, and the Results Achieved.
      </p>
    </div>
  );
}
