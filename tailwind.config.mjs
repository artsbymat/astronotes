export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      },
      colors: {
        'light-primary': '#558C8C',
        'light-secondary': '#CE796B',
        'light-white': '#F8F8F5',
        'light-black': '#44525F',
        'light-gray': '#69757F',
        'dark-black': '#2C3639',
        'dark-gray': '#3F4E4F',
        'dark-brow': '#A27B5C',
        'dark-white': '#DCD7C9'
      }
    }
  },
  plugins: []
};
