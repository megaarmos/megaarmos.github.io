// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "Arion Paul",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Arion Paul is a frontend developer." },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      bodyAttrs: {
        style: "background-color: #000;",
      },
    },
  },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
});
