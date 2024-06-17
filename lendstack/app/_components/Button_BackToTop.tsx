'use client';

// Import Types
// Import External Packages
// Import Components
import { Button, ButtonProps } from '@/ui/Button';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import { ArrowUp } from 'lucide-react';

/**
 * Renders a button component that scrolls the page to the top when clicked.
 *
 * @param buttonText - The text to display on the button. Default is 'Back to top'.
 * @param showArrowIcon - Determines whether to show an arrow icon next to the button text. Default is true.
 * @param className - Additional CSS class names to apply to the button.
 * @param variant - The variant of the button. Default is 'secondary'.
 */
export default function Button_BackToTop({
	buttonText = 'Back to top',
	showArrowIcon = true,
	className,
	variant,
}: {
	buttonText?: string;
	showArrowIcon?: boolean;
	className?: string;
	variant?: ButtonProps['variant'];
}) {
	// Function to scroll the page to the top when the button is clicked
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Button
			className={cn('fixed bottom-4 right-4 z-50', className)}
			onClick={handleClick}
			variant={variant || 'secondary'}
		>
			{buttonText}
			{showArrowIcon && <ArrowUp size={18} className="pl-1" />}
		</Button>
	);
}
