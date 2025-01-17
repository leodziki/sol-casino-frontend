/** @type {import('tailwindcss').Config} */
import tailwindcssGradients from "tailwindcss-gradients";

export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "linearGradient-1": "linear-gradient(45deg, #36351C, #15171B)",
        "linearGradient-2": "linear-gradient(45deg, #272F39, #15171B)",
        "linearGradient-3": "linear-gradient(45deg, #2E2828, #15171B)",
        "linearGradient-4": "linear-gradient(#15171B, #1F232C)",
        "linearGradient-5": "linear-gradient(45deg, #A860FF, #63FFBE)",
        "linearGradient-6": "linear-gradient(45deg, #15171B, #1F232C)",
        "linearGradient-6": "linear-gradient(90deg, #131518, #1C1F25)",
      }),
      borderRadius: {
        "radius-16": "0.83vw",
        "radius-1": "1.22vw",
        "radius-24": "1.25vw",
      },
      colors: {
        "custom-1": "#1E2127",
        "custom-2": "#7289DA",
        "custom-primary": "#15171B",
        "custom-secondary": "#636F89",
        "custom-SOL-Purple": "#9945FF",
        "custom-SOL-Green": "#14F195",
        "custom-Error": "#E1294A",
        "custom-Pending": "#F5BC29",
        "linearColor-2": ["#272F39", "#15171B"],
        "linearColor-3": ["#2E2828", "#15171B"],
      },
      fontFamily: {
        instagram: ['Instagram Sans', 'sans-serif'],
      },      
      fontSize: {
        "c-8": "0.41vw",
        "c-11": "0.57vw",
        "c-12": "0.62vw",
        "c-16": "0.83vw",
        "c-17": "0.88vw",
        "c-22": "1.14vw",
        "c-24": "1.25vw",
        "c-25": "1.3vw",
        "c-32": "1.66vw",
        "c-39": "2.03vw",
        "c-56": "2.91vw",
      },
      inset: {
        "c-inset-32": "1.66vw",
      },
      spacing: {
        "sp-8": "0.41vw",
        "sp-16": "0.83vw",        
        "sp-24": "1.25vw",
        "sp-25": "1.3vw",
        "sp-32": "1.66vw",
        "sp-37": "1.92vw",
        "sp-39": "2.03vw",
        "sp-47": "2.44vw",
        "sp-48": "2.5vw",
        "sp-64": "3.33vw",
        "sp-77": "4.01vw",
        "sp-78": "4.06vw",
        "sp-82": "4.27vw",
        "sp-90": "4.68vw",
        "sp-96": "5vw",
        "sp-142": "7.39vw",
        "sp-158": "8.22vw",
        "sp-170": "8.85vw",
        "sp-234": "12.18vw",
        "sp-417": "21.71vw",
        "sp-480": "25vw",
        "sp-490": "25.52vw",
        "sp-496": "25.83vw",
        "sp-532": "27.7vw",
        "sp-560": "29.16vw",
        "sp-570": "29.68vw",
        "sp-580": "30.2vw",
        "sp-590": "30.72vw",
        "sp-609": "31.71vw",
        "sp-654": "34.06vw",
        "sp-744": "38.75vw",
        "sp-761": "39.63vw",
        "sp-884": "46.04vw",
        "sp-1008": "52.5vw",
        "sp-1089": "56.71vw",
        "sp-1520": "79.16vw",
      },
      width: {
        t1: "4.18vw",
        t2: "22.96vw",
        t3: "6.22vw",
        t4: "6.22vw",
        t5: "7vw",
        t6: "8vw",
      },
    },
    gradients: {
      linear: {
        1: ["45deg", "#36351C", "#15171B"],
        2: ["45deg", "#272F39", "#15171B"],
        3: ["45deg", "#2E2828", "#15171B"],
        4: ["#15171B", "#1F232C"],
        5: ["45deg", "#A860FF", "#63FFBE"],
      },
    },
  },
  plugins: [tailwindcssGradients],
};
