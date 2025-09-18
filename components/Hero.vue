<template>
  <section id="home" class="hero-section relative h-screen flex items-center justify-center overflow-hidden">
    <div id="hero-bg" class="absolute inset-0 z-0 hero-bg">
      <img :src="heroUrl" alt="Digital nomad overlooking mountain landscape" class="w-full h-full object-cover scale-110" />
      <div class="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent"></div>
    </div>

    <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
    <div class="absolute top-1/3 right-1/3 w-16 h-16 bg-primary-glow/30 rounded-full animate-parallax-float"></div>
    <div class="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary/10 rounded-full animate-float" style="animation-delay: 2s;"></div>

    <div class="relative z-10 container mx-auto px-6 text-center">
      <div id="hero-content" class="hero-content">
        <h1 class="font-display font-bold text-xl md:text-3xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
          <span class="block animate-slide-in-up">Modern Living,</span>
          <span class="block animate-slide-in-up text-primary" style="animation-delay: 0.2s;">Global Belonging</span>
        </h1>
        <p class="font-body text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style="animation-delay: 0.4s;">
          Empowering Digital Nomads, Expats, And Global Professionals<br class="hidden md:block" />
          To Live, Work, And Thrive Without Borders.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style="animation-delay: 0.6s;">
          <button @click="scrollToSection('contact')" class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow-effect">
            Get Your Visa Today
          </button>
          <button @click="scrollToSection('services')" class="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary font-body font-semibold text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
            Explore Services
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-in-up" style="animation-delay: 0.8s;">
          <div class="text-center"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">500+</div><div class="font-body text-primary-foreground/80">Visas Processed</div></div>
          <div class="text-center"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">95%</div><div class="font-body text-primary-foreground/80">Success Rate</div></div>
          <div class="text-center"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">50+</div><div class="font-body text-primary-foreground/80">Countries</div></div>
          <div class="text-center"><div class="font-display font-bold text-3xl md:text-4xl text-primary mb-2">24/7</div><div class="font-body text-primary-foreground/80">Support</div></div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
        <div class="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScroll } from '../composables/useScroll'

const heroUrl = '/hero-travel.jpg'
const { scrollToSection } = useScroll()

onMounted(() => {
  // const heroBg = document.getElementById('hero-bg')
  // const heroContent = document.getElementById('hero-content')
  // let mousePosition = { x: 0, y: 0 }

  // function updateHero3D() {
  //   if (heroContent) {
  //     const tiltX = mousePosition.y * 2.5
  //     const tiltY = mousePosition.x * -2.5
  //     ;(heroContent as HTMLElement).style.transform = `translateZ(50px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  //   }
  // }
  // function onMouseMove(e: MouseEvent) {
  //   const { innerWidth, innerHeight } = window
  //   mousePosition = { x: (e.clientX - innerWidth / 2) / innerWidth, y: (e.clientY - innerHeight / 2) / innerHeight }
  //   updateHero3D()
  // }
  // function onScrollParallax() {
  //   const parallaxOffset = window.scrollY * 0.5
  //   if (heroBg) {
  //     const tiltX = mousePosition.y * 5
  //     const tiltY = mousePosition.x * -5
  //     ;(heroBg as HTMLElement).style.transform = `translateY(${parallaxOffset}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  //   }
  //   updateHero3D()
  // }
  // window.addEventListener('mousemove', onMouseMove)
  // window.addEventListener('scroll', onScrollParallax)
})
</script>

<style scoped>
</style>

