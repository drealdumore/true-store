/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'emojis.sh'
                // hostname: 'utfs.io'
            }
        ]
    }
};

export default nextConfig;
