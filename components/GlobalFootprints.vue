<template>
    <section class="bg-background py-16 relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <!-- Section Heading -->
             <div class="text-center mb-16 scroll-reveal">
                <h2 class="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                    <span class="text-foreground">Our</span>
                    <span class="relative inline-block text-primary px-1"><span class="relative z-10">Global</span><span
                            class="absolute inset-x-0 bottom-1 h-4 bg-primary/20 -z-0 rounded"></span></span>
                    <span class="text-foreground">Footprints</span>
                </h2>
                <p class="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">We've traveled
                    across
                    the globe, leaving memories in every corner.
                    Explore Destination spotlights and stories from across the world..</p>
            </div>

            <!-- Spotlight Grid -->
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="(dest, i) in destinations" :key="i" :data-index="i"
                    class="footprint-card group relative rounded-2xl overflow-hidden shadow-lg bg-card opacity-0 transform translate-y-12 transition-all duration-700 ease-out"
                    :class="{
                        'opacity-100 translate-y-0 animate-slide-in-up': visibleCards[i]
                    }">
                    <!-- Image -->
                    <img :src="`/${dest.image}`" :alt="dest.name"
                        class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />

                    <!-- Overlay -->
                    <div
                        class="absolute inset-0 bg-secondary/60 opacity-0 hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                        <h3 class="text-xl font-display text-primary-foreground mb-2">
                            {{ dest.name }}
                        </h3>
                        <p class="text-sm text-secondary-foreground">
                            {{ dest.excerpt }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div class="absolute bottom-20 left-10 w-24 h-24 bg-primary-glow/10 rounded-full animate-parallax-float"></div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const destinations = [
    {
        name: "Paris, France",
        image: "france.jpg",
        excerpt: "City of Lights with timeless charm, art, and culture."
    },
    {
        name: "Rome, Italy",
        image: "italy.jpg",
        excerpt: "Ancient ruins and modern vibrance blend beautifully."
    },
    {
        name: "Barcelona, Spain",
        image: "spain.jpg",
        excerpt: "Colorful streets, Gaudí’s architecture, and the sea breeze."
    },
    {
        name: "Amsterdam, Netherlands",
        image: "netherlands.jpg",
        excerpt: "Charming canals, cycling culture, and tulip fields."
    },
    {
        name: "Prague, Czech Republic",
        image: "czech.jpg",
        excerpt: "Medieval skyline with fairytale vibes and history."
    },
    {
        name: "Valletta, Malta",
        image: "malta.jpg",
        excerpt: "Azure waters, ancient temples, and sun-drenched landscapes."
    }
]

const visibleCards = ref<boolean[]>([])

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"))

                    // add delay for staggered animation
                    setTimeout(() => {
                        visibleCards.value[index] = true
                    }, index * 120) // 120ms delay per card

                    observer.unobserve(entry.target) // Animate once
                }
            })
        },
        { threshold: 0.2 }
    )

    document.querySelectorAll(".footprint-card").forEach((el) => {
        observer.observe(el)
    })
})
</script>