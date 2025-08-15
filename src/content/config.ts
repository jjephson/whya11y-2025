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
		// WCAG Criteria that this example addresses
		wcagCriteria: z.array(z.object({
			code: z.string(),
			title: z.string(),
			url: z.string(),
		})).optional(),
		// Best practices for this implementation
		bestPractices: z.array(z.string()).optional(),
		// Who benefits from this accessibility feature
		whoBenefits: z.array(z.string()).optional(),
		// Related resources and documentation
		relatedResources: z.array(z.object({
			title: z.string(),
			url: z.string(),
		})).optional(),
		// Testing tools for this feature
		testingTools: z.array(z.object({
			title: z.string(),
			url: z.string(),
		})).optional(),
	}),
});

export const collections = { articles: articles, codeExamples: codeExamples };