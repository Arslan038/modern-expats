<template>
  <section id="our-story" class="relative py-20 bg-background overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
          <span class="text-foreground">Our</span> <span class="relative inline-block text-primary"><span
              class="relative z-10">Story</span><span
              class="absolute inset-x-0 bottom-1 h-4 bg-primary/20 -z-0 rounded"></span></span>
        </h2>
        <p class="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We started Modern Expats as two travelers who traded routine for the road. What began with just a backpack and
          a Wi-Fi signal has taken us across 30+ countries, where we’ve lived, worked, and called the world our home.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Images collage -->
        <div class="relative order-2 lg:order-1 scroll-reveal">
          <div class="grid grid-cols-2 gap-2">
            <div class="row-span-2 rounded-2xl overflow-hidden premium-card h-80 group">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                alt="Maldives Beach"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="rounded-2xl overflow-hidden premium-card h-40 group">
              <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop"
                alt="Paris Eiffel Tower"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="rounded-2xl overflow-hidden premium-card h-40 group">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
                alt="Italy Cinque Terre"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div class="absolute -z-10 -top-6 -left-6 w-28 h-28 bg-primary/20 rounded-full animate-float"></div>
          <div
            class="absolute -z-10 -bottom-8 -right-8 w-20 h-20 bg-primary-glow/20 rounded-full animate-parallax-float">
          </div>
        </div>

        <!-- Text block -->
        <div class="order-1 lg:order-2 space-y-6 scroll-reveal">
          <p class="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
            Along the way, we’ve secured 4 global residencies, built a community, and helped hundreds of people unlock
            borderless living. What drives us is simple: <span class="font-semibold text-primary">Freedom</span>. <span
              class="font-semibold text-primary">Belonging</span>. A lifestyle without borders.
          </p>
          <p class="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
            Modern Expats isn’t just our journey, it’s an invitation. To join a movement of nomads, expats, and global
            professionals who are proving every day that the world is one home.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm">30+ countries</span>
            <span class="px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm">4 residencies</span>
            <span class="px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm">Hundreds helped</span>
          </div>

          <div class="pt-4">
            <button @click="scrollToSection('services')"
              class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScroll } from '../composables/useScroll'
const { scrollToSection } = useScroll()
</script>

<style scoped></style>
