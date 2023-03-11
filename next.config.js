/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/personal',
                destination: '/multi/multiPage?step=1'
            },
            {
                source: '/confirm',
                destination: '/multi/multiPage?step=2'
            },
        ]

    }
}

module.exports = nextConfig
