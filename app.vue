<template>
  <NuxtPage />
  <!-- Toast -->
  <div
    id="toast"
    class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform translate-x-full opacity-0 transition-all duration-300 z-50"
  >
    <div class="flex items-center">
      <svg
        class="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>Message sent successfully! We'll get back to you within 24 hours.</span>
    </div>
  </div>

  <!-- Loader -->
  <div id="loader" class="loader-overlay">
    <!-- Clouds -->
    <div class="clouds">
      <div class="cloud c1"></div>
      <div class="cloud c2"></div>
      <div class="cloud c3"></div>
      <div class="cloud c4"></div>
      <div class="cloud c5"></div>
    </div>

    <!-- Plane -->
    <div class="plane-wrapper">
      <img src="/plane.png" alt="plane" class="plane" />
    </div>

    <!-- Text -->
    <div class="loader-text">
      <h2 class="text-primary-deep">
        Modern <span>Expats</span>
      </h2>
      <p class="text-secondary">Crafting your perfect journey...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const loader = document.getElementById("loader");
  const plane = document.querySelector(".plane-wrapper") as HTMLElement;

  if (loader && plane) {
    plane.classList.add("fly");

    plane.addEventListener("animationend", () => {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 10);
    });
  }
});
</script>

<style scoped>
/* Loader background using Tailwind theme */
.loader-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(to bottom, #E67A2E, #F5E3B3); /* secondary */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

/* Clouds */
.clouds {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 50%;
  pointer-events: none;
}

.cloud {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  opacity: 0.9;
  animation: floatUpDown 2s ease-in-out infinite;
}

.c1 {
  width: 140px;
  height: 80px;
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}
.c2 {
  width: 180px;
  height: 100px;
  top: 25%;
  left: 28%;
  animation-delay: 0.6s;
}
.c3 {
  width: 120px;
  height: 70px;
  top: 12%;
  left: 55%;
  animation-delay: 1.2s;
}
.c4 {
  width: 160px;
  height: 90px;
  top: 22%;
  left: 75%;
  animation-delay: 1.8s;
}
.c5 {
  width: 100px;
  height: 60px;
  top: 35%;
  left: 42%;
  animation-delay: 2.4s;
}

@keyframes floatUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Plane */
.plane-wrapper {
  position: absolute;
  bottom: 35%;
  left: -200px; /* start offscreen */
}

.plane {
  width: 200px;
  height: auto;
  object-fit: contain;
  transform: scaleX(-1);
}

/* Plane Flight Animation */
.fly {
  animation: flyAcross 10s ease-in-out forwards;
}

@keyframes flyAcross {
  0% {
    transform: translateY(0) scale(1);
    left: -200px;
  }
  30% {
    transform: translateY(-80px) scale(1);
    left: 40%;
  }
  50% {
    transform: translateY(-170px) scale(1); /* altitude increase */
    left: 50%;
  }
  70% {
    transform: translateY(-290px) scale(1);
    left: 75%;
  }
  100% {
    transform: translateY(-450px) scale(1);
    left: 210%; /* plane exits */
  }
}

/* Loader text */
.loader-text {
  text-align: center;
  margin-bottom: 40px;
}

.loader-text h2 {
  font-size: 2rem;
  font-weight: bold;
}

.loader-text p {
  font-size: 1rem;
  /* color: #F5E3B3; */
}

/* Fade out */
.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

/* Responsive */
@media (max-width: 600px) {
  .plane {
    width: 80px;
  }

  .cloud {
    opacity: 0.75;
  }

  .loader-text h2 {
    font-size: 1.5rem;
  }

  .loader-text p {
    font-size: 0.9rem;
  }
}
</style>
