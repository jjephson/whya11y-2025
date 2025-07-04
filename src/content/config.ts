import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		headerImage: z.string().optional(),
	}),
});

const codeExamples = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		headerImage: z.string().optional(),
	}),
});

export const collections = { articles: articles, codeExamples: codeExamples };