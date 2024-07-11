/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compiler: {
        reactRemoveProperties: {
            throwIfNamespace: false,
        },
    },
};

export default nextConfig;