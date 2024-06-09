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
	title: `Terms and Conditions | ${COMPANY_NAME} `,
	description: `Terms and Conditions by ${COMPANY_NAME}.`,
	robots: 'noindex,nofollow',
};

export default function TermsPage() {
	return (
		<SectionOuterContainer id="ToS">
			<SectionTitle>THE BUTTON COMPANY&apos;s Terms & Conditions</SectionTitle>
			<SectionDescription>Last updated March 0, 2999</SectionDescription>
			<SubSectionOuterContainer className="max-w-3xl">
				<SubSectionInnerContainer className="items-start prose">
					<p>
						Welcome to THE BUTTON COMPANY, where we knead the code and bake the
						pixels to perfection to serve you the most delightful online buttons
						- like, submit, and everything in between. By using our buttons, you
						agree to be bound by these Terms and Conditions, which are as unique
						as our recipe for the perfect clickable.
					</p>

					<h2>1. Acceptance of the Absurd:</h2>
					<p>
						By engaging with our buttons, you understand that they are crafted
						in a kitchen where code and pixels are mixed in equal measure,
						ensuring each button is both functional and delicious. You accept
						that any resemblance to real buttons, living or clicked, is purely
						coincidental and entirely hilarious.
					</p>

					<h2>2. Button Usage:</h2>
					<p>
						Feel free to click, tap, or even double-click, but please, no
						licking the screen. Our buttons are zero-calorie and not suitable
						for consumption, regardless of how tempting they may look.
					</p>

					<h2>3. Button Customization:</h2>
					<p>
						Should you wish for a button that sings &apos;Happy Birthday&apos;
						or recites Shakespeare upon being clicked, please note that our
						bakers are not responsible for any cacophony or spontaneous
						theatrical performances that may ensue.
					</p>

					<h2>4. Forbidden Dough:</h2>
					<p>
						Copying, redistributing, or attempting to reverse-engineer our
						buttons is strictly prohibited. Remember, our recipes are secret,
						and our dough is copyrighted. Unauthorized use may result in being
						pelted with virtual breadcrumbs or banned from the bakery.
					</p>

					<h2>5. Liability for Crumbs:</h2>
					<p>
						THE BUTTON COMPANY is not responsible for any crumbs or digital
						residue left behind by excessive button clicking. We recommend using
						a virtual napkin for a cleaner experience.
					</p>

					<h2>6. Updates to Terms:</h2>
					<p>
						Our terms, like our recipes, may change depending on the season or
						our bakers&apos; whims. Any significant changes will be announced
						with the ringing of a tiny, adorable bell, so listen closely.
					</p>

					<h2>7. Governing Law:</h2>
					<p>
						These Terms are governed by the laws of the Land of Make-Believe,
						where disputes are settled by a council of wise old owls and the
						occasional cat jury.
					</p>

					<p>
						By continuing to use our buttons, you confirm that you have read,
						understood, and agreed to these Terms & Conditions, no matter how
						nonsensical they may seem. After all, in the world of THE BUTTON
						COMPANY, sense is just another ingredient in our delightful
						confectionery.
					</p>

					<p>Happy clicking!</p>
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
		</SectionOuterContainer>
	);
}
