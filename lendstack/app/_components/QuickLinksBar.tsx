// Import Types
import { ProductMeta } from '@/types';
// Import External Packages
import Link from 'next/link';
// Import Components
import SocialShareBar from '@/components/SocialShareBar';
import { buttonVariants } from '@/ui/Button';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
import { COMPANY_WEBSITE_URL } from '@/constants';
// Import Assets & Icons

/**
 * Renders the QuickLinksBar component.
 *
 * @param productMeta - The product metadata.
 * @param className - The optional CSS class name.
 * @returns The rendered QuickLinksBar component.
 */
export default function QuickLinksBar({
	productMeta,
	className,
}: {
	productMeta: ProductMeta;
	className?: string;
}) {
	return (
		<div className={cn('flex flex-wrap gap-4 py-4 dark:text-white', className)}>
			<Link
				href={`#Preview`}
				className={cn(buttonVariants({ variant: 'outline' }))}
			>
				See In Action
			</Link>

			<Link href="#Docs" className={cn(buttonVariants({ variant: 'outline' }))}>
				Get Code
			</Link>

			<Link
				href={`#Tech-Stack`}
				className={cn(buttonVariants({ variant: 'outline' }))}
			>
				Tech Stack
			</Link>
			<Link
				href={`#Example-Usage`}
				className={cn(buttonVariants({ variant: 'outline' }))}
			>
				Example Usages
			</Link>
			<Link
				href={`#faq`}
				className={cn(buttonVariants({ variant: 'outline' }))}
			>
				FAQ
			</Link>

			<Link
				href={`/license#${productMeta.license || 'Standard'}`}
				className={cn(buttonVariants({ variant: 'outline' }))}
			>
				{productMeta.license || 'Standard'} License
			</Link>
			<SocialShareBar
				title=""
				size="lg"
				currentSiteLink={`${COMPANY_WEBSITE_URL}/${productMeta.category}/${productMeta.slug}`}
			/>
		</div>
	);
}
