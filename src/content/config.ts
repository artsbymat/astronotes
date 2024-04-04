import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(20).max(120),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    image: z.string().optional()
  })
});

export const collections = {
  articles: blogCollection
};
