// Purpose: This file contains all helper functions in regards to server-only utilities.

// Import Types
import { Category, ProductMeta } from '@/types';
// Import External Packages
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

/**
 * Retrieves the PRODUCT metadata and MDX content for a given category and product slug.
 * @param categorySlug - The slug of the category.
 * @param productSlug - The slug of the product.
 * @returns An object containing the product metadata, MDX content, and an error flag.
 */
export async function getProductMetaAndMDXContent(
	categorySlug: Category,
	productSlug: string
) {
	const blogDir = '/app/_products';
	const currentPath = path.join(
		process.cwd(),
		blogDir,
		categorySlug,
		`${productSlug}/${productSlug}.docs.mdx`
	);
	if (!fs.existsSync(currentPath))
		return { meta: {} as ProductMeta, content: '', error: true };
	const fileContent = fs.readFileSync(
		path.join(
			process.cwd(),
			blogDir,
			categorySlug,
			`${productSlug}/${productSlug}.docs.mdx`
		),
		'utf-8'
	);
	const { data: frontMatter, content } = matter(fileContent);
	return {
		meta: frontMatter as ProductMeta,
		content,
		error: false,
	};
}

/**
 * Retrieves the paths of all the content files with the '.mdx' extension in a directory and its subdirectories - e.g. for static data like the sitemap.
 * @param basePath - The base path of the directory to search in.
 * @param currentPath - The current path relative to the base path (used for recursion, should not be provided when calling the function).
 * @returns An array of arrays representing the paths of the content files.
 */
export const getDocsContentPaths = (
	basePath: string,
	currentPath: string[] = []
): string[][] => {
	const entries = fs.readdirSync(basePath, { withFileTypes: true });
	let paths: string[][] = [];

	entries.forEach((entry) => {
		if (entry.isDirectory()) {
			const subDirPaths = getDocsContentPaths(path.join(basePath, entry.name), [
				...currentPath,
				entry.name,
			]);
			paths = paths.concat(subDirPaths);
		} else if (entry.isFile() && entry.name.endsWith('.mdx')) {
			const modifiedEntryName = entry.name
				.replace('.mdx', '')
				.replace('_index', '');
			if (modifiedEntryName) {
				paths.push([...currentPath, modifiedEntryName]);
			} else {
				paths.push([...currentPath]);
			}
		}
	});

	return paths;
};
