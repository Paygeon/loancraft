// Purpose: This file contains custom MDX components to be rendered when being called throughout the app - especially useful for your product pages. You can add your own components here or call them from other files.

// Import Types
// Import External Packages
// Import Components
import HowToStep from '@/components/HowToStep';
import CodeBlock from '@/ui/CodeBlock';
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { stringToSlug } from '@/lib/utils';
// Import Data
// Import Assets & Icons

export const CUSTOM_MDX_COMPONENTS = {
	h1: (props: any) => (
		<h1 id={stringToSlug(props.children)} className="text-4xl font-bold">
			{props.children}
		</h1>
	),
	h2: (props: any) => (
		<h2 id={stringToSlug(props.children)} className="text-xl font-bold">
			{props.children}
		</h2>
	),
	h3: (props: any) => (
		<h3 id={stringToSlug(props.children)} className="text-lg font-bold">
			{props.children}
		</h3>
	),
	HowToStep,
	CodeBlock,
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
};
