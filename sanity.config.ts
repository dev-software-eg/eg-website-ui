import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID

const sharedConfig = {
  projectId,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}

export default defineConfig([
  {
    ...sharedConfig,
    name: 'production',
    title: 'Estipona Group — Production',
    dataset: 'production',
    basePath: '/production',
  },
  {
    ...sharedConfig,
    name: 'development',
    title: 'Estipona Group — Development',
    dataset: 'development',
    basePath: '/development',
  },
])
