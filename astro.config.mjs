// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'
import icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.radenpioneer.work',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true
    }
  }),
  image: {
    domains: ['astro.badg.es']
  },
  integrations: [react(), ...(process.env.KEYSTATIC ? [keystatic()] : [])],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss(), icons({ compiler: 'jsx', jsx: 'react' })],

    // workaround for deployment bug, see https://github.com/withastro/astro/issues/12824
    resolve: {
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge'
      }
    }
  },
  experimental: {
    responsiveImages: true
  }
})
