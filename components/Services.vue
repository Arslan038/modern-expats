<template>
  <section id="services" class="services-section py-20 bg-muted relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
          <span class="text-foreground">Borderless</span> 
          <span class="relative inline-block text-primary px-1"><span class="relative z-10">Pathways</span><span class="absolute inset-x-0 bottom-1 h-4 bg-primary/20 -z-0 rounded"></span></span>
        </h2>
        <p class="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From digital nomad visas to comprehensive travel consulting,
          we provide expert guidance for every step of your journey.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard :image="digitalNomadUrl" price="Starting from $299" title="Digital Nomad Visas" desc="Specialized guidance for remote workers seeking long-term stays in digital nomad-friendly countries." :bullets="['Remote Work Permits','Long-term Stays','Multiple Countries','Expert Guidance']" @action="scrollToSection('contact')" />
        <ServiceCard :image="visaConsultationUrl" price="Starting from $199" title="Visitor Visas" desc="Comprehensive support for tourist and business visitor visas to destinations worldwide." :bullets="['Tourist Visas','Business Visas','Document Preparation','Interview Support']" @action="scrollToSection('contact')" />
        <ServiceCard :image="visaConsultationUrl" price="Starting from $99" title="Travel Consulting" desc="Personalized travel advice, itinerary planning, and destination insights from experienced travelers." :bullets="['Route Planning','Destination Guides','Cultural Insights','Travel Stories']" @action="scrollToSection('contact')" />
      </div>

      <div class="text-center mt-16 scroll-reveal">
        <p class="font-body text-lg text-muted-foreground mb-6">Ready to start your journey? Get personalized consultation today.</p>
        <button @click="scrollToSection('contact')" class="bg-secondary text-secondary-foreground font-body font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Schedule Free Consultation</button>
      </div>
    </div>

    <div class="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
    <div class="absolute bottom-20 left-10 w-24 h-24 bg-primary-glow/10 rounded-full animate-parallax-float"></div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '../components/ServiceCard.vue'
import { useScroll } from '../composables/useScroll'

const digitalNomadUrl = '/digital-nomad.jpg'
const visaConsultationUrl = '/visa-consultation.jpg'
const { scrollToSection } = useScroll()
</script>

<style scoped>
</style>

