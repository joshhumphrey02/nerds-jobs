/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn-images.himalayas.app',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'ui-avatars.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'empllo.com',
				pathname: '**',
			},
		],
	},
	experimental: { esmExternals: true },
};

export default nextConfig;
