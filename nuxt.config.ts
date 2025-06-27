// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  
  content: {
    documentDriven: false,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      },
      anchorLinks: true
    },
    highlight: {
      theme: 'github-dark'
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'PT Nafitek Global Indonesia - Industrial Services & Machinery Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'PT Nafitek Global Indonesia provides high-quality machinery procurement, maintenance, repair services, and automation solutions. Trusted partner since 2018.' 
        },
        { name: 'keywords', content: 'machinery, industrial services, automation, vacuum pumps, maintenance, repair, Indonesia' },
        { property: 'og:title', content: 'PT Nafitek Global Indonesia - Industrial Services' },
        { property: 'og:description', content: 'Leading provider of machinery procurement, maintenance, and repair services in Indonesia' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nafitekglobalindonesia.com' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', weights: [300, 400, 500, 600, 700, 800] },
      { name: 'Open Sans', provider: 'google', weights: [300, 400, 500, 600, 700] }
    ]
  },

  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 1920,
          height: 1080
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 50,
          height: 50
        }
      },
      brand: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 400,
        }
      }
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/portofolio',
        '/blog',
        '/contact',
        '/sitemap',
        '/privacy',
        '/terms'
      ]
    }
  },

  experimental: {
    payloadExtraction: false
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://nafitekglobalindonesia.com'
    }
  },

  vite: {
    server: {
      host: '0.0.0.0',
      port: 12000,
      hmr: {
        port: 12000
      }
    }
  }
})