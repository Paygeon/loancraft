// Purpose: Define types for the app

import { CATEGORIES } from '@/constants';

export type Category = (typeof CATEGORIES)[number];

export type Feature = {
	title: string;
	description: string;
	href?: string;
};

export type CategoryDesc = {
	name: string;
	slug: Category;
	description: string;
	href: string;
	addTextToProductPage?: string;
	badge?: string;
};

export type FAQ_PAIR = {
	question: string;
	answer: string;
};

export type ProductMetaExample = {
	nameOfPage: string;
	urlToPage: string;
	descriptionOfUsage: string;
	imgageSrcOfUsage: string;
};

export type ProductMetaLinks = { linkText: string; linkUrl: string };

export type ProductMeta = {
	componentName: string;
	category: string;
	slug: string;
	shortDescription: string;
	longDescription: string | undefined | null;
	hasImage: boolean | undefined | null;
	imageUrl?: string | undefined | null;
	imageAlt?: string | undefined | null;
	hasComponentCode: boolean | undefined | null;
	tags: string[] | undefined | null;
	techStack: string[] | undefined | null;
	examples?: ProductMetaExample[] | undefined | null;
	faq?: FAQ_PAIR[] | undefined | null;
	metaDescription?: string | undefined | null;
	metaTitle?: string | undefined | null;
	license?: 'MIT' | 'Standard' | string | undefined | null;
};

export type ProductRegistry = {
	[key in Category]?: ProductMeta[];
};

export type TechStackObject = {
	techStackName: string;
	techStackDescription: string;
	techStackCategory: string;
	techStackURL: string;
	techStackAffieliateURL?: string;
	TechStackSVGComponent: React.ElementType;
};

export type SocialShareLinkObject = {
	channelName: string;
	channelHref: string;
	shareTextInFrontOfURL: string;
	Icon: React.ElementType;
};

export type SocialFollowLinkObject = {
	channelName: string;
	channelHref: string;
	username: string;
	Icon: React.ElementType;
};

export type LinkListItem = {
	href: string;
	label: string;
};
