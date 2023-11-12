function removeHttps(url) {
    return url.replace(/^https:\/\//, '');
}


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: removeHttps(process.env.NEXT_PUBLIC_SUPABASE_URL),
          },
        ],
    }
}

module.exports = nextConfig
