// Type definition for the props that ExternalLink component accepts.
type ExternalLinkProps = {
	/** The URL that the link points to */
	href: string;
	/**
	 * Whether the link points to a trusted source. This affects the rel attribute
	 * by omitting 'noopener noreferrer' for trusted sources to facilitate browser optimizations
	 * for linking to trusted domains.
	 */
	trusted?: boolean;
	/**
	 * Determines if the link should pass link equity for SEO purposes. When false,
	 * 'nofollow' is added to the rel attribute to inform search engines not to pass link equity
	 * to the target URL.
	 */
	follow?: boolean;
	/** Accessible label describing the link's destination and purpose */
	ariaLabel?: string;
	/** Additional classes for styling the anchor tag */
	className?: string;
	/** The content to be rendered inside the anchor tag */
	children: React.ReactNode;
	/**
	 * Spreads the remaining anchor attributes by omitting 'href' to avoid conflicts,
	 * allowing for customization of the anchor tag such as setting 'id', 'style', etc.
	 */
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

/**
 * ExternalLink directs users to an external URL. It enhances security and SEO by managing
 * the 'rel' attribute based on the trustworthiness and the intention to follow the link for SEO.
 * It supports all standard anchor tag attributes for customization.
 */
export default function ExternalLink({
	href,
	trusted = false, // Defaults to false, considering all external links untrusted for security.
	follow = false, // Defaults to false to prevent SEO link equity passing by default.
	ariaLabel,
	className,
	children,
	...props // Captures any other anchor attributes provided to the component.
}: ExternalLinkProps) {
	let relValues = []; // Initializes an array to hold values for the 'rel' attribute.

	// Adds 'noopener noreferrer' to the 'rel' attribute for untrusted links to enhance security.
	if (!trusted) relValues.push('noopener', 'noreferrer');
	// Adds 'nofollow' to the 'rel' attribute to prevent SEO link equity passing if specified.
	if (!follow) relValues.push('nofollow');

	// Joins the relValues array into a string for the 'rel' attribute, or undefined if empty.
	const rel = relValues.length > 0 ? relValues.join(' ') : undefined;

	// Renders the anchor tag with the provided props, applying the computed 'rel' attribute,
	// and ensuring it opens in a new tab with target="_blank".
	return (
		<a
			href={href}
			className={className}
			rel={rel}
			target="_blank"
			aria-label={ariaLabel}
			{...props}
		>
			{children}
		</a>
	);
}
