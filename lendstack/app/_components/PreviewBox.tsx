// Import Types
import { ComponentType } from 'react';
// Import External Packages
import dynamic from 'next/dynamic';
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { backgroundPattern } from '@/lib/utils';
// Import Data
// Import Assets & Icons

/**
 * Imports a component dynamically based on the provided category and componentSlug from the app/_products folder .
 * @param category - The category of the component.
 * @param componentSlug - The name of the dynamic component to render inside the preview box.
 * @returns The imported component OR "Component not found!".
 */
const importComponentByComponentSlug = (
	category: string,
	componentSlug: string
): ComponentType<any> => {
	return dynamic(
		() =>
			import(`app/_products/${category}/${componentSlug}/${componentSlug}.tsx`)
				.then((mod) => mod.default as ComponentType<any>)
				.catch(() => {
					const NotFoundComponent: ComponentType<any> = () => (
						<div className="grid">
							<div>Component not found!</div>
							<div>Category: {category}</div>
							<div>ComponentSlug: {componentSlug}</div>
						</div>
					);
					NotFoundComponent.displayName = 'NotFoundComponent';
					return NotFoundComponent;
				}),
		{
			ssr: true,
			loading: () => <p>Loading...</p>,
		}
	);
};

type CodeBlockProps = {
	className?: string;
	title?: string;
	description?: string;
	componentSlug: string;
	category: string;
};

/**
 * Renders a preview box component based on a provided componentName.
 * MAKE SURE THAT THIS COMPONENT EXISTS in app/_producs/.
 *
 * @param className - The CSS class name for the preview box.
 * @param title - The title of the preview box.
 * @param description - The description of the preview box.
 * @param componentSlug - The name of the dynamic component to render inside the preview box.
 * @returns The rendered preview box component.
 */
export default function PreviewBox({
	className,
	title = 'Preview',
	description = 'This is how the code looks like in action.',
	componentSlug,
	category,
}: CodeBlockProps) {
	const DynamicComponent = importComponentByComponentSlug(
		category,
		componentSlug
	);

	return (
		<SubSectionOuterContainer id={title} className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
			<SubSectionInnerContainer>
				<div
					className="flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center border border-black/20 shadow-inner shadow-black"
					style={{ backgroundImage: backgroundPattern('boxes-sm') }}
				>
					<DynamicComponent />
				</div>
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
