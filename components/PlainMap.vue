<template>
    <section ref="sectionEl" class="bg-background py-16 relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-10 left-10 w-24 h-24 opacity-5">
            <svg viewBox="0 0 100 100" class="text-primary">
                <path fill="currentColor"
                    d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5Zm0,80A35,35,0,1,0,15,50,35,35,0,0,0,50,85Zm0-60A25,25,0,1,1,25,50,25,25,0,0,1,50,25Zm0,40A15,15,0,1,0,35,50,15,15,0,0,0,50,65Z" />
            </svg>
        </div>

        <div class="absolute bottom-10 right-10 w-20 h-20 opacity-5 rotate-45">
            <svg viewBox="0 0 100 100" class="text-primary-glow">
                <path fill="currentColor" d="M50,5L85,40H65V85H35V40H15Z" />
            </svg>
        </div>

        <div class="container mx-auto px-6 relative z-10">
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
                    Explore the map below to see where our journey has taken us.</p>
            </div>

            <!-- Map Container -->
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 scroll-reveal">
                <div ref="mapEl" class="w-full h-[500px] md:h-[600px]"></div>

                <!-- Custom Map Controls -->
                <div
                    class="absolute top-4 right-4 flex flex-col gap-2 bg-card/80 backdrop-blur-sm rounded-lg p-1.5 shadow-lg border border-border/10">
                    <button @click="zoomIn"
                        class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent/10 transition-colors">
                        <svg class="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    <button @click="zoomOut"
                        class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent/10 transition-colors">
                        <svg class="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </button>
                </div>

                <!-- Map Legend -->
                <div
                    class="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border/10">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full bg-primary border-2 border-white shadow-md"></div>
                            <span class="text-sm font-medium text-foreground">Visited Countries</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4">
                                <svg viewBox="0 0 24 24" class="text-primary">
                                    <path fill="currentColor"
                                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
                                </svg>
                            </div>
                            <span class="text-sm font-medium text-foreground">Key Locations</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 scroll-reveal">
                <div v-for="(stat, index) in stats" :key="index"
                    class="text-center p-6 rounded-xl bg-card border border-border/10 shadow-sm">
                    <div class="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{{ stat.value }}</div>
                    <div class="text-sm text-muted-foreground font-body">{{ stat.label }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

const mapEl = ref(null)
const sectionEl = ref(null)
let map = null
let observer = null
let animationPlayed = ref(false)

const visitedCountries = [
    { name: 'Saudi Arabia', iso: 'SAU', lat: 23.8859, lng: 45.0792 },
    { name: 'Malta', iso: 'MLT', lat: 35.9375, lng: 14.3754 },
    { name: 'Italy', iso: 'ITA', lat: 41.8719, lng: 12.5674 },
    { name: 'Switzerland', iso: 'CHE', lat: 46.8182, lng: 8.2275 },
    { name: 'Austria', iso: 'AUT', lat: 47.5162, lng: 14.5501 },
    { name: 'Czech Republic', iso: 'CZE', lat: 49.8175, lng: 15.4730 },
    { name: 'Netherlands', iso: 'NLD', lat: 52.1326, lng: 5.2913 },
    { name: 'Sweden', iso: 'SWE', lat: 60.1282, lng: 18.6435 },
    { name: 'Finland', iso: 'FIN', lat: 61.9241, lng: 25.7482 },
    { name: 'Poland', iso: 'POL', lat: 51.9194, lng: 19.1451 },
    { name: 'Norway', iso: 'NOR', lat: 60.4720, lng: 8.4689 },
    { name: 'Estonia', iso: 'EST', lat: 58.5953, lng: 25.0136 },
    { name: 'Hungary', iso: 'HUN', lat: 47.1625, lng: 19.5033 },
    { name: 'Spain', iso: 'ESP', lat: 40.4637, lng: -3.7492 },
    { name: 'Germany', iso: 'DEU', lat: 51.1657, lng: 10.4515 },
    { name: 'Turkey', iso: 'TUR', lat: 38.9637, lng: 35.2433 },
    { name: 'United Arab Emirates', iso: 'ARE', lat: 23.4241, lng: 53.8478 },
    { name: 'Portugal', iso: 'PRT', lat: 39.3999, lng: -8.2245 },
    { name: 'France', iso: 'FRA', lat: 46.6034, lng: 1.8883 },
    { name: 'Azerbaijan', iso: 'AZE', lat: 40.1431, lng: 47.5769 },
    { name: 'Malaysia', iso: 'MYS', lat: 4.2105, lng: 101.9758 },
    { name: 'Thailand', iso: 'THA', lat: 15.8700, lng: 100.9925 },
    { name: 'Singapore', iso: 'SGP', lat: 1.3521, lng: 103.8198 },
    { name: 'Sri Lanka', iso: 'LKA', lat: 7.8731, lng: 80.7718 },
    { name: 'United Kingdom', iso: 'GBR', lat: 55.3781, lng: -3.4360 }
]

const stats = [
    { value: visitedCountries.length.toString(), label: 'Countries Visited' },
    { value: '12', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5', label: 'Years Experience' }
]

const zoomIn = () => {
    if (map) {
        const view = map.getView()
        view.animate({
            zoom: view.getZoom() + 1,
            duration: 250
        })
    }
}

const zoomOut = () => {
    if (map) {
        const view = map.getView()
        view.animate({
            zoom: view.getZoom() - 1,
            duration: 250
        })
    }
}

onMounted(async () => {
    if (typeof window === 'undefined') return

    // Set up intersection observer to detect when section is in view
    if (sectionEl.value) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animationPlayed.value) {
                        animationPlayed.value = true
                        initMap()
                    }
                })
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        )

        observer.observe(sectionEl.value)
    }
})

