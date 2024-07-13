'use client';

// Import necessary components from Clerk and other libraries
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/ui/Badge';
import { COMPANY_NAME, CATEGORIES_DESC, NAVBAR_ADD_LINKS } from '@/constants';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';

// Updated ModeToggle function with correct return type
function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none');
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none');
        }, 0);
    }

    function toggleMode() {
        disableTransitionsTemporarily();

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const isSystemDarkMode = darkModeMediaQuery.matches;
        const isDarkMode = document.documentElement.classList.toggle('dark');

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode.toString();
        }
    }

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className="group rounded-full px-3 py-2"
            onClick={toggleMode}
        >
            <SunIcon className="h-6 w-6 fill-amber-200 stroke-amber-300 transition group-hover:hidden group-hover:dark:block dark:hidden" />
            <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-400 group-hover:block group-hover:dark:hidden transition dark:block" />
        </button>
    );
}

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="w-full sticky top-0 z-50 border-b dark:bg-black/60 bg-white/60 backdrop-blur-sm h-20"
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full grid">
                        <div className="flex justify-between items-center">
                            <div className="-ml-2 mr-2 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            {/* Logo */}
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/">
                                    <Image
                                        src="/logos/logo_for_light.svg"
                                        alt={`${COMPANY_NAME} Logo Light Mode`}
                                        width={150}
                                        height={100}
                                        className="h-16 lg:w-40 dark:hidden"
                                        priority
                                    />
                                    <Image
                                        src="/logos/logo_for_dark.svg"
                                        alt={`${COMPANY_NAME} Logo Dark Mode`}
                                        width={150}
                                        height={100}
                                        className="hidden h-16 lg:w-40 dark:inline"
                                        priority
                                    />
                                </Link>
                            </div>
                            {/* Navbar Items */}
                            <div className="hidden items-center lg:flex lg:gap-x-4">
                                {CATEGORIES_DESC.map((category) => (
                                    <div
                                        key={category.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6"
                                    >
                                        <div className="flex dark:text-white text-gray-900 dark:hover:text-white">
                                            <Link
                                                href={'/' + category.slug}
                                                className="flex font-semibold hover:underline decoration-black dark:decoration-white"
                                            >
                                                {category.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            {category.badge && (
                                                <Badge
                                                    variant="tinyPrimary"
                                                    className="block h-fit -mt-2 mx-1"
                                                >
                                                    {category.badge}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {NAVBAR_ADD_LINKS.map((link) => (
                                    <div
                                        key={link.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6"
                                    >
                                        <div className="flex dark:text-white text-gray-900 dark:hover:text-white">
                                            <Link
                                                href={'/' + link.slug}
                                                className="flex font-semibold hover:underline decoration-black dark:decoration-white"
                                            >
                                                {link.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Mode Toggle Component */}
                            <div className="flex items-center justify-center lg:max-w-fit whitespace-nowrap space-x-2">
                                <div className="pointer-events-auto border-gray-500 lg:w-40 text-center">
                                    <ModeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile menu, show/hide based on menu open state */}
                    <Disclosure.Panel className="lg:hidden bg-white dark:bg-black">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {CATEGORIES_DESC.map((category) => (
                                <Disclosure.Button key={category.name} className="block w-full">
                                    <Link
                                        href={'/' + category.slug}
                                        className="hover:bg-gray-700 hover:text-white dark:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    >
                                        {category.name}
                                    </Link>
                                </Disclosure.Button>
                            ))}
                            {NAVBAR_ADD_LINKS.map((link) => (
                                <Disclosure.Button key={link.name} className="block w-full">
                                    <Link
                                        href={'/' + link.slug}
                                        className="hover:bg-gray-700 hover:text-white dark:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
