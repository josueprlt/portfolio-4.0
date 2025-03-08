const {heroui} = require('@heroui/theme');
const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "// Or if using `src` directory:\\\\n    \\\\\\\"./src/**/*.{js,ts,jsx,tsx,mdx}\\\\\\\"",
    "./node_modules/@nextui-org/theme/dist/components/(button|popover|ripple|spinner).js",
    "./node_modules/@heroui/theme/dist/components/(modal|pagination).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        primaryGray: "var(--bg-primary-gray)",
        secondaryGray: "var(--bg-secondary-gray)",
        titleSecondary: "var(--bg-title-secondary)",
        filter: "var(--bg-filter)",

        linkedin: "var(--bg-text-linkedin)",

        html: "var(--bg-text-html)",
        css: "var(--bg-text-css)",
        js: "var(--bg-text-js)",
        sass: "var(--bg-text-sass)",
        php: "var(--bg-text-php)",
        react: "var(--bg-text-react)",
        symfony: "var(--bg-text-symfony)",
        bootstrap: "var(--bg-text-bootstrap)",
        materialui: "var(--bg-text-materialui)",
        tailwind: "var(--bg-text-tailwind)",
        github: "var(--bg-text-github)",
        gitlab: "var(--bg-text-gitlab)",
        docker: "var(--bg-text-docker)",
        vscode: "var(--bg-text-vscode)",
      },
    },
  },
  plugins: [nextui(),heroui()],
}