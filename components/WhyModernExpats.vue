<template>
    <section id="why-expats" class="bg-secondary-foreground/10 py-20 overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16 scroll-reveal">
                <h2 class="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                    <span class="text-foreground">Why</span>
                    <span class="relative inline-block text-primary px-1"><span class="relative z-10">Modern</span><span
                            class="absolute inset-x-0 bottom-1 h-4 bg-primary/20 -z-0 rounded"></span></span>
                    <span class="text-foreground">Expats</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Text block -->
                <div class="order-1 space-y-6 scroll-reveal">
                    <p class="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                        We’re not just consultants — we’re fellow travelers who have walked
                        the expat journey ourselves. Over the years, we’ve explored more than
                        <span class="font-semibold text-primary">30 countries</span> across
                        the globe, immersing ourselves in diverse cultures and communities.
                    </p>
                    <p class="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                        Along the way, we’ve successfully secured
                        <span class="font-semibold text-primary">4 residencies</span>,
                        including within the European Union. That first-hand experience
                        allows us to guide you with clarity, empathy, and practical advice.
                    </p>
                    <p class="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                        Modern Expats exists because we believe moving abroad should feel
                        less like an overwhelming process — and more like the beginning of
                        your next great adventure.
                    </p>

                    <button @click="scrollToSection('services')"
                        class="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Explore Our Services
                    </button>
                </div>

                <!-- Images collage -->
                <div class="relative order-2 lg:order-1 scroll-reveal">
                    <div class="grid grid-cols-2 gap-2">
                        <div class="rounded-2xl overflow-hidden premium-card h-50 group">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                                alt="Maldives Beach"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div class="rounded-2xl overflow-hidden premium-card h-50 group">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                                alt="Maldives Beach"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div class="rounded-2xl overflow-hidden premium-card h-50 group">
                            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop"
                                alt="Paris Eiffel Tower"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div class="rounded-2xl overflow-hidden premium-card h-50 group">
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
            </div>
        </div>
    </section>
</template>

<script setup>
// no extra logic needed, purely presentational
</script>
