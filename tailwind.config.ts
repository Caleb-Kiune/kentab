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
        playfair: ["var(--font-playfair)", "serif"],
        lora: ["var(--font-lora)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#E6EBF0",
          100: "#CCD7E1",
          200: "#99AFD3",
          300: "#6687C5",
          400: "#335FB7",
          500: "#0D3B66", // Base primary color
          600: "#0A2F52",
          700: "#07233D",
          800: "#051829",
          900: "#020C14",
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
          orange: "#FF7A00",
          green: "#2E8B57",
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
        neutral: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#171717",
          900: "#111827",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
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
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
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
