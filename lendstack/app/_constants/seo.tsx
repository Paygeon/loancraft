// Import Types
import { Metadata } from 'next';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
import {
	COMPANY_META_DESCRIPTION,
	COMPANY_META_TITLE,
	COMPANY_NAME,
	COMPANY_SUPPORT_EMAIL,
	COMPANY_TAGS,
	COMPANY_WEBSITE_URL,
	CREATOR_LINK,
	SOCIAL_FOLLOW_LINKS,
} from '@/constants';
// Import Assets & Icons

export const METADATA_FULL: Metadata = {
	title: COMPANY_META_TITLE,
	description: COMPANY_META_DESCRIPTION,
	metadataBase: new URL(COMPANY_WEBSITE_URL),
	keywords: COMPANY_TAGS,
	openGraph: {
		url: COMPANY_WEBSITE_URL,
		emails: COMPANY_SUPPORT_EMAIL,
		siteName: COMPANY_NAME,
		title: COMPANY_META_TITLE,
		description: COMPANY_META_DESCRIPTION,
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: `${COMPANY_WEBSITE_URL}/img/Social Banner1200x630.png`,
				type: 'image',
				alt: `${COMPANY_NAME} Social Banner 1200x630`,
				width: 1200,
				height: 630,
			},
			{
				url: `${COMPANY_WEBSITE_URL}/img/Thumbnail1080x1080.png`,
				type: 'image',
				alt: `${COMPANY_NAME} Thumbnail 1080x1080`,
				width: 1080,
				height: 1080,
			},
			{
				url: `${COMPANY_WEBSITE_URL}/img/Social Banner1600x900.png`,
				type: 'image',
				alt: `${COMPANY_NAME} Social Banner 1600x900`,
				width: 1600,
				height: 900,
			},
		],
	},
	twitter: {
		site: SOCIAL_FOLLOW_LINKS[0].username,
		card: 'summary_large_image',
		creator: CREATOR_LINK.creatorXHandle,
		description: COMPANY_META_DESCRIPTION,
		title: COMPANY_META_TITLE,
		images: `${COMPANY_WEBSITE_URL}/img/Social Banner1600x900.png`,
	},
};
