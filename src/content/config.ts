import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      year: z.number(),
      tools: z.array(z.string()),
      cover: z.string(),
      images: z.array(z.string())
    })
  }),
  comics: defineCollection({
    schema: z.object({
      title: z.string(),
      year: z.number(),
      tagline: z.string(),
      cover: z.string(),
      images: z.array(z.string()),
      order: z.number().optional(),
      buyLink: z.string().optional()
    })
  })
};