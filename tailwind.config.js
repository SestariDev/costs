/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclua todos os arquivos relevantes do seu projeto
  ],
  theme: {
    extend: {
      screens: {
        s1: "240px",
        s2: "480px",
        sX: "520px",
        s3: "720px",
        sM: "850px",
        s4: "960px",
        s5: "1200px",
        sT: "1024px",
        s6: "1440px",
        s7: "1680px",
        s8: "1920px",
        s9: "2100px",
        'sm-md': {'min': '640px', 'max': '999px'},
        'md-lg': {'min': '900px', 'max': '960px'},
        'lg-xl': {'min': '1420px', 'max': '1500px'},
        'sm-mobile': {'min': '0px', 'max': '350px'},
        'bg-mobile': {'min': '350px', 'max': '750px'},
        'mobile': {'min': '0px', 'max': '768px'},
        'md-desktop': {'min': '768px', 'max': '1420px'},
        'desktop': {'min': '768px', 'max': '10000px'},
        'homeMobile': {'min': '0px', 'max': '850px'},
        'homeDesktop': {'min': '850px', 'max': '10000px'},
        'techday': {'min': '1024', 'max': '1000000px'}
      },
    },
  },
  plugins: [],
}
