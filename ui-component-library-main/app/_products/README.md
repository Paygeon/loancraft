# Adding Products

Adding products to your Ui Component Library is as easy as adding a single MDX file to a folder.
As an example, we added the product 'Confetti Button' which you can always take as a reference.

Other than that: If you have any questions send an email to [support@lendingstack.com].

## File Structure

1. Each 'Product Category' (e.g. 'Buttons') needs a standalone folder in `/_products` (e.g. `/_products/buttons`).
2. Each 'Product' (e.g. the 'Confetti Button') needs a standalone folder in folder of the corresponding 'Product Category' (e.g. `/_products/buttons/confetti-button`).
3. In the product's folder there must be at least one file which is called the same as the folder and ending in '.docs.mdx' e.g. (`/_products/buttons/confetti-button/confetti-button.docs.mdx`).
4. If there is something to show (e.g. a UI component), optionally, you can add a further file which is called the same as the folder and ending in '.tsx' e.g. (`/_products/buttons/confetti-button/confetti-button.tsx`).

The structure of the two files (.docs.mdx and .tsx) are described as follows.

## The .Docs.MDX File

All .docs.mdx files are separated into two parts:

1) The stuff between the first "---" and the second "---" at the beginning of the file (the 'Frontmatter'), and
2) Anything below the second "---" (the 'Content')

The **Frontmatter** is like the settings for how the product is being displayed through out your new platform, and the settings for the actual rendered Product Page which the user will see in your live website. This part is required to be customized for each of your products.

The **Content** is being rendered in one section on the Product Page. Technically speaking, this part is not required but provides a lot more optionas for customizations and additional options to your Product Page.

Important to know: When developing local, e.g. you have a live version running after executing the command `npm run dev`and make changes to the Frontmatter of any .docs.mdx file, you need to run the following command in order to see the updates in your live version. Any changes to the Content part are reflected immediately without running this command:

```bash
npm run build:registry
```

### Frontmatter

The frontmatter (*the part between --- --- at the beginning of a (slug).docs.mdx file*) of each product's .docs.mdx-file in your library defines essential metadata used throughout the products's lifecycle in the documentation and your new platform. Here is the detailed explanation of each parameter. You can always refer to this guide or just copy & paste one of your working products and just adapat as needed.

#### componentName

- **Description**: The display name of the component, which is used throughout the component library wherever this component is referenced.
- **Example**: "Confetti Button"
- **Required**: true
- **Type**: `string`
- **Restrictions**: Do not include colons (`:`) in the name.
- **Additional Info**: -

#### category

- **Description**: Categorizes the component within the library, aiding in its organization and visibility in category overviews.
- **Example**: "Buttons"
- **Required**: true
- **Type**: `string` (But, see Restrictions)
- **Restrictions**: Must be one of the predefined categories listed in `CATEGORIES` as outlined in `/constants.ts`.
- **Additional Info**: -

#### slug

- **Description**: A unique identifier for the component, used in URLs.
- **Example**: "confetti-button"
- **Required**: true
- **Type**: `string`
- **Restrictions**: Must be lowercase, unique and contain no spaces.
- **Additional Info**: -

#### shortDescription

- **Description**: A brief summary of the component, displayed on product cards.
- **Example**: "This Button fires confetti when clicked."
- **Required**: true
- **Type**: `string`
- **Restrictions**: -
- **Additional Info**: -

#### longDescription

- **Description**: A detailed description of the component, displayed on the product page.
- **Example**: "This Button fires confetti when clicked. The confetti-firing-function can be customized."
- **Required**: true
- **Type**: `string`
- **Restrictions**: -
- **Additional Info**: -

#### hasImage

- **Description**: Indicates whether an image is associated with the component.
- **Example**: true
- **Required**: false
- **Type**: `boolean` (true | false)
- **Restrictions**: If `true`, `imageUrl` must be and `imageAlt` should be provided.
- **Additional Info**: If hasImage is set to false, a fallback image is automatically being generated when & where needed, using `/api/og/route.tsx`.

#### imageUrl

- **Description**: Path to the product's image, stored within the `/public` directory.
- **Example**: "/img/products/confetti-button.png"
- **Required**: false (But, see restrictions)
- **Type**: `string`
- **Restrictions**: Required if `hasImage` is `true`.
- **Additional Info**: -

