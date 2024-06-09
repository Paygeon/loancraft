// Purpose: This file contains static tech stack data. If you want to use other, just add it here and the respective icon under @/ui/Icons. The parameter techStackName is what is being referenced in other components.

// Import Types
import { TechStackObject } from '@/types';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons
import { Icons } from '@/ui/Icons';

export const TECH_STACK: TechStackObject[] = [
	{
		techStackName: 'Next.js 14',
		techStackURL: 'https://nextjs.org/',
		techStackCategory: 'Frontend Framework',
		techStackDescription:
			'The new version is the best thing since sliced bread. App Router, Server Actions, and more!',
		TechStackSVGComponent: Icons.NextJs,
	},
	{
		techStackName: 'Lucide',
		techStackURL: 'https://lucide.dev',
		techStackCategory: 'Icons',
		techStackDescription: 'A simply beautiful icon library.',
		TechStackSVGComponent: Icons.Lucide,
	},
	{
		techStackName: 'Tailwind',
		techStackURL: 'https://tailwindcss.com/',
		techStackCategory: 'CSS Framework',
		techStackDescription:
			'The most popular CSS framework. It is easy to use, well documented and has a great community.',
		TechStackSVGComponent: Icons.Tailwind,
	},
	{
		techStackName: 'shadcn/ui',
		techStackURL: 'https://ui.shadcn.com/',
		techStackCategory: 'UI Library',
		techStackDescription: 'Beautifully designed open-source component library',
		TechStackSVGComponent: Icons.shadcn,
	},
	{
		techStackName: 'Clerk',
		techStackURL: 'https://clerk.com/',
		techStackCategory: 'Authentication',
		techStackDescription:
			'The most comprehensive User Management Platform for authentication and authorization.',
		TechStackSVGComponent: Icons.Clerk,
	},
	{
		techStackName: 'TypeScript',
		techStackURL: 'https://www.typescriptlang.org/',
		techStackCategory: 'Programming Language',
		techStackDescription:
			'TypeScript ensures that your code is always correct. It is the best way to write JavaScript.',
		TechStackSVGComponent: Icons.TypeScript,
	},
	{
		techStackName: 'React 18',
		techStackURL: 'https://react.dev/',
		techStackCategory: 'Web Library',
		techStackDescription: 'The library for web and native user interfaces',
		TechStackSVGComponent: Icons.React,
	},
	{
		techStackName: 'Vercel',
		techStackURL: 'https://vercel.com',
		techStackCategory: 'Hosting',
		techStackDescription:
			'Vercel Hosting is the best way to host your Next.js application. There is no easier way to deploy.',
		TechStackSVGComponent: Icons.Vercel,
	},
	{
		techStackName: 'Stripe',
		techStackURL: 'https://stripe.com/',
		techStackCategory: 'Payments',
		techStackDescription:
			'Stripe Payments is the best way to accept payments. All Webhooks are already set up.',
		TechStackSVGComponent: Icons.Stripe,
	},
	{
		techStackName: 'Umami.is',
		techStackURL: 'https://umami.is/',
		techStackCategory: 'Analytics',
		techStackDescription:
			'Umami is the best way to track your website analytics. GDPR compliant out-of-the-box.',
		TechStackSVGComponent: Icons.Umami,
	},
	{
		techStackName: 'Resend',
		techStackURL: 'https://resend.com/home',
		techStackCategory: 'Email',
		techStackDescription: 'The email framework for transactional emails',
		TechStackSVGComponent: Icons.Resend,
	},
	{
		techStackName: 'Zustand',
		techStackURL: 'https://docs.pmnd.rs/zustand/getting-started/introduction.',
		techStackCategory: 'State Management',
		techStackDescription:
			'Zustand is a small, fast and scalable bearbones state-management solution using hooks',
		TechStackSVGComponent: Icons.Zustand,
	},
	{
		techStackName: 'CSS3',
		techStackURL: 'https://css3.com/',
		techStackCategory: 'Programming Language',
		techStackDescription:
			'CSS3 is the latest evolution of the Cascading Style Sheets (CSS) language1. It extends CSS2.1 and introduces new features such as rounded corners, shadows, gradients, transitions, animations, and new layouts like multi-columns, flexible box, and grid layouts1. CSS3 is used to style and organize the layout of web pages2.',
		TechStackSVGComponent: Icons.CSS,
	},
];
