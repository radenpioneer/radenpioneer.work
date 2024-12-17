// @ts-check
import { config, fields, singleton } from '@keystatic/core'

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
  }
})
