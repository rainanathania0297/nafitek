<template>
  <section class="py-20 bg-gradient-industrial relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
    <div
      class="absolute top-10 left-10 w-16 h-16 border border-golden/20 rotate-45 animate-pulse-slow"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-20 h-20 bg-golden/10 rotate-12 animate-float"
    ></div>

    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
        >
          Our <span class="text-gradient">Clients</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Trusted by leading companies across various industries
        </p>
      </div>

      <!-- Client Logo Slider -->
      <div class="max-w-6xl mx-auto">
        <div class="relative overflow-hidden">
          <!-- Draggable Infinite Slider -->
          <Swiper
            :modules="[SwiperAutoplay, SwiperFreeMode]"
            :slides-per-view="'auto'"
            :space-between="30"
            :loop="true"
            :free-mode="true"
            :grab-cursor="true"
            :autoplay="{
              delay: 0,
              disableOnInteraction: false,
            }"
            :speed="5000"
            class="client-slider"
          >
            <SwiperSlide
              v-for="(client, index) in clientStore.clientList"
              :key="`client-${client.id}`"
              class="w-auto h-full flex items-center justify-center "
            >
            <div class="flex items-center justify-center h-24 mb-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-golden transition-all duration-300 hover:scale-105">
              <div class="text-4xl font-bold text-white group-hover:text-golden transition-colors duration-300">
                <template v-if="client.logo">
                  <NuxtImg
                    :preset="client.logo.includes('.svg') ? undefined : 'brand'"
                    :src="client.logo"
                    :alt="client.name"
                    class="w-auto max-h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </template>
                <template v-else>
                  <div
                    class="text-lg font-semibold text-gray-400 hover:text-golden transition-colors duration-300 uppercase tracking-wide"
                  >
                    {{ client.name }}
                  </div>
                </template>
              </div>
              </div>
              
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <!-- Client Testimonial Teaser -->
      <div class="max-w-6xl mx-auto">
        <div
          class="text-center mt-16 animate-fade-in-up"
          style="animation-delay: 0.8s"
        >
          <div
            class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto"
          >
            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              What Our Clients Say
            </h3>
            <p class="text-gray-300 mb-6">
              Discover how we've helped our clients achieve their industrial
              goals with our comprehensive solutions.
            </p>
            <NuxtLink to="/testimonials" class="btn-primary">
              <Icon name="mdi:comment-quote" class="w-5 h-5 mr-2" />
              Read Testimonials
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Rename modules to match the expected format in the template
const SwiperAutoplay = Autoplay;
const SwiperFreeMode = FreeMode;

const clientStore = useClientStore();
await callOnce("client-data", () => clientStore.loadData());
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(12deg);
  }
  50% {
    transform: translateY(-15px) rotate(12deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 30s linear infinite;
}

/* Swiper Slider Styles */
.client-slider {
  width: 100%;
  padding: 10px 0;
}

.client-slider .swiper-slide {
  width: auto;
  cursor: grab;
}

.client-slider .swiper-slide:active {
  cursor: grabbing;
}

/* Override Swiper default styles */
:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}
</style>
