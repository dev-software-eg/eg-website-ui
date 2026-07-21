import type { SanityImageSource } from '@sanity/image-url';

export interface SanityTag {
  label: string;
  variant: 'outline' | 'filled';
}

export interface FeaturedCaseStudyData {
  eyebrow?: string;
  heading?: string;
  projectName?: string;
  tags?: SanityTag[];
  image?: SanityImageSource;
  client?: string;
  caseStudyUrl?: string;
  quoteStart?: string;
  quoteHighlight?: string;
  quoteEnd?: string;
  attribution?: string;
}
