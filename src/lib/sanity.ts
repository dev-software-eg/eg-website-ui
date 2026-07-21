import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const token = process.env.SANITY_TOKEN;

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: !token,
  token,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);
