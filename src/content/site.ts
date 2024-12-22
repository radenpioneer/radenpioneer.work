import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro:schema'

const site = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/data/site' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(64),
      description: z.string().max(160),
      logo: image(),
      favicon: z.string(),
      faviconAlt: z.string()
    })
})

export default site
