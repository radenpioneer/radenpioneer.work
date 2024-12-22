import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro:schema'

const bio = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/data/bio' }),
  schema: ({ image }) =>
    z.object({
      name: z.string().max(64),
      title: z.string().max(64),
      description: z.string().max(160),
      image: image()
    })
})

export default bio
