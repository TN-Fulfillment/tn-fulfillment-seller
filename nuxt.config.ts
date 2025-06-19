// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "TN Fulfillment Solution For POD & Dropship Seller",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "TN Fulfillment is the all-in-one solution for POD and dropshipping sellers",
        },
      ],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },
  colorMode: {
    classSuffix: "",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  i18n: {
    lazy: true,
    locales: [
      { code: "en", language: "en-US", file: "en.json", name: "english" },
      { code: "vi", language: "vi-VN", file: "vi.json", name: "vietnamese" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "no_prefix",
  },
});
