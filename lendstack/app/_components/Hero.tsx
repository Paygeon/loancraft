// Import Types
// Import External Packages
// Import Components
import ConfettiButton from '@/components/ConfettiButton';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import '@/styles/AmazonText.css';
import PepperdineBadge from './badges/PepperdineBadge';
import SideProjectors from './badges/SideProjectors';
/**
 * Renders the Hero component.
 *
 * @param className - The optional class name for the component.
 * @returns The rendered Hero component.
 */
export default function Hero({ className }: { className?: string }) {
	return (
<div
  key="1"
  className={cn('dark:bg-black relative mt-0 flex flex-col items-center justify-center overflow-hidden bg-white px-4 pb-48 pt-12 md:-mt-2 md:px-12 md:pb-56 md:pt-32 snipcss-H2kNa', className)}>
  <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
    <div className="relative z-10 space-y-4 pb-12 md:pb-0">
      <span
        className="relative z-10 inline-block border-2 border-indigo-600 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 style-givNe"
        id="style-givNe"
      >
        Open-source marketplace for fintech designers, developers, and startups
        <span
          className="absolute block origin-top-right rotate-45 object-cover bg-indigo-600 style-wxMV2"
          id="style-wxMV2"
        />
      </span>
      <h1
        className="max-w-md text-5xl font-extrabold leading-[1.1]  text-gray-900 dark:text-white sm:max-w-lg lg:max-w-xl lg:text-6xl lg:leading-[1.1] style-WZqKO"
        id="style-WZqKO"
      >
        <span>
          The &quot;<span className="amazon-logo-font">amazon</span>&quot; of
        </span>
        <span className="text-indigo-600">
          {' '}fintech
        </span>
      </h1>
      <p
        className="mx-auto text-lg text-neutral-600 style-cIYEM"
        id="style-cIYEM"
      >
        Addicting, interactive, scalable fintech marketplace for{' '}
        <span className="font-semibold">
          <svg
            className="inline text-[#159ECA]"
            fill="currentColor"
            height="1em"
            role="img"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
          </svg>
          {' '}startups,{' '}
          <svg
            className="inline text-[#38BDF8]"
            fill="currentColor"
            height="1em"
            role="img"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
          {' '}developers,{' '}
          <img
            alt="Framer motion logo"
            className="inline w-4"
            src="https://www.hover.dev/framer-motion-sm.png"
          />
          {' '}designers 
        </span>
        {' '}& more. Build a fintech product in 20 minutes using our marketplace.
      </p>
      <div
        className="flex items-center gap-2 style-X3XNA"
        id="style-X3XNA"
      >
        <a href="/components">
          <div className="group relative h-fit w-fit ">
            <button
              className="cursor-pointer overflow-hidden font-medium  text-base py-2 px-4 bg-indigo-600 text-white shimmer_shine__jD_i0 z-10 transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:-translate-x-0 group-active:-translate-y-0 style-OYFn4"
              id="style-OYFn4"
            >
              Sign Up
            </button>
            <div
              className="absolute inset-0 z-0 translate-x-0.5 translate-y-0.5 bg-neutral-950 style-MJ8sq"
              id="style-MJ8sq"
            />
          </div>
        </a>
        <a
          className="bg-transparent px-4 py-2 font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          href="/templates"
        >
          View Interactive Demo
        </a>
      </div>
      <br/>
      <PepperdineBadge />
      <SideProjectors />
    </div>
    
    <div className="relative right-200 z-0 h-[500px] w-full md:h-auto">
      <div
        className="relative left-500 top-[50%] h-[475px] w-full min-w-[500px] bg-neutral-950 md:w-[700px] style-VMyq1"
        id="style-VMyq1"
      >
        <div
          className="relative inset-0 z-20 grid grid-cols-12 overflow-hidden bg-neutral-200 shadow-lg backdrop-blur-sm style-cXsGD"
          id="search-example"
        >
          <div className="col-span-3 bg-white p-2">
            <div className="relative mb-4 mt-1 flex gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
              <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
            </div>
            <nav className="no-scrollbar flex flex-col gap-1">
              <a
                className="mb-2 flex items-center gap-2 font-medium text-neutral-950"
                href="/components"
              >
                <svg
                  className="text-sm"
                  fill="none"
                  height="1em"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span className="line-clamp-1 text-xs">
                  All Components
                </span>
              </a>
              <span className="text-sm font-medium text-neutral-400">
                Sections
              </span>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/faq"
              >
                <span className="relative z-10">
                  Payments
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/forms"
              >
                <span className="relative z-10">
                  Payroll
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/heros"
              >
                <span className="relative z-10">
                  Cards
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/features"
              >
                <span className="relative z-10">
                  Insurance
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/pricing"
              >
                <span className="relative z-10">
                  Banking
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/sign-in"
              >
                <span className="relative z-10">
                  Lending
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/stats"
              >
                <span className="relative z-10">
                  Investing
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/testimonials"
              >
                <span className="relative z-10">
                  Compliance
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/three-d"
              >
                <span className="relative z-10">
                  Wealth Management
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/boards"
              >
                <span className="relative z-10">
                  Risk
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <span className="my-1.5" />
              <span className="text-sm font-medium text-neutral-400">
                Components
              </span>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/accordions"
              >
                <span className="relative z-10">
                  Accordions
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/buttons"
              >
                <span className="relative z-10">
                  Buttons
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/cards"
              >
                <span className="relative z-10">
                  Cards
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/carousels"
              >
                <span className="relative z-10">
                  Carousels
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/countdown"
              >
                <span className="relative z-10">
                  Countdown
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/dropdown-menu"
              >
                <span className="relative z-10">
                  Dropdown Menus
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/grids"
              >
                <span className="relative z-10">
                  Grids
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/inputs"
              >
                <span className="relative z-10">
                  Inputs
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/links"
              >
                <span className="relative z-10">
                  Links
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/loaders"
              >
                <span className="relative z-10">
                  Loaders
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/modals"
              >
                <span className="relative z-10">
                  Modals
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/navigation"
              >
                <span className="relative z-10">
                  Navbars & Menus
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/notifications"
              >
                <span className="relative z-10">
                  Notifications
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/other"
              >
                <span className="relative z-10">
                  Other
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/progress"
              >
                <span className="relative z-10">
                  Progress
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/tabs"
              >
                <span className="relative z-10">
                  Tabs
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/tables"
              >
                <span className="relative z-10">
                  Tables
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/text"
              >
                <span className="relative z-10">
                  Text
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
              <a
                className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200"
                href="/components/toggles"
              >
                <span className="relative z-10">
                  Toggles
                </span>
                <div className="absolute inset-0 z-0 bg-neutral-950 transition-all opacity-0" />
              </a>
            </nav>
          </div>
          <div className="col-span-9 overflow-hidden p-4">
            <div
              className="space-y-4 style-orqk4"
              id="results-column"
            >
              <div className="h-24 w-full animate-pulse bg-white" />
              <div className="h-24 w-full animate-pulse bg-white" />
              <div className="h-24 w-full animate-pulse bg-white" />
              <div className="h-24 w-full animate-pulse bg-white" />
              <div className="relative">
                <div
                  className="relative style-UUCND"
                  id="example-component"
                >
                  <div className="relative inline-block bg-white px-2 py-1 text-xs font-medium text-neutral-950">
                    <span>
                      A Component You Love
                    </span>
                    <span
                      className="absolute -left-4 -top-4 text-3xl text-yellow-300 style-gjdYU"
                      id="style-gjdYU"
                    >
                      <svg
                        fill="currentColor"
                        height="1em"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                    <span
                      className="absolute -bottom-4 -right-4 text-3xl text-yellow-300 style-qUQsg"
                      id="style-qUQsg"
                    >
                      <svg
                        fill="currentColor"
                        height="1em"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                  </div>
                  <div className="grid h-32 w-full place-content-center bg-neutral-900">
                    <button className="group relative rounded bg-indigo-500 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-600">
                      Wet Paint Button
                      <div
                        className="absolute top-[99%] origin-top style-7IyNc"
                        id="style-7IyNc"
                      >
                        <div
                          className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-UCoxG"
                          id="style-UCoxG"
                        />
                        <svg
                          className="absolute left-full top-0"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-slate-500 transition-colors group-hover:fill-slate-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          className="absolute right-full top-0 rotate-90"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <div
                          className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-T8bPp"
                          id="style-T8bPp"
                        />
                      </div>
                      <div
                        className="absolute top-[99%] origin-top style-9zNqW"
                        id="style-9zNqW"
                      >
                        <div
                          className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-rH13Z"
                          id="style-rH13Z"
                        />
                        <svg
                          className="absolute left-full top-0"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          className="absolute right-full top-0 rotate-90"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <div
                          className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-La1Rq"
                          id="style-La1Rq"
                        />
                      </div>
                      <div
                        className="absolute top-[99%] origin-top style-vqfEp"
                        id="style-vqfEp"
                      >
                        <div
                          className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-E2WRK"
                          id="style-E2WRK"
                        />
                        <svg
                          className="absolute left-full top-0"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          className="absolute right-full top-0 rotate-90"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <div
                          className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-NaqJJ"
                          id="style-NaqJJ"
                        />
                      </div>
                      <div
                        className="absolute top-[99%] origin-top style-pLsrf"
                        id="style-pLsrf"
                      >
                        <div
                          className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-2SMWM"
                          id="style-2SMWM"
                        />
                        <svg
                          className="absolute left-full top-0"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          className="absolute right-full top-0 rotate-90"
                          fill="none"
                          height="6"
                          viewBox="0 0 6 6"
                          width="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1077_28)">
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                            <path
                              className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                              clipRule="evenodd"
                              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                              fillRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1077_28">
                              <rect
                                fill="white"
                                height="6"
                                width="6"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <div
                          className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-E83gD"
                          id="style-E83gD"
                        />
                      </div>
                    </button>
                  </div>
                  <span
                    className="absolute right-0 top-0 flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-xs font-semibold shadow-lg style-xT1Qh"
                    id="code-toggle"
                  >
                    <svg
                      fill="none"
                      height="1em"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span>
                      Code
                    </span>
                  </span>
                  <svg
                    className="absolute left-[60%] top-[60%] z-20 fill-neutral-800 text-6xl text-white opacity-0"
                    fill="none"
                    height="1em"
                    id="cursor-pointer-icon"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      left: '49.9219%',
                      opacity: '1',
                      top: '49.9219%'
                    }}
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    <path d="M13 13l6 6" />
                  </svg>
                </div>
                <div
                  className="absolute inset-0 overflow-hidden bg-neutral-900 p-2 opacity-0 style-ToJwc"
                  id="example-code"
                >
                  <pre
                    className="style-PsTxk"
                    id="style-PsTxk"
                  >
                    <div
                      className="token-line style-1Xcbw"
                      id="style-1Xcbw"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        1
                      </span>
                      <span
                        className="token comment style-E2Fjv"
                        id="style-E2Fjv"
                      >
                        {' '}
                      </span>
                      <span className="token plain" />
                    </div>
                    <div
                      className="token-line style-NLBFt"
                      id="style-NLBFt"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        2
                      </span>
                      <span className="token plain" />
                      <span
                        className="token comment style-jvEeP"
                        id="style-jvEeP"
                      >
                      
                      </span>
                      <span className="token plain" />
                    </div>
                    <div
                      className="token-line style-gvdx5"
                      id="style-gvdx5"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        3
                      </span>
                      <span
                        className="token plain style-TIb88"
                        id="style-TIb88"
                      />
                    </div>
                    <div
                      className="token-line style-NZE4G"
                      id="style-NZE4G"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        4
                      </span>
                      <span className="token plain" />
                      <span
                        className="token keyword style-tQ4gW"
                        id="style-tQ4gW"
                      >
                        export
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token keyword style-WXXwq"
                        id="style-WXXwq"
                      >
                        const
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token function-variable function style-rHUD2"
                        id="style-rHUD2"
                      >
                        WetPaintButton
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token operator style-B2sL4"
                        id="style-B2sL4"
                      >
                        =
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token punctuation style-BL7PV"
                        id="style-BL7PV"
                      >
                        (
                      </span>
                      <span
                        className="token punctuation style-HDLAZ"
                        id="style-HDLAZ"
                      >
                        )
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token arrow operator style-ObSXI"
                        id="style-ObSXI"
                      >
                        {`=>`}
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token punctuation style-DrjE4"
                        id="style-DrjE4"
                      >
                        {`{`}
                      </span>
                      <span className="token plain" />
                    </div>
                    <div
                      className="token-line style-yCdO8"
                      id="style-yCdO8"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        5
                      </span>
                      <span className="token plain">
                      </span>
                      <span
                        className="token keyword style-PaP1A"
                        id="style-PaP1A"
                      >
                        return
                      </span>
                      <span className="token plain">
                        {' '}
                      </span>
                      <span
                        className="token punctuation style-5on92"
                        id="style-5on92"
                      >
                        (
                      </span>
                      <span className="token plain" />
                    </div>
                    <div
                      className="token-line style-WzlcI"
                      id="style-WzlcI"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        6
                      </span>
                      <span className="token plain">
                      </span>
                      <span
                        className="token tag punctuation style-So4y4"
                        id="style-So4y4"
                      >
                        {`<`}
                      </span>
                      <span
                        className="token tag style-QATxw"
                        id="style-QATxw"
                      >
                        button
                      </span>
                      <span
                        className="token tag style-z5aRU"
                        id="style-z5aRU"
                      >
                        {' '}
                      </span>
                      <span
                        className="token tag attr-name style-okhNc"
                        id="style-okhNc"
                      >
                        className
                      </span>
                      <span
                        className="token tag attr-value punctuation attr-equals style-HZStI"
                        id="style-HZStI"
                      >
                        =
                      </span>
                      <span
                        className="token tag attr-value punctuation style-oNKMd"
                        id="style-oNKMd"
                      >
                        `&quot;`
                      </span>
                      <span
                        className="token tag attr-value style-Mwvm8"
                        id="style-Mwvm8"
                      >
                        group relative rounded bg-indigo-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-600
                      </span>
                      <span
                        className="token tag attr-value punctuation style-laXrI"
                        id="style-laXrI"
                      >
                       `&quot;`
                      </span>
                      <span
                        className="token tag punctuation style-BDZbd"
                        id="style-BDZbd"
                      >
                        {`>`}
                      </span>
                      <span className="token plain-text" />
                    </div>
                    <div
                      className="token-line style-PE4kU"
                      id="style-PE4kU"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        7
                      </span>
                      <span className="token plain-text">
                        Wet Paint Button
                      </span>
                    </div>
                    <div
                      className="token-line style-E2e6b"
                      id="style-E2e6b"
                    >
                      <span className="inline-block w-[40px] select-none text-neutral-400">
                        8
                      </span>
                      <span className="token plain-text">
                      </span>
                    </div>
                  </pre>
                </div>
              </div>
              <div className="h-24 w-full animate-pulse bg-white" />
              <div className="h-24 w-full animate-pulse bg-white" />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 z-10 overflow-hidden bg-neutral-900 p-4 opacity-0 shadow-lg bg-grid-neutral-800 style-yGmIc"
          id="usage-example"
        >
          <div className="relative flex items-center justify-between rounded bg-neutral-800 px-3 py-1.5 backdrop-blur">
            <div className="flex gap-2">
              <span className="text-xs text-neutral-300">
                Home
              </span>
              <span className="text-xs text-neutral-300">
                About
              </span>
              <span className="text-xs text-neutral-300">
                Features
              </span>
            </div>
            <span className="pointer-events-none relative left-0 top-[50%] z-10 text-2xl font-black text-white md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
              logo.
            </span>
            <button className="relative scale-100 overflow-hidden rounded bg-white px-4 py-2 font-medium text-neutral-950 transition-transform hover:scale-105 active:scale-95">
              Try free
            </button>
          </div>
          <div className="absolute left-[50%] top-[50%] flex w-full -translate-x-[50%] -translate-y-[50%] flex-col items-center gap-4">
            <span className="block text-center text-xl font-medium text-neutral-300">
              <span className="text-5xl font-black text-indigo-300">
                Your Website
              </span>
              <br />
              <span className="italic underline decoration-indigo-300 decoration-dashed underline-offset-2">
                Using Hover Components
              </span>
            </span>
            <p className="max-w-md text-center text-xs text-neutral-300">
              Simply copy & paste hover components directly into your React & Tailwind projects for an instant dope-ness increase of over 9000%
            </p>
            <button className="group relative rounded bg-indigo-500 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-600">
              Wet Paint Button
              <div
                className="absolute top-[99%] origin-top style-si6Sf"
                id="style-si6Sf"
              >
                <div
                  className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-7DAwL"
                  id="style-7DAwL"
                />
                <svg
                  className="absolute left-full top-0"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="absolute right-full top-0 rotate-90"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="absolute top-full h-2 w-2 rounded-full bg-yellow-500 transition-colors group-hover:bg-indigo-600 style-sIb5M"
                  id="style-sIb5M"
                />
              </div>
              <div
                className="absolute top-[99%] origin-top style-X64ME"
                id="style-X64ME"
              >
                <div
                  className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-Uy4NY"
                  id="style-Uy4NY"
                />
                <svg
                  className="absolute left-full top-0"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="absolute right-full top-0 rotate-90"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-takrC"
                  id="style-takrC"
                />
              </div>
              <div
                className="absolute top-[99%] origin-top style-rHDcx"
                id="style-rHDcx"
              >
                <div
                  className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-EBp9N"
                  id="style-EBp9N"
                />
                <svg
                  className="absolute left-full top-0"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="absolute right-full top-0 rotate-90"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-WSHAX"
                  id="style-WSHAX"
                />
              </div>
              <div
                className="absolute top-[99%] origin-top style-pbEND"
                id="style-pbEND"
              >
                <div
                  className="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600 style-SD3ox"
                  id="style-SD3ox"
                />
                <svg
                  className="absolute left-full top-0"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="absolute right-full top-0 rotate-90"
                  fill="none"
                  height="6"
                  viewBox="0 0 6 6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1077_28)">
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                    <path
                      className="fill-indigo-500 transition-colors group-hover:fill-indigo-600"
                      clipRule="evenodd"
                      d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1077_28">
                      <rect
                        fill="white"
                        height="6"
                        width="6"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="absolute top-full h-2 w-2 rounded-full bg-slate-500 transition-colors group-hover:bg-indigo-600 style-PTz21"
                  id="style-PTz21"
                />
              </div>
            </button>
          </div>
          <span
            className="absolute left-2 top-20 text-4xl text-yellow-300 style-HCWUN"
            id="style-HCWUN"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute bottom-6 left-4 text-6xl text-yellow-300 style-bFnHP"
            id="style-bFnHP"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute right-0 top-14 text-6xl text-yellow-300 style-ZD6Xo"
            id="style-ZD6Xo"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute bottom-12 right-6 text-5xl text-yellow-300 style-MxXMi"
            id="style-MxXMi"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute bottom-[20%] left-[30%] text-2xl text-yellow-300 style-QsmIK"
            id="style-QsmIK"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute right-[20%] top-[30%] text-2xl text-yellow-300 style-OxBvo"
            id="style-OxBvo"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute left-[20%] top-[35%] text-lg text-yellow-300 style-1me6h"
            id="style-1me6h"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span
            className="absolute bottom-[35%] right-[30%] text-base text-yellow-300 style-PklCM"
            id="style-PklCM"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 right-0 h-[725px] w-full overflow-hidden border-b-2 border-t-2 border-neutral-950 bg-custom-gradient md:top-0 md:h-auto md:w-1/2 md:border-l-2">
  <div
      className="absolute -bottom-8 -top-8 left-0 right-0 bg-grid-neutral-950 style-ZkXOM"
      id="style-ZkXOM"
    />
  </div>
</div>
	
	);
}