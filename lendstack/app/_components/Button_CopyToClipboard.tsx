'use client';

// Import Types
// Import External Packages
// Import Components
import { Button } from '@/ui/Button';
// Import Functions & Actions & Hooks & State
import { CopyToClipboard } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import { ClipboardCopy } from 'lucide-react';

/**
 * Renders a button that copies the specified text to the clipboard when clicked.
 * @param text The text to be copied to the clipboard.
 * @param className The optional CSS class name for the button.
 * @returns The rendered button component.
 */
export default function Button_CopyToClipboard({
	text,
	className,
}: {
	text: string | undefined;
	className?: string;
}) {
	return (
		<Button
			className={className}
			variant="ghost"
			onClick={() => CopyToClipboard(text)}
			data-umami-event="Buttons: Copy To Clipboard Button"
		>
			<span className="sr-only">Copy to Clipboard</span>
			<ClipboardCopy size={22} />
		</Button>
	);
}
