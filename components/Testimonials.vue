<template>
  <section id="testimonials" class="testimonials-section py-20 bg-background relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
          <span class="text-foreground">Voices of </span> 
          <span class="relative inline-block text-primary px-1"><span class="relative z-10">Modern Expats</span><span class="absolute inset-x-0 bottom-1 h-4 bg-primary/20 -z-0 rounded"></span></span>
        </h2>
        <p class="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Join hundreds of successful travelers who trusted us with their visa journey</p>
        <div class="mt-12 relative max-w-4xl mx-auto">
          <img :src="happyTravelersUrl" alt="Happy travelers with approved visas" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl" />
          <div class="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent rounded-2xl"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <TestimonialCard initials="S" name="Sarah Chen" role="Digital Marketing Manager" route="Canada → Portugal" quote="Modern Expats made my digital nomad visa application seamless. Their expertise and guidance helped me secure my Portuguese D7 visa in just 6 weeks!" />
        <TestimonialCard initials="M" name="Marcus Johnson" role="Software Developer" route="USA → Estonia" quote="Outstanding service! The team provided detailed documentation support and interview preparation. Now I'm coding from beautiful Tallinn thanks to their help." />
        <TestimonialCard initials="E" name="Elena Rodriguez" role="Travel Blogger" route="Spain → Mexico" quote="Their travel consulting service is incredible. Not only did they help with my visa, but their destination insights made my 6-month stay in Mexico unforgettable." />
        <TestimonialCard initials="D" name="David Kim" role="Freelance Designer" route="Australia → Germany" quote="Professional, reliable, and results-driven. Modern Expats turned what seemed impossible into a smooth journey to my dream destination." />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center scroll-reveal">
        <div class="premium-card p-6"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">500+</div><div class="font-body text-muted-foreground">Happy Clients</div></div>
        <div class="premium-card p-6"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">100%</div><div class="font-body text-muted-foreground">Approval Rate</div></div>
        <div class="premium-card p-6"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">30+</div><div class="font-body text-muted-foreground">Countries Served</div></div>
        <div class="premium-card p-6"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">4.9</div><div class="font-body text-muted-foreground">Average Rating</div></div>
      </div>
    </div>

    <div class="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full animate-float"></div>
    <div class="absolute bottom-10 right-20 w-28 h-28 bg-primary-glow/10 rounded-full animate-parallax-float"></div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '../components/TestimonialCard.vue'

const happyTravelersUrl = '/happy-travelers.jpg'
</script>

<style scoped>
</style>

