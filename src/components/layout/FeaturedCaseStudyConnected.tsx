import FeaturedCaseStudy from '../../components/layout/FeaturedCaseStudy';
import { useFeaturedCaseStudy } from '../../hooks/useFeaturedCaseStudy';
import { urlFor } from '../../lib/sanity';

export default function FeaturedCaseStudyConnected() {
  const data = useFeaturedCaseStudy();

  if (!data) {
    return <div style={{ width: '100%', minHeight: 1250, background: 'var(--eg-white)' }} />;
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
