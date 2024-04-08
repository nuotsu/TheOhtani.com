/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://instagram.com/the.ohtani',
				permanent: true,
			},
		]
	},
}

export default nextConfig
