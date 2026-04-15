import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Edge Creatives Studio',
  schema,
  plugins: [structureTool()],
})
