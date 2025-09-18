<template>
  <div class="bg-background text-foreground font-body antialiased">
    <Navbar />

    <Hero />
    <OurStory />

    <Services />

    <Testimonials />

    <Contact />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import OurStory from '../components/OurStory.vue';
import Services from '../components/Services.vue';
import Testimonials from '../components/Testimonials.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue'

onMounted(() => {
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('revealed') })
  }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
})
</script>


<style scoped>
</style>

