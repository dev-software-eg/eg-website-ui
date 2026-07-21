import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please reach out to us using the form below.</p>
      {/* Add your contact form here */}
    </div>
  );
}