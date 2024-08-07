// Purpose: Generate an image for a product card when no other is provided

// Import Types
// Import External Packages
import { ImageResponse } from 'next/og';
// Import Components
// Import Functions & Actions & Hooks & State
import { backgroundPattern } from '@/utils';
// Import Data
import { COMPANY_NAME } from '@/constants';
// Import Assets & Icons

export const runtime = 'edge';

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const product =
			searchParams.get('product')?.slice(0, 30) || `${COMPANY_NAME}`;
		const category =
			searchParams.get('category')?.slice(0, 30) ||
			'Fintech Components & Templates';
		const width = parseInt(searchParams.get('width') || '1600');
		const height = parseInt(searchParams.get('height') || '900');

		const categoryToSubtitle =
			category === 'functions'
				? '.ts / .js'
				: category === 'components'
					? '.tsx / .jsx'
					: category === 'modules'
						? 'React Components'
						: category === 'templates'
							? 'NextJS Template'
							: category === null || category === 'null'
								? ''
								: category;

		const fontSizeAuto = Math.max(
			120 - Math.max((product.length - 14) * 5, 0),
			60
		);

		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						height: '100%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						background: 'white',
						backgroundImage: backgroundPattern('boxes-lg'),
						letterSpacing: -2,
						fontWeight: 700,
						textAlign: 'center',
					}}
				>
					<div
						style={{
							backgroundImage:
								'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
							backgroundClip: 'text',
							color: 'transparent',
							fontSize: fontSizeAuto,
						}}
					>
						{product}
					</div>
					<div
						style={{
							background: 'rgb(0,0,0)',
							backgroundClip: 'text',
							color: 'transparent',
							fontSize: 48,
						}}
					>
						{categoryToSubtitle}
					</div>
					<div
						style={{
							display: 'flex',
							position: 'absolute',
							bottom: '3rem',
							right: '3rem',
						}}
					>
						<svg
							id="logo-16"
							width="109"
							height="43"
							viewBox="0 0 109 43"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{' '}
							<path
								d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
								fill="#FFD200"
							></path>{' '}
							<path
								d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
								fill="#06E07F"
							></path>{' '}
							<path
								d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
								fill="#E3073C"
							></path>{' '}
							<path
								d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
								fill="#1F84EF"
							></path>{' '}
						</svg>
					</div>
				</div>
			),
			{
				width: width ? width : 1600,
				height: height ? height : 900,
			}
		);
	} catch (e: any) {
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
