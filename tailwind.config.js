/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue1": "#020091",
        "custom-blue2": "#00003E",
        "custom-pink1": "#6F0044",
        "custom-pink2": "#FE004B",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(100deg, #020091 0%, #00003E 25%, #6F0044 75%, #FE004B 100%)",
      },
      animation: {
        "gradient-animation": "gradientAnimation 1s infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
