// @ts-check
import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },

  singletons: {
    site: singleton({
      label: 'Site Configuration',
      path: 'src/data/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Site Name',
          validation: {
            isRequired: true,
            length: {
              max: 64
            }
          }
        }),
        description: fields.text({
          label: 'Site Description',
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          },
          multiline: true
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/site',
          publicPath: '~/assets/site',
          validation: {
            isRequired: true
          }
        }),
        favicon: fields.image({
          label: 'Favicon',
          directory: 'public',
          publicPath: '',
          validation: {
            isRequired: true
          }
        })
      }
    }),

    bio: singleton({
      label: 'Bio',
      path: 'src/data/bio/bio',
      format: 'json',
      schema: {
        name: fields.text({
          label: 'Name',
          validation: {
            isRequired: true,
            length: {
              max: 64
            }
          }
        }),
        title: fields.text({
          label: 'Job Title',
          validation: {
            isRequired: true,
            length: {
              max: 64
            }
          }
        }),
        description: fields.text({
          label: 'Job Description',
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          },
          multiline: true
        }),
        image: fields.image({
          label: 'Profile Image',
          directory: 'src/assets/bio',
          publicPath: '~/assets/bio',
          validation: {
            isRequired: true
          }
        })
      }
    })
  },

  collections: {
    projects: collection({
      label: 'Projects',
      format: {
        contentField: 'content'
      },
      path: 'src/data/projects/*',
      slugField: 'title',
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: {
            label: 'Project Name',
            validation: {
              isRequired: true
            }
          },
          slug: {
            label: 'Permalink'
          }
        }),
        description: fields.text({
          label: 'Project Short Description',
          multiline: true
        }),
        date: fields.date({
          label: 'Date of Completion',
          defaultValue: {
            kind: 'today'
          }
        }),
        status: fields.select({
          label: 'Project Status',
          options: [
            { label: 'Completed', value: 'completed' },
            { label: 'Rejected', value: 'rejected' },
            { label: 'Archived', value: 'archived' },
            { label: 'On Progress', value: 'on-progress' },
            { label: 'Concept', value: 'concept' }
          ],
          defaultValue: 'concept'
        }),
        madeFor: fields.text({
          label: 'Made for',
          multiline: true
        }),
        image: fields.image({
          label: 'Profile Image',
          directory: 'src/assets/projects',
          publicPath: '~/assets/projects'
        }),
        tags: fields.array(
          fields.object({
            tag: fields.slug({
              name: {
                label: 'Tag Name'
              }
            })
          }),
          {
            label: 'Tags',
            itemLabel: (i) => i.fields.tag.value.name
          }
        ),
        url: fields.url({
          label: 'Project URL'
        }),
        repo: fields.url({
          label: 'Project Repository URL'
        }),
        featured: fields.checkbox({
          label: 'Feature this Project',
          defaultValue: false
        }),
        content: fields.mdx({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/assets/projects',
              publicPath: '~/assets/projects'
            }
          }
        })
      }
    })
  }
})
