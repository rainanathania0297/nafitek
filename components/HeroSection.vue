<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Video/Image -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      ></div>
      <!-- Industrial Grid Pattern -->
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-20 z-5"></div>
    </div>

    <!-- Floating Geometric Elements -->
    <div class="absolute inset-0 z-5">
      <div class="absolute top-20 left-10 w-20 h-20 border-2 border-golden/30 rotate-45 animate-float"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-golden/20 rotate-12 animate-float" style="animation-delay: 1s"></div>
      <div class="absolute bottom-40 left-20 w-12 h-12 border border-golden/40 rounded-full animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-24 h-24 border-2 border-golden/20 rotate-45 animate-float" style="animation-delay: 2s"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
      <div class="max-w-5xl mx-auto">
        <!-- Animated Title -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
          <span class="block animate-fade-in-up">Industrial</span>
          <span class="block text-gradient animate-fade-in-up" style="animation-delay: 0.2s">Excellence</span>
          <span class="block animate-fade-in-up" style="animation-delay: 0.4s">Delivered</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.6s">
          Your trusted partner for high-quality machinery procurement, maintenance, 
          and repair services since 2018. We deliver exceptional value through 
          innovative solutions and professional expertise.
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up" style="animation-delay: 0.8s">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-golden mb-2">
              <AnimatedCounter :target="500" suffix="+" />
            </div>
            <p class="text-gray-300">Machines Serviced</p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-golden mb-2">
              <AnimatedCounter :target="6" suffix="+" />
            </div>
            <p class="text-gray-300">Years Experience</p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-golden mb-2">
              <AnimatedCounter :target="100" suffix="%" />
            </div>
            <p class="text-gray-300">Client Satisfaction</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 1s">
          <NuxtLink to="/services" class="btn-primary">
            <Icon name="mdi:cog" class="w-5 h-5 mr-2" />
            Explore Our Services
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
            Contact Our Team
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-fade-in-up" style="animation-delay: 1.2s">
      <div class="flex flex-col items-center cursor-pointer group" @click="scrollToNext">
        <div class="w-6 h-10 border-2 border-golden rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
          <div class="w-1 h-3 bg-golden rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
        </div>
        <span class="text-golden text-sm mt-2 opacity-75 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
          Scroll Down
        </span>
      </div>
    </div>

    <!-- Rotating Gear Element -->
    <div class="absolute bottom-10 right-10 w-20 h-20 opacity-20 animate-rotate-gear">
      <Icon name="mdi:cog" class="w-full h-full text-golden" />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const scrollToNext = () => {
  const nextSection = document.querySelector('#about-section') || document.querySelector('section:nth-of-type(2)')
  if (nextSection) {
    nextSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    // Fallback: scroll down by viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  // Add any additional animations or interactions here
})
</script>

<style scoped>
/* Additional hero-specific styles */
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>