const animatePinDrop = (feature, startCoord, endCoord, delay = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const startTime = Date.now()
            const duration = 1500 // 1.5 second animation

            const animate = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)

                // Enhanced bounce effect with more realistic physics
                const easeOutBounce = (x) => {
                    if (x < 1 / 2.75) {
                        return 7.5625 * x * x
                    } else if (x < 2 / 2.75) {
                        return 7.5625 * (x -= 1.5 / 2.75) * x + 0.75
                    } else if (x < 2.5 / 2.75) {
                        return 7.5625 * (x -= 2.25 / 2.75) * x + 0.9375
                    } else {
                        return 7.5625 * (x -= 2.625 / 2.75) * x + 0.984375
                    }
                }

                // Add slight horizontal wobble during the fall
                const wobbleFactor = Math.sin(progress * Math.PI * 4) * 0.2 * (1 - progress)

                const easedProgress = easeOutBounce(progress)

                // Calculate current position with wobble effect
                const currentCoord = [
                    startCoord[0] + (endCoord[0] - startCoord[0]) * easedProgress + wobbleFactor,
                    startCoord[1] + (endCoord[1] - startCoord[1]) * easedProgress
                ]

                // Update feature geometry
                feature.getGeometry().setCoordinates(currentCoord)

                // Continue animation until complete
                if (progress < 1) {
                    requestAnimationFrame(animate)
                } else {
                    resolve() // Animation complete
                }
            }

            // Start the animation
            requestAnimationFrame(animate)
        }, delay)
    })
}

