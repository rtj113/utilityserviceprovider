/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  // purge: [
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}'
  // ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#9E542F',
        teritary: '#DE500B',
        quaternary: '#348982',
        quinary: '#5E4234',
        usp2: '#1879F2',
        usp3: '#18BEF2',
        usp4: '#18F296',
        usp5: '#1835F2'
      },
      backgroundImage: {
        uspbgimageone: "url('/public/solarFarm.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
