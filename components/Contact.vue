<template>
  <section id="contact" class="contact-section relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden" 
    style="background-image: url('/boarding-pass.jpg');">

    <!-- Overlay for readability -->
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="container mx-auto px-6">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="font-display font-bold text-4xl md:text-6xl text-secondary-foreground mb-6">
          Start Your <span class="relative inline-block">
            <span class="relative z-10 text-primary">Journey</span>
            <span class="absolute inset-x-0 bottom-1 h-4 bg-primary/30 -z-0 rounded"></span>
          </span> 
          <span class="text-primary-foreground">Today</span>
        </h2>
        <p class="font-body text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
          The world isn’t meant to be visited, it’s meant to be lived. Let us guide your visa path so you can belong anywhere, and build a life without borders built by nomads, for nomads.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="relative bg-white rounded-2xl shadow-2xl border-4 border-dashed border-orange-500 scroll-reveal">
          <div class="p-8">
            <h3 class="font-display font-bold text-2xl text-foreground mb-6">Get Free Consultation</h3>
            <form class="space-y-6" @submit.prevent="submitContact">
              <div>
                <input v-model="form.name" type="text" placeholder="Your Full Name" required class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300" />
              </div>
              <div>
                <input v-model="form.email" type="email" placeholder="Your Email Address" required class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300" />
              </div>
              <div>
                <input v-model="form.destination" type="text" placeholder="Your Destination" required class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300" />
              </div>
              <div>
                <select v-model="form.service" required class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300">
                  <option value="">Select Service Type</option>
                  <option value="digital-nomad">Digital Nomad Visa</option>
                  <option value="visitor">Visitor Visa</option>
                  <option value="travel-consulting">Travel Consulting</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              <div>
                <textarea v-model="form.message" placeholder="Tell us about your travel plans and visa requirements..." rows="5" required class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"></textarea>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Send Message & Get Free Quote
              </button>
            </form>
          </div>
        </div>

        <!-- Right Column (Contact Info & Why Choose Us) remains unchanged -->
        <div class="space-y-8 scroll-reveal">
          <div class="premium-card">
            <div class="p-8">
              <h3 class="font-display font-bold text-2xl text-foreground mb-6">Get in Touch</h3>
              <div class="space-y-6">
                <ContactItem label="Email Us" value="info@modernexpats.com">
                  <template #icon>
                    <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </template>
                </ContactItem>
                <!-- Other ContactItem components unchanged -->
              </div>
            </div>
          </div>

          <!-- Why Choose Us Card unchanged -->
        </div>
      </div>
    </div>

    <div class="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
    <div class="absolute bottom-20 right-10 w-24 h-24 bg-primary-glow/10 rounded-full animate-parallax-float"></div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ContactItem from '../components/ContactItem.vue'

const form = reactive({ name: '', email: '', destination: '', service: '', message: '' })

async function submitContact() {
  try {
    const resp = await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        ...form
      }
    })


    // Show toast notification
    const toast = document.getElementById('toast')
    if (resp && toast) {
      const span = toast.querySelector('span')
      if (span) span.textContent = "Message Sent Successfully! We'll get back to you within 24 hours with personalized guidance."
      toast.setAttribute('style', 'transform: translateX(0); opacity: 1;')
      setTimeout(() => toast.setAttribute('style', 'transform: translateX(100%); opacity: 0;'), 5000)
    }

    // Reset form
    Object.assign(form, { name: '', email: '', destination: '', service: '', message: '' })
  } catch (error) {
    console.error(error)
    alert("Failed to send message ❌")
  }
}
</script>
