// Import Types
import { Category, ProductMeta } from '@/types';
import { Metadata } from 'next';
// Import External Packages
import { MDXRemote as StepByStepGuide } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
// Import Components
import NewsletterBox_BeeHiiv from '@/components/NewsletterBox_BeeHiiv';
import Button_BackToTop from '@/components/Button_BackToTop';
import ExampleUsageSection from '@/components/ExampleUsage';
import BreakerSimple from '@/components/BreakerSimple';
import QuickLinksBar from '@/components/QuickLinksBar';
import TechStackSection from '@/components/TechStack';
import PreviewBox from '@/components/PreviewBox';
import Breadcrumps from '@/ui/Breadcrumps';
import FAQ from '@/components/FAQ';
import {
	SectionOuterContainer,
	SectionTitle,
	SectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { getProductMetaAndMDXContent } from '@/lib/server-utils';
import { capitalize } from '@/lib/utils';
import {
	doesProductExist,
	getAllProductSlugsWithinCategory,
} from '@/lib/registry';
// Import Data
import { CUSTOM_MDX_COMPONENTS } from '@/app/_constants/mdx-components';
import {
	CATEGORIES,
	CATEGORIES_DESC,
	COMPANY_NAME,
	COMPANY_WEBSITE_URL,
	CREATOR_LINK,
	SOCIAL_FOLLOW_LINKS,
} from '@/constants';

// Import Assets & Icons

type ProductPageProps = {
	params: { product: string; category: Category };
};

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params

export async function generateStaticParams(): Promise<ProductPageProps[]> {
	return CATEGORIES.flatMap((category) =>
		getAllProductSlugsWithinCategory(category).map((slug) => ({
			params: {
				category,
				product: slug,
			},
		}))
	);
}

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata

export async function generateMetadata({
	params,
}: ProductPageProps): Promise<Metadata> {
	const {
		meta: untypedMeta,
		content,
		error,
	} = await getProductMetaAndMDXContent(params.category, params.product);

	const meta = untypedMeta as ProductMeta;

	if (!meta || error) {
		return {};
	}

	return {
		title: meta.metaTitle,
		description: meta.metaDescription,
		keywords: meta.tags,
		openGraph: {
			title:
				meta.metaTitle ||
				`${params.product
					.split('-')
					.map((w) => capitalize(w))
					.join(' ')} | ${COMPANY_NAME}`,
			description:
				meta.metaDescription ||
				`From our ${capitalize(params.category)}: ${params.product
					.split('-')
					.map((w) => capitalize(w))
					.join(' ')}, only on ${COMPANY_NAME}`,
			type: 'website',
			locale: 'en_US',
			url: `${COMPANY_WEBSITE_URL}/${params.category}/${params.product}`,
			images: [
				{
					url: `${COMPANY_WEBSITE_URL}${meta.hasImage && meta.imageUrl ? meta.imageUrl : '/img/og_1200x630.png'}`,
					width: 1200,
					height: 630,
					alt: `${params.product
						.split('-')
						.map((w) => capitalize(w))
						.join(' ')} | ${COMPANY_NAME}`,
				},
			],
		},
		twitter: {
			site: SOCIAL_FOLLOW_LINKS[0].username,
			card: 'summary_large_image',
			title:
				meta.metaTitle ||
				`${params.product
					.split('-')
					.map((w) => capitalize(w))
					.join(' ')} | ${COMPANY_NAME}`,
			description: `From our ${capitalize(params.category)}: ${params.product
				.split('-')
				.map((w) => capitalize(w))
				.join(' ')}, only on ${COMPANY_NAME}`,
			images: [
				`${COMPANY_WEBSITE_URL}${meta.hasImage && meta.imageUrl ? meta.imageUrl : '/img/og_1600x900.png'}`,
			],
			creator: CREATOR_LINK.creatorXHandle,
		},
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	if (!doesProductExist(params.category, params.product)) {
		notFound();
	}

	const { meta, content, error } = await getProductMetaAndMDXContent(
		params.category,
		params.product
	);

	if (error) {
		notFound();
	}

	return (
		<SectionOuterContainer className="max-w-5xl">
			<Breadcrumps />
			<SectionTitle>{meta.componentName}</SectionTitle>
			<SectionDescription>
				{meta.longDescription}{' '}
				{CATEGORIES_DESC.find((category) => category.slug === meta.category)
					?.addTextToProductPage || ''}
			</SectionDescription>

			<QuickLinksBar productMeta={meta} />

			{meta.hasComponentCode && (
				<PreviewBox category={meta.category} componentSlug={meta.slug} />
			)}
			<StepByStepGuide
				source={content}
				components={{
					...CUSTOM_MDX_COMPONENTS,
					...(CUSTOM_MDX_COMPONENTS || {}),
				}}
			/>
			{meta.techStack && <TechStackSection techStack={meta.techStack} />}
			{meta.examples && <ExampleUsageSection examplesArray={meta.examples} />}
			{meta.faq && <FAQ faqs={meta.faq} />}
			<BreakerSimple
				title="What are you waiting for?"
				description="Button up and get started with this amazing product!"
			/>
			<NewsletterBox_BeeHiiv />
			<Button_BackToTop />
		</SectionOuterContainer>
	);
}
