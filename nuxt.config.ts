// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< HEAD
  modules: ["@nuxt/eslint", "@nuxt/ui"],
=======
  modules: ['@nuxt/eslint', '@nuxt/ui'],
>>>>>>> main

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    // Set via NUXT_DATABASE_URL in .env (Supabase transaction pooler URI)
<<<<<<< HEAD
    supabaseDatabaseUrl: process.env.SUPABASE_DATABASE_URL!,
  },

  compatibilityDate: "2026-06-30",
=======
    databaseUrl: ''
  },

  compatibilityDate: '2026-06-30',
>>>>>>> main

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
