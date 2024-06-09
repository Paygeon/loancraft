type Step = {
	index?: string;
	title?: string;
	description?: string;
	children: React.ReactNode;
};

/**
 * Renders a step in the installation process.
 *
 * @param index - The index of the step.
 * @param title - The title of the step.
 * @param description - The description of the step.
 * @param children - The content of the step.
 * @returns The rendered HowToStep component.
 */
export default function HowToStep({
	index = '1',
	title,
	description,
	children,
}: Step) {
	return (
		<div className="w-full mt-4 max-w-[80svw]">
			<h2 className="relative text-xl font-semibold tracking-tight dark:text-white">
				<span className="absolute block -left-14 rotate-45 top-0 z-20 bg-gray-300 w-[26px] h-[26px]" />
				{`${index}. ${title}`}
			</h2>
			<p className="text-base text-muted-foreground">{description}</p>
			{children}
		</div>
	);
}
