'use client';

// Import Types
// Import External Packages
import { Disclosure } from '@headlessui/react';
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons
import { MinusSquareIcon, PlusSquareIcon } from 'lucide-react';
import { FAQ_PAIR } from '@/types';

/**
 * Renders a Frequently Asked Questions (FAQ) component.
 * @param title - The title of the FAQ section.
 * @param description - The description of the FAQ section.
 * @param faqs - An array of FAQ objects.
 * @param className - The CSS class name for the component.
 * @returns The rendered FAQ component.
 */
export default function FAQ({
	title = 'Frequently Asked Questions',
	description = 'We have compiled a list of frequently asked questions. If you have any other questions, please do not hesitate to contact us via email or using the chat function. We are here to help!',
	faqs,
	className,
}: {
	title?: string;
	description?: string;
	faqs: FAQ_PAIR[];
	className?: string;
}) {
	return (
		<SubSectionOuterContainer id="faq" className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
			<SubSectionInnerContainer>
				<dl className="mt-10 space-y-6 divide-y divide-black dark:divide-white max-w-4xl w-full mx-auto ">
					{faqs.map(
						(faq) =>
							faq.question &&
							faq.answer && (
								<Disclosure as="div" key={faq.question} className="pt-6">
									{({ open }) => (
										<>
											<dt>
												<Disclosure.Button className="flex w-full items-start justify-between text-left ">
													<span className="text-base font-semibold leading-7 dark:text-white">
														{faq.question}
													</span>
													<span className="ml-6 flex h-7 items-center text-primary">
														{open ? (
															<MinusSquareIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														) : (
															<PlusSquareIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														)}
													</span>
												</Disclosure.Button>
											</dt>
											<Disclosure.Panel as="dd" className="mt-2 pr-12">
												<p className="text-base text-justify leading-7 dark:text-white">
													{faq.answer}
												</p>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							)
					)}
				</dl>
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
