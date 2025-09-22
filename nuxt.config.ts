// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Modern Expats - Expert Visa Consultancy & Travel Stories',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional visa consultancy services for Digital Nomad and Visitor visas. Discover amazing travel stories and get expert guidance for your next adventure.' },
        { name: 'author', content: 'Modern Expats' },
        { property: 'og:title', content: 'Modern Expats | Digital Nomad & Expat Visa & Relocation Services' },
        { property: 'og:description', content: 'Professional visa, relocation, and immigration services for digital nomads & expats. Get expert guidance to live and work abroad with ease.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/hero-travel.jpg' },
        { name: 'description', content: 'Professional visa and relocation services for digital nomads. Specializing in visas for Malta, Spain, Portugal, United Kingdom Asia, and EU.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@modernexpats' },
        { name: 'twitter:image', content: '/hero-travel.jpg' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/custom.css'
  ],
  runtimeConfig: {
    public: {}
  },
  compatibilityDate: '2024-04-03'
})

