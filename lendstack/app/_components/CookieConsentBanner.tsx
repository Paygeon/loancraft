'use client';

// Import Types
// Import External Packages
import { useState, useEffect } from 'react';
import Link from 'next/link';
// Import Components
import { Button, ButtonProps } from '@/ui/Button';
// Import Functions & Actions & Hooks & State
import { useCookieConsent } from '@/state/useCookieConsent';
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import { CookieIcon } from 'lucide-react';

export function CookieConsentButton_Accept({
	buttonText = 'Accept',
	variant = 'default',
	className,
}: {
	buttonText?: string;
	variant?: ButtonProps['variant'];
	className?: string;
}) {
	const { acceptCookies } = useCookieConsent();

	return (
		<Button variant={variant} onClick={acceptCookies} className={cn(className)}>
			{buttonText}
		</Button>
	);
}

export function CookieConsentButton_Deny({
	buttonText = 'Deny',
	variant = 'secondary',
	className,
}: {
	buttonText?: string;
	variant?: ButtonProps['variant'];
	className?: string;
}) {
	const { denyCookies } = useCookieConsent();

	return (
		<Button variant={variant} onClick={denyCookies} className={cn(className)}>
			{buttonText}
		</Button>
	);
}

/**
 * Renders a cookie consent banner component.
 * The banner is displayed to users who have not yet given their consent to use cookies, and only appears after first scroll.
 */
export default function CookieConsentBanner() {
	const { hasCookieConsent } = useCookieConsent();
	const [showOnScroll, setShowOnScroll] = useState(false);

	useEffect(() => {
		const handleFirstScroll = () => {
			setShowOnScroll(true);
			window.removeEventListener('scroll', handleFirstScroll);
		};

		if (hasCookieConsent === null) {
			window.addEventListener('scroll', handleFirstScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleFirstScroll);
		};
	}, [hasCookieConsent]);

	if (hasCookieConsent !== null || !showOnScroll) return null;

	return (
		<div className="fixed left-6 bottom-6 shadow-lg shadow-neutral-500 z-50 max-w-96 bg-white dark:bg-dark-gray dark:text-white p-4 rounded-md">
			<h2 className="text-lg font-semibold inline-flex leading-6 py-2">
				Heads up! <CookieIcon className="mx-2" />
			</h2>
			<p className="text-muted-foreground">
				We use cookies to enhance the functionality of this website in order to
				give you the best experience. Cool?
			</p>
			<p className="py-2 text-muted-foreground">
				Learn more in our
				<Link
					href="/privacy-policy"
					className="underline whitespace-nowrap px-2"
				>
					Privacy Policy
				</Link>{' '}
				and our
				<Link
					href="/cookie-policy"
					className="underline whitespace-nowrap px-2"
				>
					Cookie Policy
				</Link>
			</p>
			<div className="grid justify-items-end">
				<div className="space-x-2">
					<CookieConsentButton_Deny />
					<CookieConsentButton_Accept />
				</div>
			</div>
		</div>
	);
}
