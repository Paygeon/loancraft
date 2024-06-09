'use client';

import { COMPANY_SUPPORT_EMAIL } from '@/constants';
import Link from 'next/link';

// https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body className="text-center">
				<div className="mx-auto">
					<h1 className="font-bold text-xl">Something went wrong!</h1>
					<p className="text-muted-foreground text-lg italic">
						Sooooo wrong that you actually landed here... If this error
						persists, please contact us at {COMPANY_SUPPORT_EMAIL}.
					</p>

					<button onClick={() => reset()}>Try again</button>
					<Link href="/" className="underline text-primary text-lg my-4">
						Return Home
					</Link>
				</div>
			</body>
		</html>
	);
}
