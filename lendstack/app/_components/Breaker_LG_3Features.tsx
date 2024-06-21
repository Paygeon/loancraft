// Import Types
// Import External Packages
import Link from 'next/link';
// Import Components
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

type Feature = {
	name: string;
	description: string;
	href: string;
};

/**
 * Renders a section breaker component, with a title, a subtitle, a description, and row of (3) features (name, description, href).
 *
 * @param features - An array of features to display in the section.
 * @param className - Optional CSS class name for the section.
 * @param title - Optional title for the section.
 * @param subTitle - Optional subtitle for the section.
 * @param description - Optional description for the section.
 * @returns The rendered feature section component.
 */
export default function Breaker_LG_3Features({
	features,
	className,
	title = 'Do you want to submit to the marketplace?',
	subTitle = 'Submission Guidelines',
	description = 'Some Actual Description Here.',
}: {
	features: Feature[];
	className?: string;
	title?: string;
	subTitle?: string;
	description?: string;
}) {
	return (
		<div
			className={cn(
				'w-full mx-auto px-12 py-16 dark:bg-black  dark:border-b dark:border-t dark:border-gray-100 dark:text-white',
				className
			)}
		>
			<div className="max-w-7xl mx-auto">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-base font-semibold leading-7 text-primary">
						{title}
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
						{subTitle}
					</p>
					<p className="text-sm italic mt-2 max-w-2xl mx-auto">
					  Welcome to finstack Marketplace! To maintain the highest quality and ensure a seamless experience for all users, please follow these submission guidelines carefully.
					</p>

<h2 className="text-5xl mt-4 max-w-2xl mx-auto">General Requirements</h2>
<ol className="text-sm italic mt-4 max-w-2xl mx-auto">
<li><strong>Originality</strong>: All submissions must be your original work. Do not submit plagiarized or copied content.</li>
<li><strong>Quality</strong>: Submissions should be of professional quality, free from errors, and follow best practices in software development.</li>
<li><strong>Compliance</strong>: Ensure that your submission complies with all relevant laws, regulations, and industry standards.</li>
<li><strong>Documentation</strong>: Provide thorough and clear documentation. This should include installation instructions, usage guidelines, and any dependencies required.</li>
<li><strong>Support</strong>: Indicate the level of support you will provide for your submission. This can range from no support to extensive, paid support.</li>
<li><strong>Dependencies</strong>: If your project requires dependencies (npm packages, Docker images), ensure these dependencies are publicly accessible.</li>
<li><strong>API Connections</strong>: If your project requires API connections with a third-party vendor (e.g., Stripe, Plaid), include a <code>.env</code> file in your build step with sample environment variables.</li>
<li><strong>Licensing</strong>: Make sure the master repository for your project is open to the public with the MIT license.</li>
<li><strong>External Links</strong>: No links to external websites are allowed in the codebase.</li>
<li><strong>Focus</strong>: Do not submit an &ldquo;all-in-one&rdquo; solution. Stick to one category per submission (e.g., insurance, lending, etc.).</li>
<li><strong>Advertising</strong>: No ads or advertising are allowed in the codebase.</li>
<li><strong>Design Consistency</strong>: The background of your project can only be white, black, or both. Component colors can be any color you choose but must stay consistent with the project&apos;s theme.</li>
<li><strong>Security</strong>: Ensure your project adheres to security best practices, including handling sensitive data securely and following proper authentication and authorization methods.</li>
<li><strong>Testing</strong>: Include unit tests and integration tests to verify the functionality of your components or project. Provide instructions on how to run these tests.</li>
<li><strong>Version Control</strong>: Use a version control system (preferably Git) and provide a clear commit history. Include a version number and changelog in your repository.</li>
<li><strong>User Interface</strong>: Ensure the user interface is intuitive and user-friendly. Follow modern UI/UX design principles.</li>
<li><strong>Performance</strong>: Optimize your code for performance. Avoid unnecessary computations and ensure that your project runs efficiently.</li>
<li><strong>Accessibility</strong>: Ensure your project is accessible to all users, including those with disabilities. Follow accessibility standards and guidelines.</li>
<li><strong>Review Process</strong>: Be prepared for a review process where your submission may be evaluated and feedback provided. Make necessary adjustments based on the feedback.</li>
<li><strong>Updates and Maintenance</strong>: Indicate your plan for future updates and maintenance. Regular updates improve the longevity and reliability of your submission.</li>
</ol>
				</div>
				<div className="mx-auto mt-12">
					<div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
						{features.length > 1 &&
							features.map((feature) => (
								<div key={feature.name} className="flex flex-col text-center">
									<div className="mx-auto font-semibold text-xl leading-9 text-center">
										{feature.name}
									</div>
									<div className="mt-4 flex flex-auto flex-col text-base leading-7">
										<p className="text-justify line-clamp-4">
											{feature.description}
										</p>
										<p className="mt-6">
											<Link
												href={feature.href}
												className="text-sm font-semibold underline"
											>
												Show me all {feature.name}
											</Link>
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
