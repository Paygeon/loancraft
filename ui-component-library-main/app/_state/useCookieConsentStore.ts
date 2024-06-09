// Purpose: Store for managing the cookie consent

// Import Types
// Import External Packages
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

interface CookieConsentState {
	hasCookieConsent: boolean | null;
	setCookieConsent: (hasConsent: boolean | null) => void;
}

export const useCookieConsentStore = create(
	persist<CookieConsentState>(
		(set) => ({
			hasCookieConsent: null,
			setCookieConsent: (hasCookieConsent: boolean | null) =>
				set({ hasCookieConsent }),
		}),
		{
			name: 'cookie-consent',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
