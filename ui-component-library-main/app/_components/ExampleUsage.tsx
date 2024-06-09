// Import Types
import { ProductMetaExample } from '@/types';
// Import External Packages
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
import { COMPANY_SUPPORT_EMAIL } from '@/constants';
import {
	ImageCard,
	ImageCardImageContainer,
	ImageCardImage,
	ImageCardFooter,
	ImageCardTitle,
	ImageCardDescription,
	ImageCardLink,
} from '@/ui/ImageCard';
// Import Assets & Icons

/**
 * Renders the Example Usage section.
 *
 * @param title The title of the section.
 * @param description The description of the section.
 * @param examplesArray An array of Example objects.
 * @param className The CSS class name for the section.
 * @returns The rendered Example Usage section.
 */
export default function ExampleUsageSection({
	title = 'Example Usage',
	description = `See this component live in action. Are you using the component on your website? Shoot us an email (${COMPANY_SUPPORT_EMAIL}) and we will link to you.`,
	examplesArray,
	className,
}: {
	title?: string;
	description?: string;
	examplesArray: ProductMetaExample[];
	className?: string;
}) {
	return (
		<SubSectionOuterContainer id="Example-Usage" className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
			<SubSectionInnerContainer>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 px-4">
					{examplesArray.map((example) => (
						<ImageCard
							key={example.nameOfPage}
							linkHover={!!example.urlToPage}
							className={cn(!example.urlToPage && 'shadow-none opacity-50')}
						>
							<ImageCardImageContainer>
								<ImageCardImage
									src={
										example.imgageSrcOfUsage ||
										'/api/og?product=' +
											example.nameOfPage +
											'&width=1200&height=675&category=null'
									}
									alt={example.nameOfPage || 'Example Usage of React Component'}
									width={800}
									height={450}
									className="h-full w-full object-cover"
								/>
							</ImageCardImageContainer>
							<ImageCardFooter className="grid space-y-2">
								{example.urlToPage && (
									<ImageCardLink href={example.urlToPage} linkType="external" />
								)}
								<ImageCardTitle>{example.nameOfPage}</ImageCardTitle>
								<ImageCardDescription>
									{example.descriptionOfUsage}
								</ImageCardDescription>
							</ImageCardFooter>
						</ImageCard>
					))}
					<ImageCard linkHover={undefined} className="shadow-none opacity-50">
						<ImageCardImageContainer>
							<ImageCardImage
								src="/img/plusArea.png"
								alt="Example Usage of React Component"
								width={800}
								height={450}
								className="h-full w-full object-cover"
							/>
						</ImageCardImageContainer>
						<ImageCardFooter className="grid space-y-2">
							<ImageCardTitle>Your Website?</ImageCardTitle>
							<ImageCardDescription>
								Are you using this component? Shoot us an email and we will link
								to you.
							</ImageCardDescription>
						</ImageCardFooter>
					</ImageCard>
				</div>
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
