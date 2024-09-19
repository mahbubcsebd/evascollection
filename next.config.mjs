// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        domains: [
            'admin.daarib.com',
            'shop.uibarn.com',
            '127.0.0.1:8000',
            '192.168.0.124',
            '127.0.0.1',
            'admin.evascollection.shop',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.daarib.com',
                port: '',
                pathname: '/storage/**',
            },
            {
                protocol: 'https',
                hostname: 'shop.uibarn.com',
                port: '',
                pathname: '/storage/10/**',
            },
        ],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
