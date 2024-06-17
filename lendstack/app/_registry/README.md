# IMPORTANT

Don't change the file productRegistry.json manually.
Run the registry build script (pnpm run build:registry) or build your app (e.g. through vercel - which will automatically call the script).

# Explanation

The Product Registry is kind of like a database overview with the folder /app/_products being your local database.
The file will be build during build time once and can then be queried efficiently within your app.
All helper functions are within /app/_lib/registry.ts.
