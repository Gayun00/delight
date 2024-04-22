/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#363062",
        },
        gray: {
          primary: "#6B6B6B",
          secondary: "#363062",
          third: "#BDBDBD",
          background: "#F5F5F5",
          foreground: "#E2E2E2",
        },
        green: {
          primary: "#5BDAA4",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "20px",
        md: "8px",
        sm: "4px",
      },
      fontSize: {
        "2xl": "24px",
        xl: "18px",
        lg: "16px",
        md: "14px",
        sm: "12px",
      },
      fontWeight: {
        extraBold: "700",
        bold: "600",
        semiBold: "500",
        medium: "400",
      },
      lineHeight: {
        "2xl": "36px",
        xl: "27px",
        lg: "24px",
        md: "22px",
        sm: "21px",
        xs: "18px",
      },
    },
  },
  plugins: [],
};
