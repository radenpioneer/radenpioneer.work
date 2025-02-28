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
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react(), ...(process.env.KEYSTATIC ? [keystatic()] : [])],
  redirects: {
    '/astro': 'https://astro.build'
  },
  image: {
    domains: ['astro.badg.es']
  },
  vite: {
    plugins: [tailwindcss(), icons({ compiler: 'jsx', jsx: 'react' })],

    // workaround for deployment bug, see https://github.com/withastro/astro/issues/12824
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      // @ts-ignore
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge'
      }
    }
  },
  experimental: {
    responsiveImages: true
  }
})
