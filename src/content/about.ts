import { defineCollection } from 'astro:content'
import { z } from 'astro:schema'

const gql = String.raw
const bio = defineCollection({
  loader: async () => {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GH_API_TOKEN}`
      },
      body: JSON.stringify({
        query: gql`
          query GetBio($id: String!) {
            repository(name: $id, owner: $id) {
              object(expression: "HEAD:") {
                ... on Tree {
                  entries {
                    name
                    object {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          id: 'radenpioneer'
        }
      })
    })

    const json = (await res.json()) as any
    return (
      json.data.repository.object.entries as Array<{
        name: string
        object: { text: string }
      }>
    ).map((entry) => ({
      id: entry.name,
      text: entry.object.text
    }))
  },
  schema: z.object({
    id: z.string(),
    text: z.string()
  })
})

export default bio
