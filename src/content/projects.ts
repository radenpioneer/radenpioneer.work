import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro:schema'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/data/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(64),
      description: z.string().max(160).optional(),
      date: z.coerce.date().optional(),
      status: z.enum([
        'completed',
        'rejected',
        'archived',
        'on-progress',
        'concept'
      ]),
      madeFor: z.string().max(160).optional(),
      image: image().optional(),
      tags: z
        .object({
          tag: z.object({
            name: z.string(),
            slug: z.string()
          })
        })
        .array()
        .optional(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      featured: z.boolean().optional()
    })
})

export default projects
