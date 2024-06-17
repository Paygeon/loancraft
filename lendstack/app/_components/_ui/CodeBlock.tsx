'use client';
// Import Types
// Import External Packages
import { useState, useEffect, useRef } from 'react';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
// Import Components
import Button_CopyToClipboard from '@/components/Button_CopyToClipboard';
import { Button } from '@/ui/Button';
// Import Icons
// Import Functions & Actions & Hooks
import { cn } from '@/lib/utils';
// import Data

type mdxCodeObjectType = {
	type: string;
	props: {
		children: {
			type: 'code';
			props: {
				className: string;
				children: string;
			};
		};
	};
};

export default function CodeBlock({
	fileName,
	children,
}: {
	fileName?: string;
	children: mdxCodeObjectType;
}) {
	const componentRef = useRef<HTMLDivElement>(null);
	const [showAllButtonClicked, setShowAllButtonClicked] = useState(false);
	const [thereIsMore, setThereIsMore] = useState<boolean>(false);
	// Please see the react-syntax-highlighter documentation (https://github.com/react-syntax-highlighter/react-syntax-highlighter) for more information & other languages.
	SyntaxHighlighter.registerLanguage('tsx', tsx);
	const maxLines = 15;
	const thresholdHeight = maxLines * 19.5 + 20;

	useEffect(() => {
		if (componentRef.current) {
			const componentHeight = componentRef.current.offsetHeight;
			setThereIsMore(componentHeight > thresholdHeight);
		}
	}, [thresholdHeight]);

	const codeString = children?.props?.children?.props?.children?.trimEnd?.() || '';

	return (
		<div className="relative mt-2">
			{fileName && (
				<p
					style={{ background: 'rgb(30,30,30)' }}
					className="relative text-sm rounded-t-md p-2 text-white -mb-1 z-10 w-fit"
				>
					{fileName}
				</p>
			)}
			<div
				className={cn('absolute right-2 z-20', fileName ? 'top-11' : 'top-4')}
			>
				<Button_CopyToClipboard text={codeString} className="text-white" />
			</div>

			<div
				className="relative z-0 overflow-hidden"
				ref={componentRef}
				style={{
					maxHeight:
						!thereIsMore || showAllButtonClicked
							? 'none'
							: `${thresholdHeight}px`,
				}}
			>
				<SyntaxHighlighter language="tsx" style={vscDarkPlus} showLineNumbers>
					{codeString}
				</SyntaxHighlighter>
			</div>
			<div
				className={cn(
					'absolute -mt-10 z-30 w-full flex backdrop-blur-sm backdrop-opacity-90',
					(!thereIsMore || showAllButtonClicked) && 'hidden'
				)}
			>
				<Button
					onClick={() => setShowAllButtonClicked(!showAllButtonClicked)}
					className="w-fit mx-auto"
					variant={'secondary'}
					data-umami-event="Buttons: Show Full Code Button"
				>
					Show Full Code
				</Button>
			</div>
		</div>
	);
}
