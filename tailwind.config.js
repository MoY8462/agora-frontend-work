/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'agora': {
        'blue': '#396EB0',
        'red': '#F86A61',
        'gray': {
          100: '#9BAAAA',
          200: '#657172'
        }
      },
      'error': {
        100: '#FED3C0',
        200: '#B2303E',
      },
      'white': {
        'default': '#FFFFFF',
        100: '#F2F7F6'
      },
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'agora': 'url("./assets/icons/Agora.svg")',
        'agora_auth': 'url("./assets/icons/Agora-auth.svg")',
        'agora_icon': 'url("./assets/icons/Agora-icon.svg")',
        'shopping_bag': 'url("./assets/icons/shopping-bag.svg")',
        'user': 'url("./assets/icons/user.svg")',
      },
    },
  },
  plugins: [],
}

