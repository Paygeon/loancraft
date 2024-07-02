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
	title: `Privacy Policy | ${COMPANY_NAME} `,
	description: `Privacy Policy by ${COMPANY_NAME}.`,
	robots: 'noindex,nofollow',
};

export default function PrivacyPolicyPage() {
	return (
		<SectionOuterContainer id="Privacy Policy">
			<SectionTitle>Privacy Policy</SectionTitle>
			<SectionDescription>Last updated March 6, 2024</SectionDescription>
			<SubSectionOuterContainer className="max-w-3xl">
				<SubSectionInnerContainer className="items-start prose">
					<p>
						Welcome to THE BUTTON COMPANY, the premier destination for crafting
						the most exquisite, clickable marvels on the internet - from the
						magnificent &quot;Submit&quot; to the ever-joyous &quot;Like&quot;
						button. Our Privacy Policy is as unique as our buttons, ensuring a
						blend of confidentiality and humor that&apos;s as rare as a unicorn
						trotting down Broadway.
					</p>

					<h2>1. Introduction to Our Buttoned Up Privacy Approach</h2>
					<p>
						Here at THE BUTTON COMPANY, we take your privacy as seriously as we
						take our coffee - with a dash of sugar, two spoons of laughter, and
						a slice of lime. Strange? Absolutely. Effective? Definitely not. But
						it makes for a great story.
					</p>

					<h2>2. Collection of Data: A Whimsical Tale</h2>
					<p>
						Whenever you press one of our buttons, we collect an assortment of
						data as eclectic as grandma&apos;s attic. This may include your
						click preferences, the angle of your click, the existential dread
						felt before clicking, and your favorite pizza toppings. Why? Because
						we&apos;re curious, and honestly, we&apos;re still trying to figure
						out the perfect click.
					</p>

					<h2>3. Use of Personal Data: For Science, Obviously</h2>
					<p>
						The personal data we collect is strictly used for
						&apos;scientific&apos; purposes. These include, but are not limited
						to, understanding if people prefer clicking with their index finger
						or their nose, and whether the moon&apos;s phase affects
						click-through rates.
					</p>

					<h2>4. Sharing Your Data: With Aliens, Perhaps?</h2>
					<p>
						We solemnly swear not to share your data with anyone, except maybe
						with extraterrestrial beings, if they ask nicely. We&apos;ve heard
						they&apos;re quite interested in human clicking behavior. They
						promise to use this for peaceful purposes - like deciding the fate
						of the universe with a massive, cosmic &quot;Like&quot; button.
					</p>

					<h2>5. Cookie Policy: Yes, We Mean Actual Cookies</h2>
					<p>
						Here at THE BUTTON COMPANY, our cookies policy doesn&apos;t involve
						tracking; instead, it&apos;s about actual cookies. Every time you
						visit our site, imagine we&apos;re sending you virtual cookies.
						Chocolate chip, macadamia nut, or even oatmeal raisin - pick your
						poison. Unfortunately, these cookies are not edible. We&apos;re
						still working on that technology.
					</p>

					<h2>6. Amendments as Unpredictable as a Cat&apos;s Behavior</h2>
					<p>
						Our Privacy Policy may change as often as a cat&apos;s mood swings.
						One day we&apos;re all about data privacy, the next, we might just
						dedicate ourselves to spreading the gospel of intergalactic click
						diplomacy. We recommend checking back, but honestly, it&apos;s like
						reading a different genre of fiction each time.
					</p>

					<p>
						In conclusion, while this Privacy Policy is about as reliable as a
						chocolate teapot, we at TheButtonBakery cherish your trust and
						engagement. Remember, each click is a step towards unraveling the
						mysteries of the universe, or at least, providing a good chuckle.
					</p>
					<p>
						This document is intended for humorous purposes and should not be
						taken as legal advice or an actual privacy policy. Always consult
						with a professional for your privacy policy needs.
					</p>
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
		</SectionOuterContainer>
	);
}