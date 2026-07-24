import Hero from "@/components/layout/Hero";
import WhatWeDo from "@/components/layout/WhatWeDo";
import FeaturedCaseStudyConnected from "@/components/layout/FeaturedCaseStudyConnected";
import WhoWeAre from "@/components/layout/WhoWeAre";
import SecretSauce from "@/components/layout/SecretSauce";

export default function Home() {
  return (
    <div>
      <Hero
        title="We use marketing"
        subtitle="to solve problems."
        body="At Estipona Group, we help businesses and organizations address challenges and meet goals. Buying, joining, understanding, watching, asking, celebrating, believing — if you want people to do something, we can help."
      />
      <FeaturedCaseStudyConnected />
      <WhatWeDo />
      <WhoWeAre />
      <SecretSauce />
    </div>
  );
}
