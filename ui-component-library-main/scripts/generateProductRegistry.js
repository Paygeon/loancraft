// Purpose: Generate a JSON file containing the product registry for the app.
// Will be called during build time.
// Don't change anything in here.

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const productsDirectory = path.join(process.cwd(), './app/_products');
const outputDirectory = path.join(process.cwd(), './app/_registry');
const productRegistryFile = path.join(outputDirectory, 'productRegistry.json');

if (!fs.existsSync(outputDirectory)) {
	fs.mkdirSync(outputDirectory, { recursive: true });
}

const getProductLines = () =>
	fs
		.readdirSync(productsDirectory, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

const getProductsForLine = (productLine) => {
	const productLinePath = path.join(productsDirectory, productLine);
	return fs
		.readdirSync(productLinePath, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => {
			const productPath = path.join(
				productLinePath,
				dirent.name,
				`${dirent.name}.docs.mdx`
			);
			const fileContents = fs.readFileSync(productPath, 'utf8');
			const { data } = matter(fileContents);
			return { ...data, productLine };
		});
};

const generateProductRegistry = () => {
	const productLines = getProductLines();
	const registry = productLines.reduce((acc, line) => {
		acc[line] = getProductsForLine(line);
		return acc;
	}, {});

	fs.writeFileSync(productRegistryFile, JSON.stringify(registry, null, 2));
	console.log('Product registry generated successfully:', productRegistryFile);
};

generateProductRegistry();
