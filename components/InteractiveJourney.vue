<template>
  <section class="relative bg-cover bg-center py-24 bg-no-repeat" 
    style="background-image: url('/map.jpg');">
    <!-- Overlay for readability -->
    <div class="absolute inset-0 bg-black/85"></div>

    <div class="container mx-auto px-6">
      <div class="text-center mb-16 scroll-reveal">
        <h2
          class="font-display font-bold text-4xl md:text-6xl text-secondary-foreground mb-6"
        >
          Our
          <span class="relative inline-block">
            <span class="relative z-10 text-primary">Interactive</span>
            <span
              class="absolute inset-x-0 bottom-1 h-4 bg-primary/30 -z-0 rounded"
            ></span>
          </span>
          <span class="text-primary-foreground">Journey</span>
        </h2>
        <p
          class="font-body text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          Traveling the world has been more than a passion — it’s our way of life.
          We’ve explored <span class="font-semibold text-primary">30+ countries</span>,
          and now you can interact with our journey on the globe below.
        </p>
      </div>

      <!-- Globe (centered, no overflow) -->
      <client-only>
        <div class="flex justify-center pointer-events-auto">
          <div
            ref="globeEl"
            class="aspect-square w-full max-w-4xl h-auto rounded-xl shadow-lg pointer-events-auto animate-float"
          ></div>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

const globeEl = ref(null)

// Visited countries by display name (matches the GeoJSON `properties.name`)
const visited = [
  'Saudi Arabia',
  'Malta',
  'Italy',
  'Switzerland',
  'Austria',
  'Czech Republic',
  'Netherlands',
  'Sweden',
  'Finland',
  'Poland',
  'Norway',
  'Estonia',
  'Hungary',
  'Spain',
  'Germany',
  'Turkey',
  'United Arab Emirates',
  'Portugal',
  'France',
  'Baku Azerbaijan',
  'Malaysia',
  'Thailand',
  'Singapore',
  'Sri Lanka',
  'United Kingdom'
]

// Pins (examples). Add as many as you want.
const pins = [
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Malta', lat: 35.9375, lng: 14.3754 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.4730 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'France', lat: 46.6034, lng: 1.8883 },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 }
];

