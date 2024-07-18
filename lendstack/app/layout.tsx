// Import Types
import { Metadata } from 'next';
// Import External Packages
import Script from 'next/script';
// Import Components
import CookieConsentBanner from '@/components/CookieConsentBanner';
import StickyTopBanner from '@/components/StickyTopBanner';
import Navbar from '@/components/Navbar';
import { Analytics } from "@vercel/analytics/react";
import Footer from '@/components/Footer';
import { Toaster } from '@/ui/Toaster';
// Import Functions & Actions & Hooks & State
import { cn } from '@/utils';
// Import Data
import { METADATA_FULL } from '@/app/_constants/seo';
// Import Assets & Icons
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = METADATA_FULL;

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		   <Analytics />
		   <script async src="https://www.googletagmanager.com/gtag/js?id=G-L3LQQQPSN5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3LQQQPSN5');
            `,
          }}
        />
		   <Script
                src="https://d2bttqbsvfwlg9.cloudfront.net/widget.js"
                data-tabs="Start with our tool, General, Product, Knowledge Hub"
                data-channels="What's new, Announcements, Help center, For developers, Bugs, Discussions, Onboarding, Product feedback, Feature Suggestions"
                data-community-id="407"
                data-public-base-img-url="https://d34zu6t0zlvykw.cloudfront.net/"
            ></Script>
		   <Script
             async
             src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6524431799974410"
             crossOrigin="anonymous"
           ></Script>
			<Script
				defer
				src="https://analytics.eu.umami.is/script.js"
				data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
			></Script>
			<body
				className={cn(
					'relative font-sans antialiased bg-white dark:bg-black',
					inter.className
				)}
			>

				<Navbar />

				<main className="relative flex flex-col min-h-screen dark:bg-black">
					<StickyTopBanner />
					<div className="flex-grow flex-1">{children}</div>
				</main>
				<Toaster />
				<CookieConsentBanner />
				<Footer />
			</body>
		</html>
	);
}
