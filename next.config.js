/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true, // Ensures that URLs end with a trailing slash for static export
	output: "export", // Tells Next.js to export as static HTML
	distDir: "out", // Output directory for static files
};

module.exports = nextConfig;
