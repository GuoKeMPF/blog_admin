import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {

	compiler: {
		removeConsole: {
			exclude: ['error', 'info']
		}
	},
	trailingSlash: false,
	images: {
		deviceSizes: [390, 435, 768, 1024, 1280]
	},
};

const millionConfig = {
	auto: {
		rsc: true
	}
}

const config = million.next(nextConfig, millionConfig)

export default config;
