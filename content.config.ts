import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  // https://content.nuxt.com/docs/api/configuration
  collections: {
    company: defineCollection({
      source: "company.yml",
      type: "data",
      schema: z.object({
        name: z.string(),
        address: z.object({
          street: z.string(),
          village: z.string(),
          district: z.string(),
          city: z.string(),
          province: z.string(),
          country: z.string(),
          postal_code: z.string(),
        }),
        phone: z.string(),
        email: z.string(),
        about: z.array(z.string()),
        vision: z.array(z.string()),
        mission: z.array(z.string()),
        year_established: z.number(),
        client_total: z.number(),
        client_statisfaction: z.number(),
        project_total: z.number(),
        project_success_percentage: z.number(),
        project_ontime_percentage: z.number(),
        machine_total: z.number(),
        industry_served: z.number(),
        industry_fields: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
          })
        ),
        strengths: z.array(
          z.object({
            number: z.number(),
            icon: z.string(),
            name: z.string(),
            description: z.string(),
            features: z.array(z.string()),
          })
        ),
        processes: z.object({
          steps: z.array(
            z.object({
              number: z.number(),
              icon: z.string(),
              name: z.string(),
              description: z.string(),
              image: z.string(),
            })
          ),
          benefits: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              description: z.string(),
            })
          ),
        }),
      }),
    }),
    services: defineCollection({
      source: "services/**/*.{md,yaml,yml}",
      type: "page",
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
      }),
    }),
    products: defineCollection({
      source: "products/**/*.{md,yaml,yml}",
      type: "page",
      schema: z.object({
        number: z.number(),
        name: z.string(),
        description: z.string(),
        icon: z.string(),
        image: z.string(),
        pinned: z.boolean().optional(),
        categories: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            items: z.array(z.string()),
          })
        ),
      }),
    }),
    partners: defineCollection({
      source: "partners/**/*.{md,yaml,yml}",
      type: "data",
      schema: z.object({
        name: z.string(),
        logo: z.string(),
        description: z.string(),
        products: z.array(z.string()),
        link: z.string(),
        pinned: z.boolean(),
      }),
    }),
    portofolio: defineCollection({
      source: "portofolio/**/*.{md,yaml,yml}",
      type: "page",
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
      }),
    }),
    testimonials: defineCollection({
      source: "testimonials/**/*.{md,yaml,yml}",
      type: "data",
      schema: z.object({
        name: z.string(),
        company: z.string(),
        position: z.string(),
        image: z.string(),
        project: z.string(),
        message: z.string(),
        rating: z.number(),
      }),
    }),
    article: defineCollection({
      source: "article/**/*.{md,yaml,yml}",
      type: "page",
      schema: z.object({
        date: z.string(),
        author: z.string(),
        authorRole: z.string(),
        category: z.string(),
        image: z.string(),
        overview: z.string(),
        readTime: z.number(),
        featured: z.boolean(),
      }),
    }),
    clients: defineCollection({
      source: "clients/**/*.{md,yaml,yml}",
      type: "data",
      schema: z.object({
        name: z.string(),
        logo: z.string(),
        industry: z.string(),
        description: z.string(),
        featured: z.boolean(),
      }),
    }),
  },
});
