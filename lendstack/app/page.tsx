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
import { BentoGridThirdDemo } from './_components/BentoGridThirdDemo';
import CombinedTitleSubtitle from './_components/_ui/Title';
import TextScroll from './_components/text_scroll/TextScroll';
import dynamic from 'next/dynamic';

const DynamicWidgetScript = dynamic(() => import('@/components/WidgetScript'), {
  ssr: false,
});

// Import Assets & Icons

/**
 * Renders the Home page component.
 *
 * @returns The rendered Home page component.
 */
export default function Home() {
	const subtitles = [
	  ""
	];
	return (
		<div className="flex flex-col mx-auto">
			<Hero />
			<br/>
			<CombinedTitleSubtitle title="" subtitles={subtitles} />
			<br/>
			<Suspense>
				<CategoryOverview categoryName="components" />
			</Suspense>
			<BreakerWithIcons />
			<Breaker_LG_3Features features={CATEGORIES_DESC} />
			<FAQ faqs={GENERAL_FAQS} className="text-center max-w-3xl mt-8" />
			<NewsletterBox_BeeHiiv />
			<DynamicWidgetScript />
		</div>
	);
}
