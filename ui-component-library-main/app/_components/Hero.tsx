// Import Types
// Import External Packages
// Import Components
import ConfettiButton from '@/components/ConfettiButton';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

/**
 * Renders the Hero component.
 *
 * @param className - The optional class name for the component.
 * @returns The rendered Hero component.
 */
export default function Hero({ className }: { className?: string }) {
	return (
		<div className={cn('dark:bg-black max-w-5xl mx-auto', className)}>
			<div className="mx-auto max-w-7xl py-16">
				<div className="mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl max-w-2xl mx-auto">
						Buttons Rule The World
					</h1>

					<p className="mt-6 text-lg leading-8 text-muted-foreground dark:text-zinc-200 max-w-4xl mx-auto">
						We knead the code and bake the pixels to perfection to serve you the
						most delightful online buttons - LIKE, SUBMIT, and everything in
						between.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<ConfettiButton />
					</div>
				</div>
			</div>
		</div>
	);
}
