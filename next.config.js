/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Konfigurasi image domains
  images: {
    // Domains digunakan sebagai fallback saja, remotePatterns lebih direkomendasikan
    domains: [
      'upload.wikimedia.org',
      'lelogama.go-jek.com',
      'th.bing.com',
      'logos-world.net',
      'logodownload.org',
      '3.bp.blogspot.com',
      '2.bp.blogspot.com',
      'download.logo.wine',
      'i.pinimg.com'
    ],
    // Menggunakan remotePatterns untuk konfigurasi yang lebih aman dan spesifik
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lelogama.go-jek.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logodownload.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '3.bp.blogspot.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '2.bp.blogspot.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'download.logo.wine',
        pathname: '/**',
      }
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    disableStaticImages: false,
  },
  eslint: {
    // Matikan pengecekan ESLint saat build produksi
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Matikan pengecekan TypeScript saat build produksi
    ignoreBuildErrors: true,
  },
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig; 