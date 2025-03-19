import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro:schema'

export const collections = {
  site: defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/site' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      favicon: z.string()
    })
  })
}
