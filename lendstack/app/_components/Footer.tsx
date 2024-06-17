// Import Types
import { LinkListItem } from '@/types';
// Import External Packages
import Image from 'next/image';
import Link from 'next/link';
// Import Components
import SocialFollowBar from '@/components/SocialFollowBar';
import ExternalLink from '@/ui/ExternalLink';
// Import Functions & Actions & Hooks & State
import { capitalize, cn } from '@/lib/utils';
// Import Data
import logoWhite from '@/public/logos/logo_for_dark.svg';
import {
	CREATOR_LINK,
	FOOTER_DISCLAIMERS,
	FOOTER_EXTERNAL_LINK_LIST,
	PARENT_COMPANY_LINK,
	YEAR_OF_CREATION,
	FOOTER_NAVIGATION_LINKS,
	FOOTER_SLOGAN,
} from '@/constants';
// Import Assets & Icons
import { ExternalLinkIcon } from 'lucide-react';

type PortfolioLinkBarProps = {
	title?: string;
	linkList: LinkListItem[];
};

function PortfolioLinkBar({
	title = 'External Links',
	linkList,
}: PortfolioLinkBarProps) {
	return (
		<div className="relative border-t border-white/10 py-8 mt-4 text-gray-400">
			<h3 className="flex items-center text-sm font-semibold leading-6 text-white">
				{title}
				<span>
					<ExternalLinkIcon size={12} className="ml-1" />
				</span>
			</h3>

			<ul
				role="list"
				className="grid md:flex mt-6 md:space-x-4 space-y-4 md:space-y-0"
			>
				{linkList.map((link) => (
					<li key={link.label} className="h-6 md:border-r last:border-r-0">
						<ExternalLink
							href={link.href}
							className="text-sm leading-6 text-gray-300 hover:text-white pr-4"
							follow
							trusted
						>
							{link.label}
						</ExternalLink>
					</li>
				))}
			</ul>
		</div>
	);
}

function FooterCopyright() {
	const copyrightDuration =
		YEAR_OF_CREATION === new Date().getFullYear().toString()
			? YEAR_OF_CREATION
			: `${YEAR_OF_CREATION} - ${new Date().getFullYear().toString()}`;

	return (
		<div className="py-4 border-t border-white/10">
			<div className="flex text-xs leading-5 text-gray-400 whitespace-nowrap flex-wrap">
				&copy; {copyrightDuration}. All rights reserved.
				{PARENT_COMPANY_LINK ? (
					PARENT_COMPANY_LINK.parentCompanyHref ? (
						<>
							A service of
							<ExternalLink
								href={PARENT_COMPANY_LINK.parentCompanyHref}
								className="underline mx-1"
							>
								{PARENT_COMPANY_LINK.parentCompanyName}.
							</ExternalLink>
						</>
					) : (
						<p className="mx-1">
							A service of {PARENT_COMPANY_LINK.parentCompanyName}.
						</p>
					)
				) : null}
				{CREATOR_LINK ? (
					CREATOR_LINK.creatorHref ? (
						<>
							By
							<ExternalLink
								href={CREATOR_LINK.creatorHref}
								className="underline mx-1"
							>
								{CREATOR_LINK.creatorName}.
							</ExternalLink>
						</>
					) : (
						<p className="mx-1">By {CREATOR_LINK.creatorName}.</p>
					)
				) : null}
			</div>
		</div>
	);
}

function InternalLinkBar({
	linkList,
}: {
	linkList: typeof FOOTER_NAVIGATION_LINKS;
}) {
	return (
		<div
			className={cn(
				'mt-16 grid grid-cols-2 gap-8 xl:mt-0 col-span-2',
				`lg:grid-cols-${Object.keys(linkList).length}`
			)}
		>
			{Object.keys(linkList).map((category) => (
				<div key={category}>
					<h3 className="text-sm font-semibold leading-6 text-white">
						{capitalize(category)}
					</h3>
					<ul role="list" className="mt-6 space-y-4">
						{linkList[category].map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									className="text-sm leading-6 text-gray-300 hover:text-white"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

/**
 * Renders the footer component.
 *
 * @returns The rendered footer component.
 */
export default function Footer() {
	return (
		<footer
			className="relative w-full bg-black pt-10 dark:border-t dark:border-white z-20"
			aria-labelledby="footer-heading"
		>
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-12 pb-8 pt-16">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8 pr-12">
						<Image
							className="h-auto w-48"
							src={logoWhite}
							alt="DroppedHub Logo White on transparent background"
						/>
						<p className="text-sm leading-6 text-gray-300">{FOOTER_SLOGAN}</p>

						<SocialFollowBar
							className="text-sm text-gray-300 fill-white hover:text-white"
							direction="horizontal"
							size="sm"
						/>
					</div>

					<InternalLinkBar linkList={FOOTER_NAVIGATION_LINKS} />
				</div>

				<PortfolioLinkBar
					title="Need a Domain to your Website?"
					linkList={FOOTER_EXTERNAL_LINK_LIST}
				/>

				<div className="py-4 border-t border-white/10 text-gray-400">
					{FOOTER_DISCLAIMERS.map((disclaimer) => (
						<p key={disclaimer} className="text-xs leading-5">
							{disclaimer}
						</p>
					))}
				</div>
				<FooterCopyright />
			</div>
		</footer>
	);
}
