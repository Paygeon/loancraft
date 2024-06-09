'use client';

// Import Types
// Import External Packages
import { useState } from 'react';
import { toast } from 'sonner';
// Import Components
import { Button } from '@/ui/Button';
import Confetti from '@/ui/Confetti';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

export default function ConfettiButton() {
	const [isConfettiActive, setIsConfettiActive] = useState(false);
	return (
		<>
			<Button
				onClick={() => {
					toast.success(
						'Oh WOW! You actually clicked the button! See ... it is well-designed! As gratitude, enjoy some confetti. 🎉'
					);

					setIsConfettiActive(!isConfettiActive);

					setTimeout(() => {
						setIsConfettiActive(false);
					}, 3000);
				}}
				variant="default"
				size="lg"
				className="hover:bg-primary/80 animate-pulse shadow-2xl shadow-neutral-500"
				data-umami-event="Buttons: Front Page Confetti Button"
				disabled={isConfettiActive}
			>
				{isConfettiActive ? 'Have some Confetti' : 'Click Me'}
			</Button>
			<Confetti isActive={isConfettiActive} duration={3000} />
		</>
	);
}
