<template>
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
    <div class="container mx-auto px-6 py-2 md:py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img :src="logoUrl" width="140" alt="Modern Expats" />
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <button @click="scrollToSection('home')" class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Home</button>
          <button @click="scrollToSection('our-story')" class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Our Story</button>
          <button @click="scrollToSection('why-expats')" class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Why Modern Expats</button>
          <button @click="scrollToSection('services')" class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Services</button>
          <button @click="scrollToSection('testimonials')" class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Testimonials</button>
          <button @click="scrollToSection('contact')" class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Contact</button>
        </div>
        <div class="hidden md:block">
          <button @click="scrollToSection('contact')" class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Get Started</button>
        </div>
        <div class="md:hidden">
          <button @click="scrollToSection('contact')" class="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg transition-all duration-300">Contact</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScroll } from '../composables/useScroll'

const logoUrl = '/logo.png'
const { scrollToSection } = useScroll()

onMounted(() => {
  const navbar = document.getElementById('navbar')
  function onScroll() {
    if (!navbar) return
    const isScrolled = window.scrollY > 50
    if (isScrolled) {
      navbar.classList.add('navbar-scrolled')
      navbar.style.background = 'rgba(250, 250, 250, 0.8)'
      navbar.style.backdropFilter = 'blur(12px)'
      navbar.style.borderBottom = '1px solid hsl(20, 13%, 91%)'
      navbar.style.boxShadow = '0 4px 20px -2px hsl(24, 100%, 50% / 0.1)'
    } else {
      navbar.classList.remove('navbar-scrolled')
      navbar.style.background = 'transparent'
      navbar.style.backdropFilter = 'none'
      navbar.style.borderBottom = 'none'
      navbar.style.boxShadow = 'none'
    }
  }
  window.addEventListener('scroll', onScroll)
})
</script>

<style scoped>
</style>

