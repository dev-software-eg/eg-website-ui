import Button from "../components/Button";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedCaseStudyConnected from "../components/FeaturedCaseStudyConnected";
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
      <Button variant="primary">Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="sage">Sage Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  );
}
