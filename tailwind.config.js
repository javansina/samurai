/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      screens: {
         xs: '480px',
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
      },
      extend: {
         colors: {
            myWhite: {
               100: '#d4d4d4',
            },
            myBlue: {
               20: '#e3e3e4',
               100: '#57c5c6',
               200: '#0067a5',
               300: '#1c39bb',
            },
            myBrown: {
               100: '#f59918',
               200: '#ae6a0b',
            },
         },
         container: {
            center: true,
            padding: '8rem',
         },
      },
   },
   plugins: [],
};
