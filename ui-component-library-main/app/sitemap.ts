// Purpose: Generates a sitemap for the website

// Import Types
import { MetadataRoute } from 'next';
// Import External Packages
import path from 'path';
import fs from 'fs';
// Import Components
// Import Functions & Actions & Hooks & State
import { getAllProductSlugsWithinCategory } from '@/lib/registry';
// Import Data
import { CATEGORIES, COMPANY_WEBSITE_URL } from '@/constants';
// Import Assets & Icons

type URL_Object = {
	url: string;
};

function readFolderStructure(dirPath = path.join(process.cwd(), '/app')) {
	const urls: URL_Object[] = [];
	fs.readdirSync(dirPath, { withFileTypes: true }).forEach((dirent) => {
		if (dirent.isDirectory()) {
			const dirName = dirent.name;
			// Apply filters
			if (
				!dirName.startsWith('_') &&
				!dirName.includes('Protected') &&
				!dirName.includes('api') &&
				!dirName.match(/\[.*\]/)
			) {
				// Check for leaf directories or specific files to construct URLs
				const fullPath = path.join(dirPath, dirName);
				// If directory should be ignored based on its name, skip further processing
				if (!dirName.match(/\(.*\)/)) {
					// Assuming logic here to determine if `dirName` is a leaf directory or of interest
					// This could be as simple as checking for the presence of certain files
					const url = `${COMPANY_WEBSITE_URL}/${dirName}`;
					urls.push({ url });
				} else {
					// Recursive call if further directory traversal is needed
					const childUrls = readFolderStructure(fullPath);
					urls.push(...childUrls);
				}
			}
		}
	});
	return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const BASE_URL: URL_Object[] = [
		{
			url: `${COMPANY_WEBSITE_URL}`,
		},
	];

	// Level 1: Base Pages => website.com/{LEVEL_1}

	const LEVEL1_PAGES: URL_Object[] = readFolderStructure();

	// Level 1: /{categories} => website.com/{category}

	const LEVEL1_CATEGORIES: URL_Object[] = CATEGORIES.map((category) => ({
		url: `${COMPANY_WEBSITE_URL}/${category}`,
	}));

	// Level 2: /{categories} => website.com/{category}/{product}

	const LEVEL2_CATEGORIES_PRODUCTS: URL_Object[] = CATEGORIES.flatMap(
		(category) =>
			getAllProductSlugsWithinCategory(category).map((slug) => ({
				url: `${COMPANY_WEBSITE_URL}/${category}/${slug}`,
			}))
	);

	return [
		...BASE_URL,
		...LEVEL1_PAGES,
		...LEVEL1_CATEGORIES,
		...LEVEL2_CATEGORIES_PRODUCTS,
	];
}
