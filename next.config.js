/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	experimental: {appDir: true},
	output: 'standalone',
	reactStrictMode: true,
};

module.exports = nextConfig;
