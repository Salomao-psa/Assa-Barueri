import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /*fontFamily para poder usar varias fonts no projeto*/
      fontFamily: {
        lato: ['Lato'],
        lilita: ['Lilita One'],
      },
    },
  },
  plugins: [],
};
export default config;
