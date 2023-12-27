/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    css: ["~/assets/css/main.css"],
    theme: {
        container: {
            maxWidth: "100%",
            padding: "1.25rem",
            width: {
                DEFAULT: "1rem",
                sm: "100%",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1320px",
            },
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
        },
        extend: {},
    },
    plugins: [],
};
