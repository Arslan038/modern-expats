<template>
    <section id="why-modern-expats" class="relative bg-cover bg-center py-16 px-6 md:px-16 bg-no-repeat" style="background-image: url('/passport.jpg');">
        <!-- Overlay for readability -->
        <div class="absolute inset-0 bg-black/85"></div>

        <div class="container mx-auto px-6">
            <div class="text-center mb-16 scroll-reveal">
                <h2 class="font-display font-bold text-4xl md:text-6xl text-secondary-foreground mb-6">
                    <span class="text-secondary-foreground">Why</span>
                    <span class="relative inline-block text-primary px-1"><span class="relative z-10">Modern</span><span
                            class="absolute inset-x-0 bottom-1 h-4 bg-primary/20 -z-0 rounded"></span></span>
                    <span class="text-secondary-foreground">Expats</span>
                </h2>
                <p class="font-body text-lg md:text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
                    A seamless, step-by-step pathway to your new life abroad, backed by real success stories from expats who've made the journey before you.
                </p>
            </div>

            <!-- Timeline -->
            <div class="relative max-w-6xl mx-auto scroll-reveal">
                <!-- Gray background line -->
                <div class="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gray-700 hidden md:block"></div>
                <!-- Orange progress line -->
                <div ref="progressLine"
                    class="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-primary origin-top hidden md:block"
                    :style="{ height: progressHeight + '%' }"></div>

                <!-- Steps -->
                <div v-for="(step, i) in processSteps" :key="i" ref="stepsRefs"
                    class="relative flex flex-col md:flex-row items-center mb-16 md:mb-24 group">
                    <!-- Process Card - Alternating sides -->
                    <div class="w-full md:w-[45%] p-6 rounded-xl shadow-md transition duration-500
                 bg-gray-900/80 border border-gray-700 text-left group-hover:scale-105 hover:shadow-xl"
                        :class="i % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10 order-2'">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full text-black shadow-md border border-2 border-primary
                     transition transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                <component :is="step.icon" class="w-6 h-6 text-primary" />
                            </div>
                            <h3 class="text-lg font-semibold text-primary">{{ step.title }}</h3>
                        </div>
                        <p class="text-sm text-gray-300">{{ step.description }}</p>
                    </div>

                    <!-- Center marker - Hidden on mobile -->
                    <div
                        class="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center hidden md:flex">
                        <div class="w-7 h-7 rounded-full bg-black border border-4 border-primary shadow-md"></div>
                    </div>

                    <!-- Story Card - Alternating sides -->
                    <div class="w-full md:w-[45%] mt-6 md:mt-0 flex items-center gap-4 bg-gray-900/80 border border-gray-700 p-5 rounded-xl shadow-md
                 transition transform duration-300 hover:scale-105 hover:shadow-xl"
                        :class="i % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10 order-1'">
                        <!-- Avatar -->
                        <img :src="step.story.avatar" alt="" class="w-14 h-14 rounded-full object-cover border border-2 border-secondary-foreground
                   transition transform duration-300 hover:scale-110 hover:shadow-lg" />
                        <div>
                            <h4 class="font-semibold text-secondary-foreground">{{ step.story.name }}</h4>
                            <p class="text-sm text-gray-400">{{ step.story.detail }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center">
            <button @click="scrollToSection('contact')" class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Let's start your Journey
          </button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import { useScroll } from '../composables/useScroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ClipboardDocumentCheckIcon,
    DocumentTextIcon,
    PaperAirplaneIcon,
    GlobeAltIcon
} from '@heroicons/vue/24/outline'
const { scrollToSection } = useScroll()

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    {
        title: 'Eligibility Check',
        description: 'We evaluate your profile against visa requirements, ensuring you take the right path from day one and avoid unnecessary delays.',
        icon: ClipboardDocumentCheckIcon,
        story: {
            name: 'Johan – Spain Visa',
            detail: 'Johan successfully obtained his Spain visa in 5 weeks through our detailed guidance and step-by-step assistance.',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop'
        }
    },
    {
        title: 'Documentation Preparation',
        description: 'We guide you to prepare and review all required documents carefully, avoiding common mistakes and ensuring accuracy.',
        icon: DocumentTextIcon,
        story: {
            name: 'Sara – Portugal Residency',
            detail: 'Sara completed her Portugal residency paperwork without delays, thanks to our expert support.',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop'
        }
    },
    {
        title: 'Submission & Guidance',
        description: 'We handle submissions with attention to detail and provide ongoing guidance, keeping you informed at every step.',
        icon: PaperAirplaneIcon,
        story: {
            name: 'Umar – Malta Nomad Visa',
            detail: 'Umar received his Malta Nomad Visa quickly and stress-free, with continuous support from our team.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        }
    },
    {
        title: 'Relocation Success',
        description: 'We help you settle in your new country, providing relocation advice and follow-up support for a smooth transition.',
        icon: GlobeAltIcon,
        story: {
            name: 'Emma – Portugal',
            detail: 'Emma relocated with her family seamlessly, benefiting from our complete relocation support.',
            avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop'
        }
    }
]

const stepsRefs = ref([])
const progressLine = ref(null)
const progressHeight = ref(0)

let scrollTriggerInstance = null

const updateProgress = () => {
    if (!progressLine.value) return

    const timelineElement = progressLine.value.parentElement
    const timelineRect = timelineElement.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Calculate progress based on scroll position relative to timeline
    const timelineTop = timelineRect.top + window.scrollY
    const timelineBottom = timelineRect.bottom + window.scrollY
    const scrollPosition = window.scrollY + windowHeight / 2

    // Calculate progress percentage (0% to 100%)
    let progress = ((scrollPosition - timelineTop) / (timelineBottom - timelineTop)) * 100
    progress = Math.max(0, Math.min(100, progress)) // Clamp between 0 and 100

    progressHeight.value = progress
}

onMounted(() => {
    nextTick(() => {
        // Animate each step on scroll
        stepsRefs.value.forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })

        // Set up scroll listener for progress bar
        window.addEventListener('scroll', updateProgress)
        window.addEventListener('resize', updateProgress)

        // Initial calculation
        updateProgress()

        // GSAP scroll trigger for smooth progress (optional enhancement)
        scrollTriggerInstance = ScrollTrigger.create({
            trigger: progressLine.value.parentElement,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                progressHeight.value = self.progress * 100
            }
        })
    })
})

onUnmounted(() => {
    // Cleanup
    if (scrollTriggerInstance) {
        scrollTriggerInstance.kill()
    }
    window.removeEventListener('scroll', updateProgress)
    window.removeEventListener('resize', updateProgress)
})
</script>