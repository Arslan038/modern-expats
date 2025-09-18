<template>
  <div class="premium-card group hover:shadow-xl transition-all duration-500 scroll-reveal">
    <div class="relative overflow-hidden rounded-t-lg h-48">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
      <div class="absolute bottom-4 left-4 right-4">
        <span class="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-body font-semibold rounded-full">{{ price }}</span>
      </div>
    </div>
    <div class="p-8">
      <h3 class="font-display font-bold text-2xl text-foreground mb-2">{{ title }}</h3>
      <p class="font-body text-muted-foreground leading-relaxed mb-6">{{ desc }}</p>
      <ul class="space-y-2 mb-6">
        <li v-for="bullet in bullets" :key="bullet" class="flex items-center text-sm font-body text-muted-foreground">
          <div class="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
          {{ bullet }}
        </li>
      </ul>
      <button @click="$emit('action')" class="w-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Learn More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string; price: string; title: string; desc: string; bullets: string[] }>()
defineEmits<{ (e: 'action'): void }>()
</script>

<style scoped>
</style>


