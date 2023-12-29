// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/content"],
    googleFonts: {
        download: true,
        families: {
            Rubik: "300..900",
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: { enabled: true },
});
