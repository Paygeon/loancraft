'use client';
// Import Types
import { Category } from '@/types';
// Import External Packages
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// Import Components
import SocialFollowBar from '@/components/SocialFollowBar';
import { ScrollArea } from '@/ui/ScrollArea';
import { Badge } from '@/ui/Badge';
// Import Functions & Actions & Hooks & State
import { capitalize, cn } from '@/lib/utils';
// Import Data
import {
	createTagsRegistry,
	getFilteredProducts,
	numberOfProductsInCategory,
} from '@/lib/registry';
// Import Assets & Icons

type CategoryPageProps = {
	params: {
		category: Category;
		urlPrePath?: string;
	};
	className?: string;
};

/**
 * Renders a bar with links to products and tags for a specific category.
 *
 * @param params - The category page parameters.
 * @param className - The additional CSS class name for the component.
 * @returns The rendered component.
 */
export default function LinksToProductsBar({
	params,
	className,
}: CategoryPageProps) {
	const productsInCategory = getFilteredProducts(params.category);
	const tagRegistry = createTagsRegistry(params.category);
	const searchParams = useSearchParams();
	const searchTag = searchParams.get('tag');

	const numProducts = numberOfProductsInCategory(params.category) || 0;

	return (
		<div
			className={cn(
				'hidden lg:block sticky top-[180px] min-w-48 lg:min-w-64 px-4 lg:px-0 dark:text-white',
				className
			)}
		>
			<h3 className="font-semibold text-lg dark:text-white">
				Follow for updates
			</h3>
			<SocialFollowBar
				direction="vertical"
				size="lg"
				className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
			/>

			<ScrollArea className="h-[70svh] w-full">
				<div className="py-4">
					<h3 className="text-base font-semibold py-4">Quick Links</h3>
					<div className="grid grid-flow-row space-y-1">
						{productsInCategory?.map((product) => (
							<Link
								key={product.componentName}
								href={`${params.urlPrePath || ''}/${params.category}/${product.slug}`}
								className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
							>
								{product.componentName}
							</Link>
						))}

						<h3 className="text-2xl lg:text-base font-semibold py-4">
							Filter by Tags
						</h3>
						<Link
							href={`${params.urlPrePath || ''}/${params.category}`}
							className="group inline-flex justify-between text-sm text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out pr-3"
						>
							<h4 className="text-sm py-1">Show All</h4>
							<Badge variant={searchTag ? 'tinySecondary' : 'tinyPrimary'}>
								{`${numProducts} `}
								<span className="hidden xl:inline-flex xl:ml-1">
									{numProducts === 1 ? 'item' : 'items'}
								</span>
							</Badge>
						</Link>
						{Object.keys(tagRegistry).map((tag) => (
							<Link
								key={tag}
								href={`${params.urlPrePath || ''}/${params.category}?tag=${encodeURIComponent(tag)}`}
								className="group inline-flex justify-between text-sm text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out pr-3"
							>
								<h4 className="text-sm py-1 whitespace-nowrap">
									{capitalize(tag)}
								</h4>
								<Badge
									variant={searchTag != tag ? 'tinySecondary' : 'tinyPrimary'}
								>
									{`${tagRegistry[tag]?.length || 0} `}
									<span className="hidden xl:inline-flex xl:ml-1">
										{tagRegistry[tag]?.length === 1 ? 'item' : 'items'}
									</span>
								</Badge>
							</Link>
						))}
					</div>
				</div>
			</ScrollArea>
		</div>
	);
}