// High-contrast pin as an inline SVG image (white fill + dark stroke + accent dot + glow)
const pinDataUrl = (() => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 24 24'>
    <defs>
      <filter id='g' x='-50%' y='-50%' width='200%' height='200%'>
        <feDropShadow dx='0' dy='2' stdDeviation='1.5' flood-color='#0B0E12' flood-opacity='0.55'/>
      </filter>
    </defs>
    <g filter='url(#g)'>
      <path d='M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z' fill='#FFFFFF' stroke='#0B0E12' stroke-width='1.25'/>
      <circle cx='12' cy='8.25' r='2.25' fill='#F9B44C' stroke='#0B0E12' stroke-width='0.8'/>
    </g>
  </svg>`
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
})()

let globe
let resizeObs
let openTipRef = null // currently open tooltip (DOM node) so we can close it when another opens

onMounted(async () => {
  // Dynamic imports (client-only)
  const Globe = (await import('globe.gl')).default

  // Fetch world countries (GeoJSON with `properties.name`)
  const countries = await fetch(
    'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
  ).then(res => res.json())

  await nextTick()

  // Create globe
  globe = Globe()(globeEl.value)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundColor('rgba(0,0,0,0)')
    .showAtmosphere(true)
    .atmosphereColor('#F5E3B3')
    .atmosphereAltitude(0.15)
    // Initial view → EU in front
    .pointOfView({ lat: 54, lng: 15, altitude: 2 }, 0)
    // Country polygons
    .polygonsData(countries.features)
    .polygonCapColor(d => (visited.includes(d.properties.name) ? '#E67A2E' : '#374151'))
    .polygonSideColor(() => 'rgba(0,0,0,0.15)')
    .polygonStrokeColor(() => '#121620')
    // Hover label for country name (built-in lightweight tooltip)
    // .polygonLabel(d => `${d.properties.name}`)
    .onPolygonHover(hoverD => {
      if (hoverD) {
          globe.controls().autoRotate = false
      } else {
        globe.controls().autoRotate = true
      }
    })

  // Limit zoom to avoid clipping
  globe.controls().minDistance = 300
  globe.controls().maxDistance = 800

  globe.controls().autoRotate = true
  globe.controls().autoRotateSpeed = 0.5

  // Size the canvas to the square container
  fitGlobeToContainer()
  // Keep responsive
  if ('ResizeObserver' in window) {
    resizeObs = new ResizeObserver(() => fitGlobeToContainer())
    resizeObs.observe(globeEl.value)
  } else {
    window.addEventListener('resize', fitGlobeToContainer)
  }

  // Add clickable HTML pins with anchored tooltips
  globe
    .htmlElementsData(pins)
    .htmlLat(d => d.lat)
    .htmlLng(d => d.lng)
    .htmlElement(d => makePinWithTooltip(d))
})

onBeforeUnmount(() => {
  if (resizeObs && globeEl.value) resizeObs.unobserve(globeEl.value)
  window.removeEventListener('resize', fitGlobeToContainer)
  document.removeEventListener('click', handleDocClick, true)
})

function fitGlobeToContainer () {
  const w = globeEl.value?.offsetWidth || 600
  const h = w // aspect-square container
  globe.width(w).height(h)
}

// Build a pin element that includes its own tooltip anchored above it
function makePinWithTooltip (data) {
  // Wrapper is positioned by globe.gl at the exact lat/lng
  const wrapper = document.createElement('div')
  wrapper.style.position = 'relative'
  wrapper.style.transform = 'translate(-50%, -100%)' // center horizontally and sit above anchor
  wrapper.style.pointerEvents = 'auto'
  wrapper.style.userSelect = 'none'
  wrapper.style.zIndex = '10'

  // Pin image (high-contrast)
  const img = document.createElement('img')
  img.src = pinDataUrl
  img.alt = data.name
  img.style.width = '28px'
  img.style.height = '28px'
  img.style.cursor = 'pointer'
  img.style.display = 'block'

  // Tooltip (hidden by default)
  const tip = document.createElement('div')
  Object.assign(tip.style, {
    position: 'absolute',
    left: '50%',
    bottom: '38px', // just above the pin
    transform: 'translateX(-50%)',
    background: '#0B0E12',                // secondary.DEFAULT
    color: '#F5E3B3',                     // secondary.foreground
    padding: '6px 10px',
    borderRadius: '10px',
    fontSize: '12px',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
    border: '1px solid #2A2F3A',         // border color from theme
    display: 'none',
    pointerEvents: 'none'
  })
  tip.textContent = data.name

  // Tooltip arrow
  const arrow = document.createElement('div')
  Object.assign(arrow.style, {
    position: 'absolute',
    left: '50%',
    bottom: '-6px',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #0B0E12' // same as tooltip bg
  })
  tip.appendChild(arrow)

  // Open/close behavior
  const openTip = () => {
    // Close any other open tooltip
    if (openTipRef && openTipRef !== tip) {
      openTipRef.style.display = 'none'
    }
    tip.style.display = 'block'
    openTipRef = tip
  }
  const closeTip = () => {
    if (openTipRef === tip) {
      tip.style.display = 'none'
      openTipRef = null
    } else {
      tip.style.display = 'none'
    }
  }

  img.addEventListener('click', (e) => {
    e.stopPropagation()
    if (tip.style.display === 'block') {
      closeTip()
    } else {
      openTip()
    }
  })

  // Close tooltip when clicking elsewhere on document
  document.addEventListener('click', handleDocClick, true)

  wrapper.appendChild(img)
  wrapper.appendChild(tip)
  return wrapper
}

function handleDocClick (e) {
  // If click is outside any pin wrapper, close open tooltip
  if (openTipRef) {
    const isInside =
      e.target instanceof Node &&
      openTipRef.parentElement &&
      openTipRef.parentElement.contains(e.target)
    if (!isInside) {
      openTipRef.style.display = 'none'
      openTipRef = null
    }
  }
}
</script>
