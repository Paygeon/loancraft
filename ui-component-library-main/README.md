# Implementation Guide

Welcome to the implementation guide of [lendingstack's](https://lendingstack.com) [Ui Component Library](https://lendingstack.com/templates/ui-component-library).
If you struggle at any point, you have several options, including contacting me through email [support@lendingstack.com], through [X/Twitter](https://x.com/tkahlen), refer to the more [detailed docs](https://lendingstack.com/docs), or ask ChatGPT. :D

## Step 1: Business Details

Navigate to `app/_constants/constants.ts` and answer the 20 questions related to your business name, website URL, etc.

## Step 2: Images & Icons

Create and update images & icons as described:

**Logos**:

* `public/logos/logo_for_dark.svg` (Your logo, displayed when dark mode is active)
* `public/logos/logo_for_light.svg` (Your logo, displayed when light mode is active)

Fallback Images:

* `app/api/og/route.tsx` -> Change the SVG part to the content of your logo_for_light.svg file.

**Icons**:

* `public/icons/icon-512.png` (Your icon in 512x512)
* `public/icons/icon-128.png` (Your icon in 128x128)
* `public/icons/icon.png` (Your icon e.g. 190x190)
* `app/apple-icon.png` (Your icon in 190x190)
* `app/icon.svg` (SVG of you icon)
* `app/favicon.ico` (.ico version of your icon in 48x48)

*Recommendation*: I am using Adobe Illustrator to design my SVG logos, go to [SvgToPng](https://svgtopng.com/) to convert them to a PNG and then use [Favicon.io](https://favicon.io/favicon-converter/) to create the other needed icon files. Just stick to the current naming convention - and not to the one Favicon.io provides.

**OpenGraph Images**:

* `public/img/og_1080x1080.png` (Image for Social Media in format 1080x1080)
* `public/img/og_1200x630.png` (Image for Social Media in format 1200x630)
* `public/img/og_1600x900.png` (Image for Social Media in format 1600x900)

*Recommendation*: I am using Adobe Express to quickly create secondary images like these.

Optional Secondary Images:

* `public/img/404.png` (Displayed when a 404 error occured)
* `public/img/plusArea.png` (Displayed as product picture in dummy products)

## Step 3: Robots, Sitemap, Package.json

Update `public/robots.txt` with your actual website URL and modify the `package.json` file with your project's name and version. The sitemap is auto-generated; no modifications required

## Step 4: Secret Keys

Rename `.env.local.EXAMPLE` to `.env.local` and fill out the needed IDs.
You will have to sign up for the following third party products (which have a free-tier):

* [Umami.is](https://umami.is/) (Website Analytics - GDPR friendly)
* [BeeHiiv](https://www.beehiiv.com/) (Newsletter)

While you configure the Newsletter, go to `app/components/NewsletterBox_BeeHiiv` and customize the disclaimer text.

If you don't want to use:

* Umami: Delete the Umami Script Tag in `app/layout.tsx`. If you want to make it real clean, search for "data-umami-event" and delete these props from the respective component.
* BeeHiiv: Easy Way: Leave the NEXT_PUBLIC_BEEHIIV_EMBED_URL in env.local empty. The NewsletterBox will not be displayed. Medium Easy Way: Search for the NewsletterBox and remove it from the using components.

## Step 5: Adapt the Front Page & Colors

Go to `app/page.tsx` and make the front page yours - e.g. by changing the Hero Component in `app/_components/Hero.tsx`.
Also add the component "CategoryOverview" for each of your Product Categories and add some Breaker sections.

To change the main color (black per default), head over to [ui.shadcn.com](https://ui.shadcn.com/themes), pick a color, click "copy code" and paste it into the `app/globals.css` replacing the current `@layer base {}`

## Step 6: Add Your First Product

Go to `app/_products` and do the following:

* Add one folder per Product Category (e.g. 'Buttons' -> `app/_products/buttons`).
* Add one folder for your first product (e.g. 'Back To Top Button' -> `app/_products/buttons/button-back-to-top`)
* Add a file called `(COMPONENTNAME).docs.mdx` where you replace (COMPONENTNAME) with the name of the component (e.g. `button-back-to-top.docs.mdx`). This is the backbone of the product page. As this file is so important, you should copy & paste the example file `example-component.docs.mdx` and change the params and follow the instructions. If unsure, have a look at the ProductMeta types in `app/_types/types.ts`.
* Optionally but recommended if possible: Add a file called `(COMPONENTNAME).tsx` where you replace (COMPONENTNAME) with the name of the component (e.g. `button-back-to-top.tsx`). This file should be a functional .tsx file of the product and will be displayed in a preview box on the product page. If this file does not exist, the preview box will render a "Component Not Found". If you don't want the component to be rendered or it is not possible (e.g. because is a JS-function), modify in the `(COMPONENTNAME).docs.mdx` file on the following param `hasComponentCode: false`.

FYI: Within the initial boilerplate, the one you just installed, there will already be an example `Confetti-Button` component within the product category `Buttons`.

In your terminal run the following code:

```bash
npm run build:registry
```

The registry is like a local database which will feed the app. Everytime you add, delete or change something in `app/_products` re-run the command to see the changes. When deploying, at build time, this command will be run automatically for you.

Please see the README file in `app/_products/Readme.md` to get a **deep dive** into adding components and customizing the component's product page.

## Step 7: Legal

Go to `app/(Public)/(Legal)` and create the needed content for the legal pages - delete or add pages as needed. A first draft can be created using various online generators or even ChatGPT. For obvious reasons: I am not a lawyer, so I recommend talking to a real lawyer in order to create bulletproof legal docs for your jurisdiction / country.

## Step 8: Deploy

I recommend GitHub for source code hosting and Vercel for deploying. I further recommend to create accounts at both services (if you haven't already) and connect Vercel to your GitHub. Then push your code to GitHub and see how Vercel auto-magically builds your app. [Here are the Vercel Docs on how to do exactly that.](https://vercel.com/docs/deployments/git/vercel-for-github)

When you deploy, e.g. to Vercel, remember to copy & paste your environment variables from your .env.local.

## Step 9: Buy a domain name

I use [namecheap *](https://www.tkqlhce.com/click-100853596-11557291?url=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D+UiComponentLibrary.io) but you can use any domain name registrar to register a domain. If you still need a name for your business, hit me up @tkahlen on X / Twitter. I have 2 domain name startups that help find awesome names. Happy to assist you.

Once you have a domain, follow [Vercel's docs on domain setup](https://vercel.com/docs/projects/domains/add-a-domain).

## Step 10: Launch

Holy Smokes. In 10 easy steps you created your own UI Component Library. Congrats!
Now create products and do marketing!

Send me, through email or X, the domain to your website and I will the first to push your project!

## Step 11: Feedback

Feedback is key to get better in life, so:

* I'd love to hear your feedback on (1) this implementation guide, (2) the template itself, (3) your launch, and (4) your successes and/or failures! Email, X, smoke signs, whatever works best for you!
* Open an Issue in Github if something is not working OR when you have improving edits OR a even a new feature from which everyone can benefit.
* I will collect all questions (& answers), and add them to this Readme as a FAQ section (see below).

## FAQ

(empty so far)
