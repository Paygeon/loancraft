// Import Types
import { SocialShareLinkObject } from '@/types';
// Import External Packages
// Import Components
import { buttonVariants } from '@/ui/Button';
import ExternalLink from '@/ui/ExternalLink';
import { Separator } from '@/ui/Separator';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
import { SOCIAL_SHARE_LINKS } from '@/constants';
// Import Assets & Icons

type SocialLinksProps = {
	currentSiteLink: string;
	title?: string;
	links?: SocialShareLinkObject[];
	direction?: 'horizontal' | 'vertical';
	size?: 'sm' | 'lg';
	className?: string;
	asButton?: boolean;
};

/**
 * Renders a social share bar component.
 *
 * @param currentSiteLink - The link to the current site.
 * @param title='Share' - The title of the social share bar.
 * @param SOCIAL_SHARE_LINKS - The array of social share links.
 * @param direction='horizontal' - The direction of the social share bar (horizontal or vertical).
 * @param size='sm' - The size of the social share icons (sm or lg).
 * @param className - The additional CSS class name for the social share bar.
 * @param asButton=true - Whether to render the social share links as buttons.
 * @returns The rendered social share bar component.
 */
export default function SocialShareBar({
	currentSiteLink,
	title = 'Share',
	links = SOCIAL_SHARE_LINKS,
	direction = 'horizontal',
	size = 'sm',
	className,
	asButton = true,
}: SocialLinksProps) {
	return (
		<>
			{title && (
				<>
					<Separator orientation="horizontal" className="my-4" />
					<h3 className="text-base font-medium py-2">{title}</h3>
				</>
			)}
			<div
				className={cn(
					'flex gap-4',
					direction === 'horizontal' ? 'flex-row' : 'flex-col'
				)}
			>
				{links.map((link) => (
					<ExternalLink
						key={link.channelName}
						href={
							link.channelHref +
							encodeURIComponent(
								`${link.shareTextInFrontOfURL}${currentSiteLink}`
							)
						}
						ariaLabel={`Share on ${link.channelName}`}
						trusted
						className={cn(
							className,
							asButton && buttonVariants({ variant: 'outline' })
						)}
						data-umami-event="Buttons: Share Button"
					>
						{size === 'sm' ? (
							<>
								<span className="sr-only">{`Share on ${link.channelName}`}</span>
								<link.Icon />
							</>
						) : (
							<span className="flex items-center">
								Share on <link.Icon />
							</span>
						)}
					</ExternalLink>
				))}
			</div>
		</>
	);
}
