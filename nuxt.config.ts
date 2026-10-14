// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    // Set via NUXT_DATABASE_URL in .env (Supabase transaction pooler URI)
    supabaseDatabaseUrl: process.env.SUPABASE_DATABASE_URL!,
  },

  compatibilityDate: "2026-06-30",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
