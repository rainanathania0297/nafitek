<template>
  <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10"></div>
    <div class="absolute top-10 left-10 w-16 h-16 border border-golden/20 rotate-45 animate-pulse-slow"></div>
    <div class="absolute bottom-10 right-10 w-20 h-20 bg-golden/10 rotate-12 animate-float"></div>

    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          Our <span class="text-gradient">Partners</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Trusted partnerships with leading global brands in industrial solutions
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="max-w-6xl mx-auto">
        <!-- Featured Partners -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(partner, index) in partnerStore.pinnedPartnerList"
            :key="partner.id"
            class="group"
          >
            <div 
              class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-500 hover:border-golden hover:bg-white/20 hover:scale-105 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Partner Logo -->
              <div class="flex items-center justify-center h-24 mb-6">
                <div class="text-4xl font-bold text-white group-hover:text-golden transition-colors duration-300">
                  <template v-if="partner.logo">
                    <NuxtImg
                      :preset="partner.logo.includes('.svg') ? undefined : 'brand'"
                      :src="partner.logo"
                      :alt="partner.name"
                      class="w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                      :class="partner.logo.includes('.svg') ? 'h-20' : 'h-auto'"
                      loading="lazy"
                    />
                  </template>
                  <template v-else>
                    <div class="text-lg font-semibold text-gray-400 group-hover:text-golden transition-colors duration-300 uppercase tracking-wide">
                      {{ partner.name }}
                    </div>
                  </template>
                </div>
              </div>

              <!-- Partner Info -->
              <div class="text-center">
                <h3 class="text-xl font-montserrat font-semibold text-white mb-3 group-hover:text-golden transition-colors duration-300">
                  {{ partner.name }}
                </h3>
                <p class="text-gray-300 text-sm mb-4">
                  {{ partner.description }}
                </p>
                
                <!-- Products -->
                <div class="flex flex-wrap gap-2 justify-center">
                  <span
                    v-for="product in partner.products"
                    :key="product"
                    class="px-3 py-1 bg-golden/20 text-golden text-xs rounded-full border border-golden/30"
                  >
                    {{ product }}
                  </span>
                </div>
              </div>

              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- All Partners Logo Grid -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 class="text-2xl font-montserrat font-semibold text-white text-center mb-8">
            Authorized Distributor & Partner Brands
          </h3>
          
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div
              v-for="(partner, index) in partnerStore.partnerList"
              :key="partner.id"
              class="group flex items-center justify-center h-20 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.05}s` }"
            >
              <div class="text-center">
                <template v-if="partner.logo">
                  <NuxtImg
                    :preset="partner.logo.includes('.svg') ? undefined : 'brand'"
                    :src="partner.logo"
                    :alt="partner.name"
                    class="w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    :class="partner.logo.includes('.svg') ? 'h-16' : 'h-auto'"
                    loading="lazy"
                  />
                </template>
                <template v-else>
                  <div class="text-lg font-semibold text-gray-400 group-hover:text-golden transition-colors duration-300 uppercase tracking-wide">
                    {{ partner.name }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Partnership Benefits -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(benefit, index) in partnershipBenefits"
            :key="benefit.title"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon :name="benefit.icon" class="w-8 h-8 text-charcoal" />
            </div>
            <h4 class="text-lg font-montserrat font-semibold text-white mb-2">
              {{ benefit.title }}
            </h4>
            <p class="text-gray-300 text-sm">
              {{ benefit.description }}
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
          <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Interested in Partnership?
            </h3>
            <p class="text-gray-300 mb-6">
              Join our network of trusted partners and expand your business reach with our comprehensive support.
            </p>
            <NuxtLink to="/contact" class="btn-primary">
              <Icon name="mdi:handshake" class="w-5 h-5 mr-2" />
              Become a Partner
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partnerStore = usePartnerStore();
await callOnce('partner-data', () => partnerStore.loadData());

const partnershipBenefits = [
  {
    title: 'Genuine Products',
    icon: 'mdi:certificate',
    description: 'Authorized distributor ensuring 100% genuine products with full warranty coverage.'
  },
  {
    title: 'Technical Support',
    icon: 'mdi:headset',
    description: 'Comprehensive technical support and training from our certified professionals.'
  },
  {
    title: 'Global Network',
    icon: 'mdi:earth',
    description: 'Access to global supply chain and international quality standards.'
  },
  {
    title: 'Innovation',
    icon: 'mdi:lightbulb-on',
    description: 'Latest technology and innovative solutions from industry-leading brands.'
  }
]
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-15px) rotate(12deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>