module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#0F1A2E',
          20: '#172F4C',
          30: '#194486',
        },
        secondary: {
          10: '#BE8F41',
          20: '#D3AE58',
          30: '#8E7923'
        },
        gray: {
          10: '#D6D8DF',
          20: '#DEE8F9',
        },
        arua: '#DEE8F9'
      },

      backgroundImage: {
        'header': "url('/images/header.png')",
        'itaipuMall': "url('/images/itaipu1.png')",
        'private-equity': "url('/images/privateEquity.jpeg')",
        'quemSomos': "url('/images/quemSomosF.png')",
        'mvv': "url('/images/mvv.png')",
        'contato': "url('/images/contato.png')",
      }

    },
  },
  plugins: [],
}