#### imageAlt

- **Description**: Alternative text for the product image, enhancing accessibility.
- **Example**: "Image of Confetti Button"
- **Required**: false
- **Type**: `string`
- **Restrictions**: -
- **Additional Info**: Recommended if `hasImage` is `true`. If needed, a fallback description for the Alt-tag is being created automatically.

#### hasComponentCode

- **Description**: Indicates whether the component's code (.tsx file) is available.
- **Example**: true
- **Required**: false
- **Type**: `boolean` (true | false)
- **Restrictions**: If `true`, include the code file in the product folder named as `(slug).tsx`, where you replace (slug), with the slug of the component, e.g. `confetti-button.tsx`
- **Additional Info**: If `true`, this will trigger (1) the button 'See in Action' and (2) the 'Preview' section, both on the component's Product Page.

#### tags

- **Description**: Tags associated with the component, used for filtering in category overviews.
- **Example**: ['UI', 'Interactive']
- **Required**: false
- **Type**: `Array<string>` (string[])
- **Restrictions**: -
- **Additional Info**: Highly recommended. The tags will be used in the category overview (e.g. /buttons) to display the tags on the left-hand side. These tags can be used to filter through all components in this category.

#### techStack

- **Description**: Specifies the technology stack used in the component, aligned with definitions in `/constants/techstack.js`.
- **Example**: ['Next.js 14', 'Tailwind']
- **Required**: false
- **Type**: `Array<string>` `string[]`
- **Restrictions**: -
- **Additional Info**: If set, this will trigger (1) the button 'Tech Stack' and (2) the 'Tech Stack' section, both on the component's Product Page.

#### examples

- **Description**: Examples of the component in use, each represented as an object containing details about its implementation on external sites.
- **Example**:

```js
[{"nameOfPage": "Example Site", "urlToPage": "https://example.com", "descriptionOfUsage": "Example description", "imgageSrcOfUsage": "/img/examples/example.png"}] 
```

- **Required**: false
- **Type**: `Array<Object>`
  - **Object Fields** (all required, when set):
    - `nameOfPage`: Display name of the example site.
    - `urlToPage`: URL of the example site.
    - `descriptionOfUsage`: Description of how the component is used on the site.
    - `imgageSrcOfUsage`: Path to a screenshot of the component in use, stored within the `/public` directory.
- **Restrictions**: -
- **Additional Info**: If set, this will trigger (1) the button 'Example Usages' and (2) the 'Example Usage' section, both on the component's Product Page.

#### faq

- **Description**: Frequently asked questions related to the component, each represented as an object.
- **Example**:

```js
[{"question": "Is there a JavaScript version?", "answer": "No. Currently not."}]
```

- **Required**: false
- **Type**: `Array<Object>`
  - **Object Fields** (all required, when set):
    - `question`: The FAQ question.
    - `answer`: The answer to the question.
- **Restrictions**: -
- **Additional Info**: If set, this will trigger (1) the button 'FAQ' and (2) the 'Frequently Asked Questions' section, both on the component's Product Page.

#### metaDescription

- **Description**: A concise description of the component, used for SEO meta tags.
- **Example**: "This is the greatest Confetti Button ever!"
- **Required**: false
- **Type**: `string`
- **Restrictions**: Maximum of 155-160 characters.
- **Additional Info**: Highly Recommended to optimize for SEO.

#### metaTitle

- **Description**: The title of the component for SEO purposes, used in meta tags.
- **Example**: "Confetti Button | The Button Company"
- **Required**: false
- **Type**: `string`
- **Restrictions**: Maximum of 60 characters.
- **Additional Info**: Highly Recommended to optimize for SEO.

#### license

- **Description**: Specifies the license under which the component is distributed.
- **Example**: MIT
- **Required**: true
- **Type**: `string`
- **Restrictions**: Add your actual license text to `/app/(Public)/(Legal)/license/page.tsx` and reference it using an ID, such as `id="MIT"`.
- **Additional Instructions**: Displays a license button on the product page.

### Content

