// Import Types
import {
	CategoryDesc,
	FAQ_PAIR,
	LinkListItem,
	SocialFollowLinkObject,
	SocialShareLinkObject,
} from '@/types';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
import { capitalize } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import { Icons } from '@/ui/Icons';

// START HERE WITH ANSWERING THE 20 QUESTIONS TO FULLY MAKE THIS TEMPLATE YOURS!

// Who are you?
/*
Example: {
	creatorName: 'Your Name',
	creatorHref: 'https://YourPersonalWebsite.com' or 'https://YourLinkedInProfile.com' or 'https://YourFacebookProfile.com' or 'https://YourXProfile.com',
	creatorXHandle: '@username',
};
*/

export const CREATOR_LINK = {
	creatorName: 'Vashon Gonzales',
	creatorHref: 'https://loancraft.club',
	creatorXHandle: '@VashonG',
};

// When was your company founded?
// Example: '2024'

export const YEAR_OF_CREATION = '2024';

// What is the name of your company?
// Example: 'financechest'

export const COMPANY_NAME = 'Finance Chest';

// What is the full domain of your company?
// Example: 'https://financechest.io'

export const COMPANY_WEBSITE_URL = 'https://financechest.io';

// What is your support email?
// Example: 'support@financechest.io'

export const COMPANY_SUPPORT_EMAIL = 'support@financechest.io';

// What is a short description of your company?
// (Title = max 60 characters; Description = max 160 characters; Tags = max 5)
/* Examples
	Title: 'The best Vite boilerplates and components for your next project.' 
	Description: 'The best Vite boilerplates and components for your next project. Save time and money with our solutions'
	Tags: ['vite', 'templates']
 */
export const COMPANY_META_TITLE =
	'Finance Chest - Open Source fintech components';

export const COMPANY_META_DESCRIPTION =
	'Beautifully crafted fintech components.';

export const COMPANY_TAGS = ['fintech', 'components', 'widget'];

// What are the Social Media Links you want to display?

export const SOCIAL_FOLLOW_LINKS: SocialFollowLinkObject[] = [
	{
		channelName: 'X',
		channelHref: 'https://twitter.com/financechest',
		username: '@financechest',
		Icon: Icons.X,
	},
];

// Do you have a Parent Company or Holding Company under which you operate this website? If not, leave each key as "".
/* 
Example: {
	parentCompanyName: 'The Example Company',
	parentCompanyHref: 'https://example.com',
	parentCompanyAddress: 'Example Street 123, 12345 Example City, Example Country',
};
*/

export const PARENT_COMPANY_LINK = {
	parentCompanyName: 'Finance Chest',
	parentCompanyHref: 'https://financechest.io',
	parentCompanyAddress: '1111B S Governors Ave, 6469, Dover, DE 19904',
};

// What Product Categories are you selling?
// Example: ['buttons']

export const CATEGORIES = ['components', 'fintech'] as const;

// Before you continue with the next questions, please make sure you have created a at least one product in each category you are selling.
// For starters, it is enough to create a folder in the `app/_products` folder with the name of the category, e.g. `app/_products/buttons`.

// What are the descriptions of each Product Category you are selling? The slug needs to match one categories in CATEGORIES.

export const CATEGORIES_DESC: CategoryDesc[] = [
	{
		name: 'Components',
		slug: 'components',
		description:
			'Done for you fintech components.',
		addTextToProductPage: '',
		href: '#components',
	},
	{
		name: 'Fintech',
		slug: 'fintech',
		description:
			'Open source fintech projects.',
		addTextToProductPage: '',
		href: '#fintech',
	},
];

// What are additional links you want to show in the Navbar - besides links to your Product Categories?

export const NAVBAR_ADD_LINKS = [
	{ name: 'About', 
	  slug: 'about' 
	},
];

// What are the categories and links you want to show in the Footer?

export const FOOTER_NAVIGATION_LINKS: { [key: string]: LinkListItem[] } = {
	products: CATEGORIES.map((category) => {
		return { label: capitalize(category), href: `/${category}` };
	}),
	legal: [
		{ label: 'Terms', href: '/terms' },
		{ label: 'Privacy', href: '/privacy-policy' },
		{ label: 'Cookies', href: '/cookie-policy' },
		{ label: 'License', href: '/license' },
	],
};

// What are disclaimers you want to show in the Footer?

export const FOOTER_DISCLAIMERS: string[] = [
	'Disclaimer: This marketplace provides components and API connections to various fintech services. Users are responsible for linking their own API keys from the respective service providers. We do not offer the services themselves, only the connections and components. The components on this marketplace are provided "as-is" without warranties of any kind. Use them at your own risk. We are not liable for any damages or losses resulting from the use of these components.',
];

// What is the slogan you want to show in the Footer?

export const FOOTER_SLOGAN: string =
	'Jumpstart your idea-to-fintech journey with best in class financial components.';

// What are the external links you want to show in the Footer?

export const FOOTER_EXTERNAL_LINK_LIST: LinkListItem[] = [
	{
		label: 'Rewards for paying your invoices @ parliamint.club',
		href: 'https://parliamint.club',
	},
	{
		label: 'Embedded Lending @ Coming Soon',
		href: '#',
	},
	{
		label: 'Fintech Startup Deals @ Coming Soon',
		href: '#',
	},
];

// What are the FAQs you want to show on the front page?

export const GENERAL_FAQS: FAQ_PAIR[] = [
	{
		question: 'What makes Finance Chest components better than others?',
		answer:
			'Components made by Finance Chest come pre-built with multiple API integrations making developmnent and launch much more quicker. Simply paste the compatible 3rd party API key into your secret variables to add functionality to your component.',
	},
	{
		question: 'Can I further customize the code?',
		answer:
			'Yes, all components were developed with scalability in mind.',
	},
	{
		question: 'Are all components Free?',
		answer:
			'Yes, all components use the MIT license and are free to use. You can download them and use them in your projects without any restrictions.',
	},
];

// What are the Social Media Share Options you want to provide?
// FYI: Facebook does not allow pre-filled text in the share dialog. You can only provide the URL.

export const SOCIAL_SHARE_LINKS: SocialShareLinkObject[] = [
	{
		channelName: 'facebook',
		channelHref: 'https://www.facebook.com/sharer/sharer.php?u=',
		Icon: Icons.Facebook,
		shareTextInFrontOfURL: '',
	},
	{
		channelName: 'X',
		channelHref: 'https://twitter.com/intent/tweet?text=',
		Icon: Icons.X,
		shareTextInFrontOfURL: 'I found this on The Button Company: ',
	},
];
