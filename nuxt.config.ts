// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
        API_TOKEN:process.env.BUTTER_API_TOKEN
    }
})
