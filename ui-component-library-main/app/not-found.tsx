// Import Types
// Import External Packages
import Image from 'next/image';
import Link from 'next/link';
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
import { COMPANY_SUPPORT_EMAIL } from '@/constants';
// Import Assets & Icons
import ImageNotFound from '@/public/img/404.png';

// https://nextjs.org/docs/app/api-reference/file-conventions/not-found

export default function NotFound() {
	return (
		<div className="w-full py-14">
			<div className="max-w-2xl mx-auto text-center">
				<h2 className="font-semibold text-2xl">
					Were you looking for our 404 Not-Found-Component?
				</h2>
				<p className="text-muted-foreground text-lg italic">(You found it!)</p>
				<Image
					src={ImageNotFound}
					width={400}
					height={400}
					alt="404 Error"
					className="mx-auto"
				/>
				<p className="text-muted-foreground text-lg italic py-4">
					What you didn&apos;t find is the page you were actually searching for.
					If this error persists, please contact us at {COMPANY_SUPPORT_EMAIL}.
				</p>
				<Link href="/" className="underline text-primary text-lg">
					Return Home
				</Link>
			</div>
		</div>
	);
}
