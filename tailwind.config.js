/** @type {import('tailwindcss').Config} */

const textshadow = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('assets/bg_login.png')",
        'plano-bg': "url('assets/bg_plano.png')",
        'component-bg': "url('assets/bg_component.png')",
        'sun-bg': "url('assets/sun_bg.png')",
        'social-bg': "url('assets/social_bg.png')",
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        xl: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      content: {
        'tunico': "url('assets/tunico.png')",
        'suntrans': "url('assets/suntrans.png')"
      }
    },
  },
  plugins: [],
}