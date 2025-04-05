// @ts-check

import { config, fields, singleton, collection } from '@keystatic/core'
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

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/**',
      format: 'json',
      schema: {
        title: fields.slug({
          name: {
            label: 'Project Name',
            validation: {
              isRequired: true,
              length: {
                max: 64
              }
            }
          }
        }),
        description: fields.text({
          label: 'Project Description',
          multiline: true,
          validation: {
            length: {
              max: 160
            }
          }
        }),
        logo: fields.image({
          label: 'Project Logo',
          directory: 'src/assets/projects',
          publicPath: '~/assets/projects'
        }),
        screenshots: fields.array(
          fields.image({
            label: 'Image name',
            description: 'Image description',
            directory: 'src/assets/projects',
            publicPath: '~/assets/projects'
          }),
          {
            label: 'Screenshots'
          }
        ),
        urls: fields.array(
          fields.url({
            label: 'URL'
          }),
          {
            label: 'Project URLs',
            itemLabel: (props) => props.value || ''
          }
        )
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
      content: ['projects'],
      settings: ['site', 'home']
    }
  }
})
