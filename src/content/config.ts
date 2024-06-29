import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    author: z.string().optional(),
    description: z.string(),
    heroImage: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
