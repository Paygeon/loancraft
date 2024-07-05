'use client';

// Import Types
// Import External Packages
import Iframe from 'react-iframe';
import Link from 'next/link';
// Import Components
import { CookieConsentButton_Accept } from '@/components/CookieConsentBanner';
// Import Functions & Actions & Hooks & State
import { useCookieConsent } from '@/state/useCookieConsent';
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

/**
 * Renders a newsletter subscription box powered by BeeHiiv.
 *
 * @param size - The size of the newsletter box. Defaults to 'lg'.
 * @param className - Additional CSS class for the container element.
 * @param title - The title of the newsletter box. Defaults to 'Excited about buttons as we are?'.
 * @param description - The description of the newsletter box. Defaults to 'GGet the latest buttons and button news straight to your inbox.'.
 * @param disclaimer - The disclaimer text of the newsletter box. Defaults to 'Powered by Beehiiv.com. Unsubscribe at anytime by clicking the unsubscribe button in any email sent to you.'.
 * @param textForPrivacyPolicy - The text for the privacy policy link. Defaults to 'Read our privacy policy'.
 * @param linkToPrivacyPolicy - The URL of the privacy policy page. Defaults to '/privacy-policy'.
 * @returns The rendered newsletter subscription box.
 */
export default function NewsletterBox_BeeHiiv({
	size = 'lg',
	className,
	title = 'Want new components sent to you every week?',
	description = 'Get the latest components & fintech news straight to your inbox.',
	disclaimer = 'DISCLAIMER: We do NOT sell your information to 3rd parties. Unsubscribe at anytime by clicking the unsubscribe button in any email sent to you.',
	textForPrivacyPolicy = 'Read our privacy policy',
	linkToPrivacyPolicy = 'https://financechest.io/privacy-policy',
}: {
	size?: 'sm' | 'lg';
	className?: string;
	title?: string;
	description?: string;
	disclaimer?: string;
	textForPrivacyPolicy?: string;
	linkToPrivacyPolicy?: string;
}) {
	const { hasCookieConsent } = useCookieConsent();
	const beeHiivEmbedUrl = process.env.NEXT_PUBLIC_BEEHIIV_EMBED_URL;

	if (!beeHiivEmbedUrl) {
		return null;
	}

	/**
	 * Size=sm will render the NewsletterBox component with a small size, i.e. just the box.
	 */
	if (size === 'sm') {
		return (
			<div className={className}>
				{hasCookieConsent === true ? (
					<Iframe
						url={process.env.NEXT_PUBLIC_BEEHIIV_EMBED_URL as string}
						data-test-id="beehiiv-embed"
						height="52"
					/>
				) : (
					<CookieConsentButton_Accept buttonText="Accept Cookies to display" />
				)}
			</div>
		);
	}

	/**
	 * Size=lg will render the NewsletterBox component with a large size, with title, description and full disclaimer.
	 */
	return (
		<div className={cn('w-full dark:text-white py-8', className)}>
			<div className="py-16 text-center">
				<div className="mx-auto grid max-w-7xl px-6">
					<div className="m-auto max-w-4xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
						<h2 className="flex">{title}</h2>
					</div>
					<div className="mx-auto mt-2 w-full text-center">
						<p className="text-center text-lg font-bold ">{description}</p>
					</div>
					<p className="mt-2 text-center text-sm leading-6 max-w-lg mx-auto">
						{disclaimer}{' '}
						<Link
							href={linkToPrivacyPolicy}
							className="font-semibold underline"
						>
							{textForPrivacyPolicy}
						</Link>
					</p>
					<div className="m-auto mt-4 w-full max-w-lg">
						<div className="flex gap-x-4">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
						</div>
						{hasCookieConsent === true ? (
							<Iframe
								title="Newsletter Signup"
								url={process.env.NEXT_PUBLIC_BEEHIIV_EMBED_URL as string}
								data-test-id="beehiiv-embed"
								className="h-16 w-full"
							/>
						) : (
							<CookieConsentButton_Accept
								buttonText="Accept Cookies to display Newsletter Signup"
								className="h-16 w-full"
								variant="default"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