const initMap = async () => {
    try {
        // Dynamically import OpenLayers
        const ol = await import('ol')
        const olMap = await import('ol/Map')
        const olView = await import('ol/View')
        const olLayer = await import('ol/layer')
        const olSource = await import('ol/source')
        const olStyle = await import('ol/style')
        const olFeature = await import('ol/Feature')
        const olGeom = await import('ol/geom')
        const olOverlay = await import('ol/Overlay')
        const olProj = await import('ol/proj')
        const olFormat = await import('ol/format')

        // Initialize map
        if (mapEl.value && !map) {
            // Create custom tile layer with Stamen watercolor style
            const customTileLayer = new olLayer.Tile({
                source: new olSource.XYZ({
                    attributions: [
                        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
                        '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
                        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    ],
                    url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
                    maxZoom: 8
                })
            })

            // Create map
            map = new olMap.default({
                target: mapEl.value,
                layers: [customTileLayer],
                view: new olView.default({
                    center: olProj.fromLonLat([10, 35]),
                    zoom: 2.8,
                    minZoom: 2,
                    maxZoom: 8
                }),
                controls: []
            })

            // Use Natural Earth Data as alternative source for country boundaries
            const vectorSource = new olSource.Vector({
                url: 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson',
                format: new olFormat.GeoJSON()
            })

            const visitedCountryCodes = visitedCountries.map(country => country.iso);

            const vectorLayer = new olLayer.Vector({
                source: vectorSource,
                style: function (feature) {
                    const countryCode = feature.get('ISO_A3');
                    const isVisited = visitedCountryCodes.includes(countryCode);

                    return new olStyle.Style({
                        fill: new olStyle.Fill({
                            color: isVisited ? 'rgba(230, 122, 46, 0.6)' : 'rgba(200, 200, 200, 0.2)'
                        }),
                        stroke: new olStyle.Stroke({
                            color: isVisited ? 'rgba(230, 122, 46, 0.8)' : 'rgba(100, 100, 100, 0.5)',
                            width: isVisited ? 1.5 : 1
                        })
                    });
                }
            });

            map.addLayer(vectorLayer);

            // Create pin icon style
            const pinStyle = new olStyle.Style({
                image: new olStyle.Icon({
                    anchor: [0.5, 1],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'fraction',
                    src: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#E67A2E"/>
              <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="white"/>
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#FFFFFF" stroke-width="2"/>
            </svg>
          `),
                    scale: 1.2
                })
            })

            // Create marker source and layer
            const markerSource = new olSource.Vector()
            const markerLayer = new olLayer.Vector({
                source: markerSource
            })

            map.addLayer(markerLayer)

            // Add markers with animation
            const animationPromises = []

            visitedCountries.forEach((country, index) => {
                // Create initial position above the actual location (higher starting point)
                const startCoord = olProj.fromLonLat([country.lng, country.lat - 30]) // Start much higher up
                const endCoord = olProj.fromLonLat([country.lng, country.lat])

                const feature = new olFeature.default({
                    geometry: new olGeom.Point(startCoord),
                    name: country.name
                })

                // Set initial style
                feature.setStyle(pinStyle)

                // Add to source
                markerSource.addFeature(feature)

                // Schedule animation with delay
                const delay = index * 400 // Stagger animations by 400ms
                animationPromises.push(animatePinDrop(feature, startCoord, endCoord, delay))
            })

            // Wait for all animations to complete
            Promise.all(animationPromises).then(() => {
                console.log('All pin animations completed')
            })

            // Add popup overlay
            const popup = new olOverlay.default({
                element: document.createElement('div'),
                positioning: 'bottom-center',
                offset: [0, -30]
            })
            map.addOverlay(popup)

            // Display popup on click and hover
            const showPopup = (evt, type) => {
                const feature = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
                    return feature
                })

                if (feature && feature.get('name')) {
                    const element = popup.getElement()
                    element.className = `map-popup ${type}`
                    element.innerHTML = `
            <div class="bg-card border border-border/20 rounded-lg shadow-lg px-3 py-2 backdrop-blur-sm">
              <div class="font-medium text-foreground text-sm">${feature.get('name')}</div>
            </div>
          `
                    popup.setPosition(evt.coordinate)
                } else {
                    popup.setPosition(undefined)
                }
            }

            map.on('click', (evt) => showPopup(evt, 'click'))
            map.on('pointermove', (evt) => showPopup(evt, 'hover'))

            // Change mouse cursor when over marker
            map.on('pointermove', (e) => {
                const pixel = map.getEventPixel(e.originalEvent)
                const hit = map.hasFeatureAtPixel(pixel)
                map.getTarget().style.cursor = hit ? 'pointer' : ''
            })
        }
    } catch (error) {
        console.error('Error initializing map:', error)
    }
}

onUnmounted(() => {
    if (map) {
        map.setTarget(null)
        map = null
    }

    if (observer) {
        observer.disconnect()
    }
})
</script>

<style>
@import 'ol/ol.css';

.ol-attribution {
    background-color: rgba(255, 255, 255, 0.8) !important;
    border-radius: 4px;
    padding: 4px 8px;
}

.ol-attribution a {
    color: #E67A2E;
}

.ol-attribution a:hover {
    color: #C6521C;
}

.ol-zoom {
    display: none;
}

.map-popup {
    background: transparent;
    padding: 0;
    border-radius: 0.5rem;
    transition: opacity 0.2s ease;
}

.map-popup.hover {
    opacity: 0.9;
}

.map-popup.click {
    opacity: 1;
}

/* Animation for pins falling from top */
@keyframes pinFall {
    0% {
        transform: translateY(-100px) rotate(-10deg);
        opacity: 0;
    }

    15% {
        transform: translateY(20px) rotate(5deg);
        opacity: 1;
    }

    30% {
        transform: translateY(-10px) rotate(-3deg);
    }

    45% {
        transform: translateY(5px) rotate(2deg);
    }

    60% {
        transform: translateY(-2px) rotate(-1deg);
    }

    75% {
        transform: translateY(0) rotate(0);
    }

    100% {
        transform: translateY(0) rotate(0);
        opacity: 1;
    }
}

.falling-pin {
    animation: pinFall 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
</style>