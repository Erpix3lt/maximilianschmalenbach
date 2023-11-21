function removeHttps(url) {
    return url.replace(/^https:\/\//, '');
}

console.log("NEXT_PUBLIC_SUPABASE_URL", removeHttps(process.env.NEXT_PUBLIC_SUPABASE_URL))


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
    }
}

module.exports = nextConfig
