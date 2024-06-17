// Import Types
// Import External Packages
import Link from 'next/link';
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

/**
 * Renders a sticky top banner component.
 * This component displays a banner with a message.
 */
export default function StickyTopBanner() {
	return (
		<div className="w-full bg-red-200 text-center text-black space-y-2 py-2 px-12">
			<p className="text-center font-bold leading-6 tracking-wide">
				We are currently running a "pilot program" and are accepting new users on a rolling basis{' '}
				<br/>
			</p>
		</div>
	);
}
