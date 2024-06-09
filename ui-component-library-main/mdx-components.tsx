// This file is required to use MDX in `app` directory according to NextJS documentation.

import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
	};
}
