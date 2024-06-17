// Purpose: This file contains all helper functions in regards to the local registry of your products.
// Think of "registry" as your database and these functions help perform the common tasks.

// Import Types
import { Category, ProductMeta } from '@/types';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
import registry from '@/registry';
// Import Assets & Icons

export type RegistryKey = keyof typeof registry;

/**
 * Retrieves an array of all product slugs within a given category.
 *
 * @param category - The category for which to retrieve the product slugs.
 * @returns An array of product slugs within the specified category.
 */
export const getAllProductSlugsWithinCategory = (
	category: Category
): string[] => {
	return registry[category].map((product) => product.slug);
};

/**
 * Checks if a product exists in the registry.
 * @param categorySlug - The category slug.
 * @param productSlug - The product slug.
 * @returns A boolean indicating whether the product exists in the registry.
 */
export const doesProductExist = (
	categorySlug: RegistryKey,
	productSlug: string
): boolean => {
	return registry[categorySlug].some((product) => product.slug === productSlug);
};

/**
 * Retrieves the metadata of one product based on its category and slug.
 * @param categorySlug - The slug of the category.
 * @param productSlug - The slug of the product.
 * @returns The metadata of the product, or undefined if not found.
 */
export const getProductMeta = (
	categorySlug: RegistryKey,
	productSlug: string
): ProductMeta | undefined => {
	return registry[categorySlug].find((product) => product.slug === productSlug);
};

/**
 * Retrieves (filtered) products from the registry based on the provided category slug (, filter tag, and maximum number) of the products.
 *
 * @param categorySlug - The category slug to filter the products.
 * @param filterTag - The filter tag to further filter the products (optional).
 * @param maxNumProducts - The maximum number of products to retrieve (optional).
 * @returns An array of filtered ProductMeta objects.
 */
export const getFilteredProducts = (
	categorySlug: RegistryKey,
	filterTag?: string,
	maxNumProducts?: number
): ProductMeta[] => {
	return registry[categorySlug]
		?.filter((product) => {
			return filterTag ? product.tags.includes(filterTag) : true;
		})
		.slice(0, maxNumProducts);
};

/**
 * Creates a tags registry for a given category.
 * @param category The category of products.
 * @returns The tags registry object.
 */
export function createTagsRegistry(category: Category): {
	[tag: string]: ProductMeta[];
} {
	const tagsRegistry: { [tag: string]: ProductMeta[] } = {};

	const products = registry[category];
	if (!products) {
		console.error(`Product line '${category}' not found.`);
		return tagsRegistry;
	}

	products.forEach((product) => {
		product.tags &&
			product.tags.forEach((tag) => {
				if (!tagsRegistry[tag]) {
					tagsRegistry[tag] = [];
				}
				tagsRegistry[tag].push(product);
			});
	});

	return tagsRegistry;
}

/**
 * Returns the number of products in a given category.
 *
 * @param category - The category of products.
 * @returns The number of products in the category.
 */
export function numberOfProductsInCategory(category: Category): number {
	if (!registry || !Object.keys(registry).includes(category)) return 0;
	return registry[category].length;
}
