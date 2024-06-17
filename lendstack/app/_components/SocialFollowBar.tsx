// Import Types
import { SocialFollowLinkObject } from '@/types';
// Import External Packages
// Import Components
import ExternalLink from '@/ui/ExternalLink';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
import { SOCIAL_FOLLOW_LINKS } from '@/constants';
// Import Assets & Icons

type SocialLinksProps = {
	links?: SocialFollowLinkObject[];
	direction?: 'horizontal' | 'vertical';
	size?: 'sm' | 'lg';
	className?: string;
};

/**
 * Renders a social follow bar component.
 *
 * @param links - An array of social follow links.
 * @param direction - The direction of the social follow bar (horizontal or vertical).
 * @param size - The size of the social follow icons (small or large).
 * @param className - Additional CSS class names for the component.
 * @returns The rendered social follow bar component.
 */
export default function SocialFollowBar({
	links = SOCIAL_FOLLOW_LINKS,
	direction = 'horizontal',
	size = 'sm',
	className,
}: SocialLinksProps) {
	return (
		<div
			className={cn(
				'flex gap-4',
				direction === 'horizontal' ? 'flex-row' : 'flex-col'
			)}
		>
			{links.map(({ channelName, channelHref, username, Icon }) => (
				<ExternalLink
					key={channelName}
					href={channelHref}
					ariaLabel={`Follow us on ${channelName}`}
					trusted
					follow
					className={className}
				>
					{size === 'sm' ? (
						<>
							<span className="sr-only">{`Follow us on ${channelName}`}</span>
							<Icon />
						</>
					) : (
						`${channelName}: ${username}`
					)}
				</ExternalLink>
			))}
		</div>
	);
}
