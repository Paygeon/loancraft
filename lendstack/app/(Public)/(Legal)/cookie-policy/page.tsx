// Import Types
import { Metadata } from 'next';
// Import External Packages
// Import Components
import {
	SectionOuterContainer,
	SectionTitle,
	SectionDescription,
	SubSectionOuterContainer,
	SubSectionInnerContainer,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
import { COMPANY_NAME } from '@/constants';
// Import Assets & Icons

export const metadata: Metadata = {
	title: `Cookie Policy | ${COMPANY_NAME} `,
	description: `Cookie Policy by ${COMPANY_NAME}.`,
};

export default function CookiePolicyPage() {
	return (
		<SectionOuterContainer id="Cookie Policy" className="prose">
			<SectionTitle>Cookie Policy</SectionTitle>
			<SectionDescription>Last updated March 0, 2999</SectionDescription>
			<SubSectionOuterContainer className="max-w-3xl py-0">
				<SubSectionInnerContainer className="items-start py-0">
					<p className="text-black dark:text-zinc-200">Hmmmmmmm, Cookies...</p>
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
		</SectionOuterContainer>
	);
}
