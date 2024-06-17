// Purpose: Custom hook to manage cookie consent

// Import Types
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
import { useCookieConsentStore } from '@/state/useCookieConsentStore';
// Import Data
// Import Assets & Icons

export function useCookieConsent() {
	const { hasCookieConsent, setCookieConsent } = useCookieConsentStore();

	const acceptCookies = () => setCookieConsent(true);
	const denyCookies = () => setCookieConsent(false);
	const resetCookies = () => setCookieConsent(null);

	return {
		hasCookieConsent,
		acceptCookies,
		denyCookies,
		resetCookies,
	};
}
