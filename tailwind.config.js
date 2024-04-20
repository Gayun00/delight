/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "20px",
        md: "8px",
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
      colors: {
        purple: {
          primary: "#363062",
        },
        gray: {
          primary: "#6B6B6B",
          secondary: "#363062",
          third: "#BDBDBD",
          background: "#F5F5F5",
        },
        green: {
          primary: "#5BDAA4",
        },
      },
    },
  },
  plugins: [],
};
