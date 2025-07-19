import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  // https://content.nuxt.com/docs/api/configuration
  collections: {
    company: defineCollection({
      source: 'company.yml',
      type: 'data',
      schema: z.object({
        name: z.string(),
        year_experience: z.number(),
        client_total: z.number(),
        client_statisfaction: z.number(),
        project_total: z.number(),
        project_success_percentage: z.number(),
        project_ontime_percentage: z.number(),
        machine_total: z.number(),
        industry_served: z.number(),
        strengths: z.array(z.object({
          number: z.number(),
          icon: z.string(),
          name: z.string(),
          description: z.string(),
          features: z.array(z.string()),
        })),
      })
    }),
    services: defineCollection({
      source: 'services/**/*.{md,yaml,yml}',
      type: 'page',
      schema: z.object({
        number: z.number(),
        pinned: z.boolean(),
        name: z.string(),
        icon: z.string(),
        image: z.string(),
        overview: z.string(),
        overview_extra: z.string(),
        feature_cta: z.string(),
        feature_list: z.array(z.string()),
        cta_text: z.string(),
      })
    }),
    partners: defineCollection({
      source: 'partners/**/*.{md,yaml,yml}',
      type: 'data',
      schema: z.object({
        name: z.string(),
        logo: z.string(),
        description: z.string(),
        products: z.array(z.string()),
        link: z.string(),
        pinned: z.boolean(),
      })
    }),
    portofolio: defineCollection({
      source: 'portofolio/**/*.{md,yaml,yml}',
      type: 'page',
      schema: z.object({
        date: z.string(),
        title: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        featured: z.boolean(),
        project_status: z.string(),
        project_client: z.string(),
        project_location: z.string(),
        project_duration: z.string(),
        project_solution: z.string(),
      })
    }),
    testimonials: defineCollection({
      source: 'testimonials/**/*.{md,yaml,yml}',
      type: 'data',
      schema: z.object({
        name: z.string(),
        company: z.string(),
        position: z.string(),
        image: z.string(),
        project: z.string(),
        message: z.string(),
        rating: z.number(),
      })
    }),
    article: defineCollection({
      source: 'article/**/*.{md,yaml,yml}',
      type: 'page',
      schema: z.object({
        date: z.string(),
        author: z.string(),
        authorRole: z.string(),
        category: z.string(),
        image: z.string(),
        overview: z.string(),
        readTime: z.number(),
        featured: z.boolean(),
      })
    }),
    clients: defineCollection({
      source: 'clients/**/*.{md,yaml,yml}',
      type: 'data',
      schema: z.object({
        name: z.string(),
        logo: z.string(),
        industry: z.string(),
        description: z.string(),
        featured: z.boolean(),
      })
    }),
  }
})