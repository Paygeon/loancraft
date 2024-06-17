// Import Types
import { Feature } from '@/types';
// Import External Packages
import Link from 'next/link';
// Import Components
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

/**
 * Renders a section breaker component with rows of (3) features (name, description, href).
 *
 * @param features - An array of features to display in the section.
 * @param className - Optional CSS class name for the section.
 * @returns The rendered feature section component.
 */
export default function Breaker_SM_3Features({
	features,
	className,
}: {
	features: Feature[];
	className?: string;
}) {
	return (
		<div className={cn('border border-gray-200', className)}>
			<div className="mx-auto max-w-7xl lg:px-8">
				<ul
					role="list"
					className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 lg:divide-x lg:divide-y-0"
				>
					{features.map((feature) => (
						<li key={feature.title} className="flex flex-col">
							{feature.href ? (
								<Link
									href={feature.href}
									className="relative flex flex-1 flex-col justify-center px-4 py-6 text-center focus:z-10"
								>
									<p className="text-sm text-gray-500">{feature.title}</p>
									<p className="font-semibold text-gray-900">
										{feature.description}
									</p>
								</Link>
							) : (
								<div className="relative flex flex-1 flex-col justify-center dark:text-white px-4 py-6 text-center focus:z-10">
									<p className="text-sm text-gray-500 dark:text-zinc-300">
										{feature.title}
									</p>
									<p className="font-semibold text-gray-900 dark:text-zinc-100">
										{feature.description}
									</p>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
