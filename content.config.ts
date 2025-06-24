import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  // https://content.nuxt.com/docs/api/configuration
  collections: {
    blog: defineCollection({
      source: 'blog/**/*.{md,yaml,yml}',
      type: 'page'
    })
  }
})