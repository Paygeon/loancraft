// Import Types
// Import External Packages
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

/**
 * Renders a section breaker component, with a title and a description.
 *
 * @param title - The title of the section breaker.
 * @param description - The description of the section breaker.
 * @param className - The additional CSS class name for the section breaker.
 * @returns The rendered section breaker component.
 */
export default function BreakerSection({
	title = 'Description',
	description = 'Not really a breaker but a section with a regular title and a regular description like other sections but no body.',
	className,
}: {
	title?: string;
	description?: string;
	className?: string;
}) {
	return (
		<SubSectionOuterContainer id={title} className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
		</SubSectionOuterContainer>
	);
}
