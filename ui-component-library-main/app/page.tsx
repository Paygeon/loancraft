// Import Types
// Import External Packages
import { Suspense } from 'react';
// Import Components
import NewsletterBox_BeeHiiv from '@/components/NewsletterBox_BeeHiiv';
import Breaker_LG_3Features from '@/components/Breaker_LG_3Features';
import BreakerWithIcons from '@/components/BreakerWithIcons';
import CategoryOverview from '@/components/CategoryOverview';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
// Import Functions & Actions & Hooks & State
// Import Data
import { CATEGORIES_DESC, GENERAL_FAQS } from '@/constants';

// Import Assets & Icons

/**
 * Renders the Home page component.
 *
 * @returns The rendered Home page component.
 */
export default function Home() {
	return (
		<div className="flex flex-col mx-auto">
			<Hero />
			<Breaker_LG_3Features features={CATEGORIES_DESC} />
			<Suspense>
				<CategoryOverview categoryName="buttons" />
			</Suspense>
			<BreakerWithIcons />
			<FAQ faqs={GENERAL_FAQS} className="text-center max-w-3xl mt-8" />
			<NewsletterBox_BeeHiiv />
		</div>
	);
}
