/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          blue: "#4F46E5",
          purple: "#8B5CF6",
        },
        "light-gray": "#F5F5F5",
        "dark-gray": "#333333",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4F46E5, #8B5CF6)',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0,0,0,0.05)',
      },
      spacing: {
        'section': '80px',
      },
      maxWidth: {
        'container': '1140px',
      },
      height: {
        'hero': '90vh',
      },
    },
  },
  plugins: [],
} 