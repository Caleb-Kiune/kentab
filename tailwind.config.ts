import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        lora: ["var(--font-lora)"],
        serif: ["var(--font-lora)", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0066A1", // More vibrant Kentab blue
          foreground: "hsl(var(--primary-foreground))",
          50: "#E6F3FC",
          100: "#CCE7F9",
          200: "#99CFF3",
          300: "#66B7ED",
          400: "#339FE7",
          500: "#0066A1", // Main blue
          600: "#0052A1",
          700: "#003D76",
          800: "#00294F",
          900: "#001427",
        },
        secondary: {
          DEFAULT: "#7ED321", // More vibrant Kentab green
          foreground: "hsl(var(--secondary-foreground))",
          50: "#F3FCEB",
          100: "#E7F9D7",
          200: "#CFF3AF",
          300: "#B7ED87",
          400: "#9FE75F",
          500: "#7ED321", // Main green
          600: "#65A91A",
          700: "#4C7F14",
          800: "#32540D",
          900: "#192A07",
        },
        accent: {
          DEFAULT: "#FF9500", // More vibrant warm accent
          foreground: "#FFFFFF",
          50: "#FFF5E6",
          100: "#FFEACC",
          200: "#FFD699",
          300: "#FFC166",
          400: "#FFAD33",
          500: "#FF9500", // Main accent
          600: "#CC7700",
          700: "#995900",
          800: "#663C00",
          900: "#331E00",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        kentab: {
          blue: "#0066A1",
          green: "#7ED321",
          accent: "#FF9500", // New vibrant warm accent color
          lightBlue: "#E6F3FC", // Light blue for backgrounds
          lightGreen: "#F3FCEB", // Light green for backgrounds
          warmGray: "#F9F7F4", // Warm gray for subtle backgrounds
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #E6F3FC 0%, #F3FCEB 100%)",
        "blue-gradient": "linear-gradient(135deg, #0066A1 0%, #0088D4 100%)",
        "green-gradient": "linear-gradient(135deg, #7ED321 0%, #9BE54C 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
