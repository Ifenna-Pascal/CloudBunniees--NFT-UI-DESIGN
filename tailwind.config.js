/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        irish: ['Mukta', 'sans-serif']
      },
      backgroundImage: {
        faq: "url('/img/faq.png')",
        hero: "url('/img/hero.png')",
        hero_mobile: "url('/img/heroMobile.png')",
        team: "url('/img/team.png')",
        teamOne: "url('/img/teamBg1.png')",
        teamTwo: "url('/img/teamBg2.png')",
        teamThree: "url('/img/teamBg3.png')",
        button: "url('/img/button.png')"
      }
    },
  },
  plugins: [],
}
