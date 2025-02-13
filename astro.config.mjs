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
    plugins: [tailwindcss(), icons({ compiler: 'jsx', jsx: 'react' })]
  },
  experimental: {
    responsiveImages: true
  }
})
