<template>
  <div>
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-transparent">
      <div class="container mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img :src="logoUrl" width="140" alt="Modern Expats" />
        </div>

        <div class="hidden lg:flex items-center space-x-8">
          <button @click="scrollToSection('home')"
            class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Home</button>
          <button @click="scrollToSection('our-story')"
            class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Our
            Story</button>
          <button @click="scrollToSection('why-expats')"
            class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Why Modern
            Expats</button>
          <button @click="scrollToSection('services')"
            class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Services</button>
          <button @click="scrollToSection('testimonials')"
            class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Testimonials</button>
          <button @click="scrollToSection('contact')"
            class="text-secondary-foreground hover:text-primary transition-colors font-body font-medium">Contact</button>
        </div>

        <div class="hidden lg:block">
          <button @click="scrollToSection('contact')"
            class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Get
            Started</button>
        </div>

        <div class="lg:hidden">
          <button @click="toggleMobileMenu" class="text-primary focus:outline-none z-50 relative">
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <transition name="slide">
      <div v-if="mobileMenuOpen" ref="mobileMenu" id="sidenav"
        class="fixed top-0 right-0 h-full w-64 bg-secondary z-50 p-8 flex flex-col items-center justify-between text-left md:hidden shadow-lg">

        <div class="space-y-6">
          <div class="text-right">
            <button @click="toggleMobileMenu" class="text-primary focus:outline-none z-50 relative">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-right" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </div>
          <button v-for="link in navLinks" :key="link.id" @click="scrollAndClose(link.id)"
            class="w-full text-left text-lg font-medium text-white hover:text-orange-500 transition-colors duration-200 py-3 border-b border-gray-800 last:border-b-0">
            {{ link.label }}
          </button>
          <button @click="scrollAndClose('contact')"
          class="w-full mt-10 bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4">Get
          Started</button>
        </div>

      </div>
      <!-- <button @click="scrollAndClose('home')"
          class="text-secondary-foreground hover:text-primary text-lg font-medium">Home</button>
        <button @click="scrollAndClose('our-story')"
          class="text-secondary-foreground hover:text-primary text-lg font-medium">Our Story</button>
        <button @click="scrollAndClose('why-expats')"
          class="text-secondary-foreground hover:text-primary text-lg font-medium">Why Modern Expats</button>
        <button @click="scrollAndClose('services')"
          class="text-secondary-foreground hover:text-primary text-lg font-medium">Services</button>
        <button @click="scrollAndClose('testimonials')"
          class="text-secondary-foreground hover:text-primary text-lg font-medium">Testimonials</button>
        <button @click="scrollAndClose('contact')"
          class="text-secondary-foreground hover:text-primary text-lg font-medium">Contact</button>
        <button @click="scrollAndClose('contact')"
          class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4">Get
          Started</button> -->
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScroll } from '../composables/useScroll'

const logoUrl = '/logo.png'
const { scrollToSection } = useScroll()
const mobileMenuOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'our-story', label: 'Our Story' },
  { id: 'why-modern-expats', label: 'Why Modern Expats' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
]

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Scroll to section and close mobile menu
const scrollAndClose = (section: string) => {
  scrollToSection(section)
  mobileMenuOpen.value = false
}

const mobileMenu = ref<HTMLElement | null>(null) // Create a ref for the mobile menu

// Handler to close menu on outside click
function handleOutsideClick(event: MouseEvent) {
  // Check if the menu is open and the click is outside the mobile menu itself
  const isHamburgerButton = (event.target as HTMLElement).closest('.md\\:hidden > button');
  if (
    mobileMenuOpen.value &&
    mobileMenu.value &&
    !mobileMenu.value.contains(event.target as Node) &&
    !isHamburgerButton
  ) {
    mobileMenuOpen.value = false
  }
}

function onScroll() {
  const navbar = document.getElementById('navbar')
  const sidenav = document.getElementById('sidenav')

  if (!navbar) return

  if (sidenav) {
    sidenav.style.background = 'rgba(250, 250, 250, 0.9)'
    sidenav.style.backdropFilter = 'blur(12px)'
    sidenav.style.boxShadow = '0 4px 20px -2px hsl(24, 100%, 50% / 0.1)'
  }

  const isScrolled = window.scrollY > 50
  if (isScrolled) {
    navbar.classList.add('navbar-scrolled')
    navbar.style.background = 'rgba(250, 250, 250, 0.9)'
    navbar.style.backdropFilter = 'blur(12px)'
    navbar.style.boxShadow = '0 4px 20px -2px hsl(24, 100%, 50% / 0.1)'
  } else {
    navbar.classList.remove('navbar-scrolled')
    navbar.style.background = 'transparent'
    navbar.style.backdropFilter = 'none'
    navbar.style.borderBottom = 'none'
    navbar.style.boxShadow = 'none'
  }
}

// Navbar scroll effect
onMounted(() => {
  document.addEventListener('mousedown', handleOutsideClick)
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleOutsideClick)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* SideNav slide animation */
.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
</style>
