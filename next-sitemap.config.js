/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: "https://fensterfigiel.de",
	generateRobotsTxt: true, // (optional)
	targetDirectory: "public",
	changefreq: "daily",
	priority: 1.0, // Default priority for all pages

	// This function allows us to customize the sitemap fields for specific URLs
	transform: async (config, url) => {
		// List of pages with priority 1 and daily changefreq
		const priorityPages = [
			"/fensterbauer/moenchengladbach",
			"/fensterbauer/krefeld",
			"/fensterbauer/duesseldorf",
			"/fensterbauer/koeln",
			"/fensterbauer/willich",
			"/fensterbauer/nettetal",
			"/fensterbauer/viersen",
			"/fensterbauer/bracht",
			"/fensterbauer/brugen",
			"/",
			"/fenster",
			"/hausturen",
			"/schiebeturen",
		];

		// Customize the priority and changefreq for those pages
		if (priorityPages.includes(url)) {
			return {
				loc: `${config.siteUrl}${url}`, // URL location
				lastmod: new Date().toISOString(), // Last modified date
				changefreq: "daily", // Custom change frequency
				priority: 1.0, // Custom priority
			};
		}

		// Default values for other pages
		return {
			loc: `${config.siteUrl}${url}`, // URL location
			lastmod: new Date().toISOString(), // Last modified date
			changefreq: "weekly", // Default change frequency
			priority: 0.7, // Default priority
		};
	},
};

module.exports = config;
