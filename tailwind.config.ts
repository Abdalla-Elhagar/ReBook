import type { Config } from 'tailwindcss'
import tailwindScrollbar from 'tailwind-scrollbar'

const config: Config = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar,
  ],
}

export default config