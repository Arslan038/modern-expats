<template>
  <div class="premium-card p-8 scroll-reveal">
    <div class="flex items-center mb-4">
      <svg v-for="i in 5" :key="i" class="w-5 h-5 text-primary fill-current" :class="{ 'ml-1': i>1 }" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    </div>
    <blockquote class="font-body text-lg text-foreground leading-relaxed mb-6">{{ quote }}</blockquote>
    <div class="flex items-center">
      <div class="w-12 h-12 bg-gradient-to-r from-primary to-primary-deep rounded-full flex items-center justify-center mr-4">
        <span class="text-primary-foreground font-display font-bold text-lg">{{ initials }}</span>
      </div>
      <div>
        <div class="font-display font-semibold text-foreground">{{ name }}</div>
        <div class="font-body text-sm text-muted-foreground">{{ role }}</div>
        <div class="font-body text-sm text-primary font-semibold">{{ route }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ initials: string; name: string; role: string; route: string; quote: string }>()
</script>

<style scoped>
</style>


