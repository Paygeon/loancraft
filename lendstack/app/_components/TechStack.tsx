// Import Types
import { TechStackObject } from '@/types';
// Import External Packages
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
import Link from 'next/link';
import { TECH_STACK } from '../_constants/techstack';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

function TechStackCard({ techStack }: { techStack: TechStackObject }) {
	return (
		<div className="relative flex items-center shadow-md gap-x-4 p-3 border border-transparent rounded-lg transition-colors ease-in hover:border-neutral-400 dark:hover:border-neutral-500">
			<div className="w-12 h-12 flex text-black dark:text-white dark:fill-white dark:bg-black">
				<techStack.TechStackSVGComponent />
			</div>

			<div className="dark:text-white">
				<h3 className="font-semibold dark:text-white">
					{techStack.techStackName}
				</h3>
				<p className="text-sm line-clamp-2 py-1">
					{techStack.techStackDescription}
				</p>
				<p className="text-sm text-muted-foreground italic">
					{techStack.techStackCategory}
				</p>
			</div>
			{(techStack.techStackURL || techStack.techStackAffieliateURL) && (
				<Link
					href={techStack.techStackAffieliateURL || techStack.techStackURL}
					target="_blank"
				>
					<span aria-hidden="true" className="absolute inset-0" />
				</Link>
			)}
		</div>
	);
}

/**
 * Renders a section displaying the tech stack.
 * @param title - The title of the section. Default is 'Tech Stack'.
 * @param description - The description of the section. Default is 'Only the finest ingredients are used in our products...'.
 * @param techStackArray - An array of TechStack objects representing the technologies used.
 * @param className - The CSS class name for the section container.
 * @returns The rendered TechStackSection component.
 */
export default function TechStackSection({
	title = 'Tech Stack',
	description = 'Only the finest ingredients are used in our products. We made sure that we only use the best technologies available which offer a free tier! Yes, you read that right. Everything can be set up for USD 0. The only thing you will need is a domain name.',
	techStack,
	className,
}: {
	title?: string;
	description?: string;
	techStack: string[];
	className?: string;
}) {
	const usedTechStackObjects = techStack
		? TECH_STACK.filter((stackObject) =>
				techStack.includes(stackObject.techStackName)
			)
		: undefined;

	if (!usedTechStackObjects || usedTechStackObjects.length === 0) {
		return <></>;
	}

	return (
		<SubSectionOuterContainer id="Tech-Stack" className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
			<SubSectionInnerContainer>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 w-full">
					{usedTechStackObjects.map((techStack) => (
						<TechStackCard
							key={techStack.techStackName}
							techStack={techStack}
						/>
					))}
				</div>
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
