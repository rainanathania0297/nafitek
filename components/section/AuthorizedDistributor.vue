<template>
  <section 
    :id="props.id"
    :class="props.class"
    class="py-20 lg:py-32 relative overflow-hidden"
  >
    <slot name="prefix"></slot>
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
        >
          Authorized <span class="text-gradient">Distributor</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          We offer a diverse range of products to meet the machinery needs of various industrial sectors. Our selection includes trusted brands known for their reliability
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="max-w-6xl mx-auto">
        <!-- Featured Partners -->
        <!-- fix import grid col-start -->
        <!-- 
            its not automaticly import grid col-start, when we use in calculation 
            so we need to create a hidden grid to fix it
          -->
        <div class="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16 hidden">
          <div class="group md:col-start-2 md:col-span-2">01</div>
          <div class="group md:col-span-2">01.2</div>
        </div>
        <!-- end fix import grid col-start -->
        <div class="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16">
          <div
            v-for="(partner, index) in partnerStore.pinnedPartnerList"
            :key="partner.id"
            :class="[
              'group',
              'md:col-span-2',
              index == 0 ? 'md:col-start-' + (index * 2 + 2) : '',
            ]"
          >
            <div
              class="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-500 hover:border-golden hover:bg-white/20 hover:scale-105 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Partner Logo -->
              <div class="flex items-center justify-center h-24 mb-6">
                <div
                  class="text-4xl font-bold text-white group-hover:text-golden transition-colors duration-300"
                >
                  <template v-if="partner.logo">
                    <NuxtImg
                      :preset="
                        partner.logo.includes('.svg') ? undefined : 'brand'
                      "
                      :src="partner.logo"
                      :alt="partner.name"
                      class="w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                      :class="partner.logo.includes('.svg') ? 'h-20' : 'h-auto'"
                      loading="lazy"
                    />
                  </template>
                  <template v-else>
                    <div
                      class="text-lg font-semibold text-gray-400 group-hover:text-golden transition-colors duration-300 uppercase tracking-wide"
                    >
                      {{ partner.name }}
                    </div>
                  </template>
                </div>
              </div>

              <!-- Partner Info -->
              <div class="text-center">
                <h3
                  class="text-xl font-montserrat font-semibold text-white mb-3 group-hover:text-golden transition-colors duration-300"
                >
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
              <div
                class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              ></div>
            </div>
          </div>
        </div>

        <!-- All Partners Logo Grid -->
        <div
          class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <h3
            class="text-2xl font-montserrat font-semibold text-white text-center mb-8"
          >
            Authorized Distributor & Partner Brands
          </h3>

          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            <div
              v-for="(partner, index) in partnerStore.partnerList"
              :key="partner.id"
              class="group flex items-center justify-center h-20 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.05}s` }"
            >
              <div class="text-center">
                <template v-if="partner.logo">
                  <NuxtImg
                    :preset="
                      partner.logo.includes('.svg') ? undefined : 'brand'
                    "
                    :src="partner.logo"
                    :alt="partner.name"
                    class="w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    :class="partner.logo.includes('.svg') ? 'h-16' : 'h-auto'"
                    loading="lazy"
                  />
                </template>
                <template v-else>
                  <div
                    class="text-lg font-semibold text-gray-400 group-hover:text-golden transition-colors duration-300 uppercase tracking-wide"
                  >
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
            <div
              class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mx-auto mb-4"
            >
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
      </div>
    </div>
  </section>
</template>

<script setup>
const partnerStore = usePartnerStore();
await callOnce("partner-data", () => partnerStore.loadData());

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
  },
});

const partnershipBenefits = [
  {
    title: "Genuine Products",
    icon: "mdi:certificate",
    description:
      "Authorized distributor ensuring 100% genuine products with full warranty coverage.",
  },
  {
    title: "Technical Support",
    icon: "mdi:headset",
    description:
      "Comprehensive technical support and training from our certified professionals.",
  },
  {
    title: "Global Network",
    icon: "mdi:earth",
    description:
      "Access to global supply chain and international quality standards.",
  },
  {
    title: "Innovation",
    icon: "mdi:lightbulb-on",
    description:
      "Latest technology and innovative solutions from industry-leading brands.",
  },
];
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
</style>
