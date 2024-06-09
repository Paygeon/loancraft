// Purpose: Example Page to show how you can add a new page to the app

// Import Types
// Import External Packages
// Import Components
import Breadcrumps from '@/ui/Breadcrumps';
import {
	SectionOuterContainer,
	SectionTitle,
	SectionDescription,
	SubSectionOuterContainer,
	SubSectionInnerContainer,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

export default async function AboutPage() {
	return (
		<SectionOuterContainer className="max-w-2xl">
			<Breadcrumps />
			<SectionTitle>About Us</SectionTitle>
			<SectionDescription>We love buttons</SectionDescription>
			<SubSectionOuterContainer>
				<SubSectionInnerContainer>
					<h2 className="text-lg font-semibold dark:text-white">
						Example About Page
					</h2>
					<p className="py-2 dark:text-white">
						This is an example page to show you how you can easily add a page to
						your new app!
					</p>
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
		</SectionOuterContainer>
	);
}
