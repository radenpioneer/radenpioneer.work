// @ts-check

import { config, fields, singleton } from '@keystatic/core'
import site from './src/content/site/site.json'
import { createElement } from 'react'

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
        }),
        faviconDark: fields.image({
          label: 'Dark Favicon',
          directory: 'public',
          publicPath: ''
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
  },

  ui: {
    brand: {
      name: site.title,
      mark: ({ colorScheme }) => {
        const path =
          colorScheme === 'dark' && site.faviconDark
            ? site.faviconDark
            : site.favicon
        return createElement('img', { src: path, height: 16, alt: '' })
      }
    },

    navigation: {
      Settings: ['site', 'home']
    }
  }
})
