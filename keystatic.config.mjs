// @ts-check

import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: import.meta.env.DEV
    ? {
        kind: 'local'
      }
    : {
        kind: 'github',
        repo: 'radenpioneer/radenpioneer.work'
      },

  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'src/content/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Site Title',
          validation: {
            isRequired: true,
            length: {
              max: 64
            }
          }
        }),
        description: fields.text({
          label: 'Site Description',
          multiline: true,
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
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

    home: singleton({
      label: 'Homepage Settings',
      path: 'src/content/home/home',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Home Title',
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          }
        })
      }
    })
  }
})
