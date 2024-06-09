'use client';
// Import Types
import { RegistryKey } from '@/lib/registry';
// Import External Packages
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// Import Components
import ComponentMultiplier from '@/ui/ComponentMultiplier';
import { buttonVariants } from '@/ui/Button';
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
import {
	ImageCard,
	ImageCardDescription,
	ImageCardFooter,
	ImageCardImage,
	ImageCardImageContainer,
	ImageCardLink,
	ImageCardTitle,
} from '@/ui/ImageCard';
// Import Functions & Actions & Hooks & State
import { capitalize, cn } from '@/lib/utils';
// Import Data
import { getFilteredProducts } from '@/lib/registry';
import { CATEGORIES_DESC } from '@/constants';
// Import Assets & Icons

/**
 * Renders a placeholder for products that are coming soon.
 *
 * @returns The rendered coming soon placeholder.
 */
function ComingSoonPlaceholder() {
	return (
		<ImageCard className="shadow-none opacity-50">
			<ImageCardImageContainer>
				<ImageCardImage
					src="/img/plusArea.png"
					alt="Soon to be added"
					width={400}
					height={300}
					className="h-full w-full object-cover"
				/>
			</ImageCardImageContainer>
			<ImageCardFooter className="grid space-y-2">
				<ImageCardTitle>Coming Soon!</ImageCardTitle>
				<ImageCardDescription>
					We are constantly working on new products. Check back soon for more!
				</ImageCardDescription>
			</ImageCardFooter>
		</ImageCard>
	);
}

/**
 * Renders the category overview component.
 *
 * @param categoryName - The name of the category.
 * @param title - The title of the category overview. Defaults to `Browse ${categoryName}`.
 * @param categoryNavigation - Indicates whether to show category navigation. Defaults to `true`.
 * @param description - The description of the category overview.
 * @param className - The CSS class name for the component.
 * @returns The rendered category overview component.
 */
export default function CategoryOverview({
	categoryName,
	title = `Browse all ${capitalize(categoryName)}`,
	categoryNavigation = true,
	description,
	className,
	maxNumProducts = 3,
	maxCols = 3,
	urlPrePath = '',
}: {
	categoryName: RegistryKey;
	title?: string;
	categoryNavigation?: boolean;
	description?: string;
	className?: string;
	maxNumProducts?: number;
	maxCols?: number;
	urlPrePath?: string;
}) {
	const searchParams = useSearchParams();
	const filterTag = searchParams.get('tag') || undefined;

	const productsInCategory = getFilteredProducts(
		categoryName,
		filterTag,
		maxNumProducts
	);

	if (!productsInCategory) {
		return (
			<div className="mx-auto text-center w-full text-red-600">
				Category not found
			</div>
		);
	}

	// Add dummy products to fill the first grid row when maxNumProducts has not been reached - else, at least one.
	const numberOfDummyProducts = Math.max(
		maxCols - productsInCategory.length,
		1
	);

	return (
		<SubSectionOuterContainer
			id={categoryName.toLowerCase()}
			className={className}
		>
			{categoryNavigation && (
				<div className="flex items-center justify-between">
					<SubSectionTitle>{title}</SubSectionTitle>
					<Link
						href={`/${categoryName}`}
						className="text-sm font-semibold text-primary hover:text-primary/50 transition-colors duration-200 ease-in-out"
					>
						See all in category
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>
			)}

			{categoryNavigation && (
				<SubSectionDescription>
					{description
						? description
						: CATEGORIES_DESC.find((category) => category.slug === categoryName)
								?.description || null}
				</SubSectionDescription>
			)}

			<SubSectionInnerContainer>
				<div
					className={cn(
						'grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-8 px-4',
						`lg:grid-cols-${maxCols}`
					)}
				>
					{productsInCategory.map((product) => (
						<ImageCard key={product.componentName} linkHover>
							<ImageCardImageContainer>
								<ImageCardImage
									src={
										product.imageUrl ||
										'/api/og?product=' +
											product.componentName +
											'&width=1200&height=675&category=' +
											product.category
									}
									alt={product.imageAlt || 'Product Image'}
									width={800}
									height={450}
									className="h-full w-full object-cover"
								/>
							</ImageCardImageContainer>
							<ImageCardFooter className="grid space-y-2">
								<ImageCardLink
									href={`${urlPrePath}/${categoryName}/${product.slug}`}
									data-umami-event="Buttons: Product Link"
									data-umami-event-product={product.slug}
								/>
								<ImageCardTitle>{product.componentName}</ImageCardTitle>
								<ImageCardDescription>
									{product.shortDescription}
								</ImageCardDescription>
							</ImageCardFooter>
						</ImageCard>
					))}
					{productsInCategory.length < maxNumProducts && (
						<ComponentMultiplier
							component={<ComingSoonPlaceholder />}
							multiplier={numberOfDummyProducts}
						/>
					)}
				</div>
				{categoryNavigation && (
					<div className="flex items-center mx-auto mt-12 mb-6 dark:text-white">
						<Link
							href={`/${categoryName}`}
							className={cn(buttonVariants({ variant: 'outline' }))}
						>
							See all {capitalize(categoryName)}
						</Link>
					</div>
				)}
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
