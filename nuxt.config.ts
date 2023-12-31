// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "@nuxt/content",
        "nuxt-icon",
        "@aleios10/nuxt-scroll-spy-composable",
        "floating-vue/nuxt",
    ],
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
