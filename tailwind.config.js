/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
        "hero-background": "rgb(var(--color-hero-background) / <alpha-value>)",
        "hero-foreground": "rgb(var(--color-hero-foreground) / <alpha-value>)",
        "hero-muted": "rgb(var(--color-hero-muted) / <alpha-value>)",
        "hero-border": "rgb(var(--color-hero-border) / <alpha-value>)",
        "hero-surface": "rgb(var(--color-hero-surface) / <alpha-value>)",
        "hero-accent": "rgb(var(--color-hero-accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgb(15 23 42 / 0.08)",
      },
    },
  },
  plugins: [],
};
