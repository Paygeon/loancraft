// Import Types
// Import External Packages
import Link from 'next/link';
// Import Components
import { buttonVariants } from '@/ui/Button';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

type SectionBreakerProps = {
	title?: string;
	description?: string;
	linkHref?: string;
	linkCTA?: string;
	className?: string;
};

/**
 * Renders a section breaker component, with a title, a description, and optionally a button link.
 *
 * @param title - The title of the section breaker.
 * @param description - The description of the section breaker.
 * @param linkHref - The link href of the section breaker.
 * @param linkCTA The link CTA (call-to-action) of the section breaker.
 * @param className - The additional CSS class name for the section breaker.
 * @returns The rendered section breaker component.
 */
export default function BreakerSimple({
	title = 'Fun Fact',
	description = 'There are a lot of buttons in the world!!',
	linkHref,
	linkCTA,
	className,
}: SectionBreakerProps) {
	return (
		<div className="mx-auto w-full my-4">
			<div
				className={cn(
					'relative isolate overflow-hidden bg-muted dark:bg-black dark:border-b dark:border-t dark:text-white px-6 py-16 text-center',
					className
				)}
			>
				<div className="max-w-5xl mx-auto">
					<h2 className="mx-auto max-w-2xl text-2xl font-bold">{title}</h2>
					<p className="mx-auto mt-6 max-w-2xl text-lg">{description}</p>
					{linkHref && linkCTA && (
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href={linkHref}
								className={cn(
									buttonVariants({ variant: 'default' }),
									'mx-auto text-xl font-semibold'
								)}
							>
								{linkCTA}
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
