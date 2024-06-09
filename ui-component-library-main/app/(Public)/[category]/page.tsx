// Import Types
import { Category } from '@/types';
import { Metadata } from 'next';
// Import External Packages
import Breadcrumps from '@/ui/Breadcrumps';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
// Import Components
import CategoryOverview from '@/components/CategoryOverview';
import NewsletterBox from '@/components/NewsletterBox_BeeHiiv';
import LinksToProductsBar from '@/components/LinksToProductsBar';
import {
	SectionOuterContainer,
	SectionTitle,
	SectionDescription,
	SubSectionOuterContainer,
	SubSectionInnerContainer,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { capitalize } from '@/lib/utils';
// Import Data
import { CATEGORIES, CATEGORIES_DESC, COMPANY_NAME } from '@/constants';
// Import Assets & Icons

type CategoryPageProps = {
	params: {
		category: Category;
		searchTag?: string;
	};
};

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params

export async function generateStaticParams(): Promise<CategoryPageProps[]> {
	return CATEGORIES.map((category) => ({
		params: {
			category,
		},
	}));
}

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata

export async function generateMetadata({
	params,
}: CategoryPageProps): Promise<Metadata> {
	return {
		title: `${capitalize(params.category)} Overview | ${COMPANY_NAME}`,
		description: CATEGORIES_DESC.map((categoryObject) =>
			categoryObject.slug === params.category ? categoryObject.description : ''
		).join(''),
	};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	// As [category] is actually an catch-all route on the first level, we need to check if the category is valid
	// If not, we return a 404
	if (
		!params.category ||
		typeof params.category !== 'string' ||
		!CATEGORIES.includes(params.category)
	) {
		notFound();
	}

	return (
		<SectionOuterContainer className="max-w-6xl">
			<Breadcrumps />
			<SectionTitle>All {capitalize(params.category)}</SectionTitle>
			<SectionDescription>Use the side bar to filter</SectionDescription>
			<SubSectionOuterContainer>
				<SubSectionInnerContainer className="max-w-7xl">
					<div className="flex md:space-x-8">
						<Suspense>
							<LinksToProductsBar params={{ ...params }} className="max-w-64" />
						</Suspense>
						<Suspense>
							<CategoryOverview
								categoryName={params.category}
								categoryNavigation={false}
								className="py-2"
								maxNumProducts={1000}
								maxCols={2}
							/>
						</Suspense>
					</div>
					<NewsletterBox />
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
		</SectionOuterContainer>
	);
}
