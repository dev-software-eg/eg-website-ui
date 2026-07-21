import FeaturedCaseStudy from './FeaturedCaseStudy';
import { client, urlFor } from '@/lib/sanity';
import type { FeaturedCaseStudyData } from '@/lib/sanity.types';

const QUERY = `*[_type == "featuredCaseStudy"] | order(_updatedAt desc) [0]`;

export default async function FeaturedCaseStudyConnected() {
  const data = await client.fetch<FeaturedCaseStudyData>(
    QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  if (!data) {
    return <div className="w-full min-h-312.5 bg-eg-white" />;
  }

  return (
    <FeaturedCaseStudy
      eyebrow={data.eyebrow}
      heading={data.heading}
      tags={data.tags}
      projectName={data.projectName}
      imageSrc={data.image ? urlFor(data.image).width(1200).url() : undefined}
      client={data.client}
      caseStudyHref={data.caseStudyUrl}
      quoteStart={data.quoteStart}
      quoteHighlight={data.quoteHighlight}
      quoteEnd={data.quoteEnd}
      attribution={data.attribution}
    />
  );
}
