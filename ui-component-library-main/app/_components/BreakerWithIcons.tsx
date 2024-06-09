// Import Types
// Import External Packages
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import {
	BarChart3Icon,
	Code2Icon,
	CodeIcon,
	ComponentIcon,
	DatabaseIcon,
	DatabaseZapIcon,
	DollarSignIcon,
	FileLockIcon,
	FingerprintIcon,
	Heading1Icon,
	LucideIcon,
	MailIcon,
	PyramidIcon,
	SwatchBookIcon,
	UploadCloudIcon,
} from 'lucide-react';

type Feature = {
	name: string;
	description: string;
	icon: LucideIcon;
};

const exampleFeatures: Feature[] = [
	{
		name: 'Next.js 14',
		description:
			'The new version is the best thing since sliced bread. App Router, Server Actions, and more!',
		icon: Code2Icon,
	},
	{
		name: 'React 18',
		description:
			'The latest version of the most popular frontend framework. Battle tested and ready to go.',
		icon: CodeIcon,
	},
	{
		name: 'shadcn/ui',
		description:
			'Beautifully designed UI components that are easy to use and customize. It is the best way to build your UI.',
		icon: ComponentIcon,
	},
	{
		name: 'TailwindCSS',
		description:
			'The most popular CSS framework. It is easy to use, well documented and has a great community.',
		icon: SwatchBookIcon,
	},
	{
		name: 'TypeScript',
		description:
			'TypeScript ensures that your code is always correct. It is the best way to write JavaScript.',
		icon: FileLockIcon,
	},
	{
		name: 'Framer Motion',
		description:
			'Frictionless motion design for the web. Create animations and interactions with an easy-to-use API.',
		icon: DatabaseZapIcon,
	},
];

/**
 * Renders a component that displays a breaker with icons.
 *
 * @param features - An array of features to display.
 * @param className - The CSS class name for the component.
 * @param title - The title of the breaker.
 * @param description - The description of the breaker.
 * @param iconCols - The number of columns for the icons grid.
 * @returns The rendered breaker component.
 */
export default function BreakerWithIcons({
	features = exampleFeatures,
	className,
	title = 'Tech Stack',
	description = 'Only the finest ingredients are used in our buttons.',
	iconCols = 3,
}: {
	features?: Feature[];
	className?: string;
	title?: string;
	description?: string;
	iconCols?: number;
}) {
	return (
		<SubSectionOuterContainer id={title} className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
			<SubSectionInnerContainer>
				<div
					className={cn(
						'mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 gap-16 text-base px-4',
						iconCols && `lg:grid-cols-${iconCols}`
					)}
				>
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-9 text-justify">
							<div className="dark:text-white font-semibold">
								<feature.icon
									className="absolute left-1 top-1 h-5 w-5 text-primary"
									aria-hidden="true"
								/>
								{feature.name}
							</div>
							<div className="text-muted-foreground">{feature.description}</div>
						</div>
					))}
				</div>
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
