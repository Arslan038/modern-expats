<template>
  <div class="flex items-center">
    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
      <slot name="icon" />
    </div>
    <div>
      <div class="font-body font-semibold text-foreground">{{ label }}</div>
      <div class="font-body text-muted-foreground">{{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string }>()
</script>

<style scoped>
</style>


