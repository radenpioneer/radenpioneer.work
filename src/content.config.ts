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
  }),

  home: defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/home' }),
    schema: z.object({
      title: z.string()
    })
  }),

  projects: defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/projects' }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        logo: image().optional(),
        screenshots: image().array().optional(),
        urls: z.string().url().array().optional()
      })
  })
}
