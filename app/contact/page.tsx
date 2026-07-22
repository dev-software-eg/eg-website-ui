import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactUs() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="font-grotesk-a text-eg-blue-black text-3xl font-medium mb-5">Contact Us</h1>
      <p className="font-helvetica text-eg-blue-black-85">We would love to hear from you! Please reach out to us using the form below.</p>
      {/* Add your contact form here */}
    </div>
  );
}