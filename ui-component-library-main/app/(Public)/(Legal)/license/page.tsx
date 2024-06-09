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
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
import {
	COMPANY_NAME,
	COMPANY_SUPPORT_EMAIL,
	COMPANY_WEBSITE_URL,
} from '@/constants';
import Link from 'next/link';
// Import Assets & Icons

export const metadata: Metadata = {
	title: `License | ${COMPANY_NAME} `,
	description: `License Agreement by ${COMPANY_NAME}.`,
};

export default function LicensePage() {
	return (
		<SectionOuterContainer id="License">
			<SectionTitle>License Agreement</SectionTitle>
			<SectionDescription>
				We use a single no-bullshit license for our products - the{' '}
				<Link href="#MIT" className="underline">
					MIT License
				</Link>
			</SectionDescription>
			<SubSectionOuterContainer className="max-w-3xl">
				<SubSectionDescription>
					Last Updated: March 0, 2999
				</SubSectionDescription>
				<SubSectionInnerContainer className="items-start prose">
					<div className="w-full h-1 border-t border-muted my-4" aria-hidden />

					<h2
						id="MIT"
						className="my-3 font-extrabold text-gray-900 dark:text-zinc-200"
					>
						MIT License
					</h2>
					<p className="text-black dark:text-zinc-200">
						Any works from us found on our website marked with &apos;MIT&apos;
						or &apos;MIT License&apos; are licensed under the MIT License which
						means you are free to use it for commercial use, modification,
						distribution, and private use as long as you give proper attribution
						and credits. <br /> <br />
						Copyright (c) 2999 BUTTON COMPANY <br />
						<br />
						Permission is hereby granted, free of charge, to any person
						obtaining a copy of this software and associated documentation files
						(the `Software`), to deal in the Software without restriction,
						including without limitation the rights to use, copy, modify, merge,
						publish, distribute, sublicense, and/or sell copies of the Software,
						and to permit persons to whom the Software is furnished to do so,
						subject to the following conditions: The above copyright notice and
						this permission notice shall be included in all copies or
						substantial portions of the Software.
					</p>
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
		</SectionOuterContainer>
	);
}