So, because the .DOCS.MDX file is a '.mdx' file, it can contain Markdown AND React Components. Sweet!
If you want to dig deeper into MDX, have a look at the offical [MDX docs](https://mdxjs.com/)

#### Crashcourse MDX

From a high-level perspective:

- You are able to write Markdown like `# Headline1` which will be rendered as `<h1>Headline1</h1>`, and
- You are able to include React components like `<RandomComponent> Some Text </RandomComponent>` which will be rendered as *whatever you defined RandomComponent to be*

Everything that you write in the Content section of the .DOCS.MDX file will be rendered between the 'Preview Box' (if there is one) and the 'Tech Stack'.

So, if your .DOCS.MDX file is set up as follows:

```mdx
---
// Some frontmatter
---

# Introduction
 
This is an introductory sentence.
```

Then the Product's Product Page will render

```html
<h1>Introduction</h1>
<p>This is an introductory sentence.</p>
```

#### MDX Example

Alright. Now, let's go into an example. You might want to show your visitors how they can use your fancy new Ui Component.
In this regard, a Step-by-Step Guide would be helpful. And you are in luck, we included a React Component, that can be used for displaying Step-By-Step Guides with optional codeblocks. Have a look at the example `confetti-button.docs.mdx` file. Here, you'll see the following (*Ignore the SubSectionContainer stuff for now*) in the Content section:

```mdx
<HowToStep index='1' title="Install Dependencies">
Icons by Lucide.
  <Codeblock fileName="cli">
    ```bash
        npm install lucide-react
    ```
  </Codeblock>
</HowToStep>
<HowToStep index='2' title="Copy the Source Code">
  ...
</HowToStep>
```

- Each HowToStep has (1) an `index` which is used as a step indicator, and (2) a `title` which is used as the name of the step. Each HowToStep will be rendered with a border and the grey triangle on the left.
- Each Codeblock has a `fileName` which is displayed above the actual codeblock to indicate to the user in which file (or cli) they should be working in.
- Further, each Codeblock has some actual programming code inside which is enclosed in 3 ticks (`) on top & bottom. After the first one, you can indicate a programming language (like tsx or bash). The code in the Codeblock is being formatted nicely. For reference, have a look at the actual rendering of the [Confetti Button on the Live Preview Page of the Ui Component Library](https://bhq-ui-component-library-steel.vercel.app/buttons/confetti-button)

- You can have as many HowToSteps as you want but wrap them with the `<SubSectionInnerContainer>` component.
- You can have as many Codeblocks within a HowToStep as you want.

For ease of use, just copy the contents of the file `example-component.docs.mdx` for each new product. This has the basic outline that you want.

#### Custom MDX Components

If you want to make changes or add new React Components that you can then use within your Content, you'll need to work with the file `app/_constants/mdx-components.tsx`.

Adding new components is easy:

1) Create a new component in a .tsx file and store it in `app/_components`, e.g. `NewComponent.tsx`
2) Import the new component in the `mdx-components.tsx` file with `import NewComponent from '@/components/NewComponent';`
3) Add the component to the `const CUSTOM_MDX_COMPONENTS` exactly as the Codeblock component has been added.
4) Use your new component in the Content of a .DOCS.MDX file like `<NewComponent>Test</NewComponent>`

## The .TSX File

First of all, this file is optional!

You'll only want it, if you have something to render in the 'Preview Box' on your Product's Product Page. For reference, go to `https://lendingstack.com/components/button-back-to-top` and check the 'Preview' section in which the 'Back to top'-Button is actually being rendered. The source code of this button would be placed in the `button-back-to-top.tsx` file.

So, the .tsx file itself is straightforward. It is a working (meaning functional) version of your Product which can be rendered visually.
If we stick to the 'Confetti Button' example, this file should contain the source code of the Confetti Button. That is it.

The only caveat is that you need to install any necessary dependencies of your Product because you will actually render the Product on the Product Page.

For example: You want to show a button that uses framer-motion as a dependency, then you'll need to install framer-motion (because the Ui Component Library itself is not using framer-motion).

Have a look at the example `confetti-button.tsx` file and how it is calling dependencies like "useState", "toast", "Button", "Confetti". Technically speaking, you could move the file `confetti-button.tsx` to the `/app/_components` folder an just call it from any other component and it would work. That's how 'functional' this .tsx file needs to be.

```tsx
import {ConfettiButton} from '@/components/confetti-button'

export default function SamplePage(){
    return(
        <ConfettiButton/>
    )
}
```
