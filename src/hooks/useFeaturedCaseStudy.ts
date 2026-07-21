import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import type { FeaturedCaseStudyData } from '../lib/sanity.types';

const QUERY = `*[_type == "featuredCaseStudy"] | order(_updatedAt desc) [0]`;

export function useFeaturedCaseStudy() {
  const [data, setData] = useState<FeaturedCaseStudyData | null>(null);

  useEffect(() => {
    client.fetch<FeaturedCaseStudyData>(QUERY).then(setData);
  }, []);

  return data;
}
