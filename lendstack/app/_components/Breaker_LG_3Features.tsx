// Import Types
// Import External Packages
import Link from 'next/link';
// Import Components
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

type Feature = {
	name: string;
	description: string;
	href: string;
};

/**
 * Renders a section breaker component, with a title, a subtitle, a description, and row of (3) features (name, description, href).
 *
 * @param features - An array of features to display in the section.
 * @param className - Optional CSS class name for the section.
 * @param title - Optional title for the section.
 * @param subTitle - Optional subtitle for the section.
 * @param description - Optional description for the section.
 * @returns The rendered feature section component.
 */
export default function Breaker_LG_3Features({
	features,
	className,
	title = 'Do you want to submit to the marketplace?',
	subTitle = 'Submission Guidelines',
	description = 'Some Actual Description Here.',
}: {
	features: Feature[];
	className?: string;
	title?: string;
	subTitle?: string;
	description?: string;
}) {
	return (
		<div
			className={cn(
				'w-full mx-auto px-12 py-16 dark:bg-black  dark:border-b dark:border-t dark:border-gray-100 dark:text-white',
				className
			)}
		>
			<div className="max-w-7xl mx-auto">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-base font-semibold leading-7 text-primary">
						{title}
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
						{subTitle}
					</p>
					<p className="text-sm italic mt-2 max-w-2xl mx-auto">
					  Welcome to the Finance Chest Marketplace! To maintain the highest quality and ensure a seamless experience for all users, please follow these submission guidelines carefully.
					</p>

<h2 className="text-5xl mt-4 max-w-2xl mx-auto"></h2>

				</div>
				<div className="mx-auto mt-12">
					<div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
						{features.length > 1 &&
							features.map((feature) => (
								<div key={feature.name} className="flex flex-col text-center">
									<div className="mx-auto font-semibold text-xl leading-9 text-center">
										{feature.name}
									</div>
									<div className="mt-4 flex flex-auto flex-col text-base leading-7">
										<p className="text-justify line-clamp-4">
											{feature.description}
										</p>
										<p className="mt-6">
											<Link
												href={feature.href}
												className="text-sm font-semibold underline"
											>
												Show me all {feature.name}
											</Link>
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
