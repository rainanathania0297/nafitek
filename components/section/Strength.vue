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
          Our <span class="text-gradient">Strengths</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          What sets us apart in the industrial services landscape
        </p>
      </div>

      <!-- Strengths Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <div
          v-for="(strength, index) in companyStore.companyStrengths"
          :key="strength.name"
          class="group relative"
        >
          <!-- Card -->
          <div
            class="card-service h-full transform transition-all duration-500 hover:scale-105 animate-fade-in-up overflow-hidden"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Icon -->
            <div class="relative mb-6">
              <div
                class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <Icon :name="strength.icon" class="w-8 h-8 text-charcoal" />
              </div>
              <!-- Decorative element -->
              <div
                class="absolute -top-2 -right-2 w-6 h-6 border-2 border-golden/30 rotate-45 group-hover:rotate-90 transition-transform duration-500"
              ></div>
            </div>

            <!-- Content -->
            <h3
              class="text-xl font-montserrat font-semibold text-white mb-4 group-hover:text-golden transition-colors duration-300"
            >
              {{ strength.name }}
            </h3>

            <p class="text-gray-300 leading-relaxed mb-6">
              {{ strength.description }}
            </p>

            <!-- Features List -->
            <ul class="space-y-2">
              <li
                v-for="feature in strength.features"
                :key="feature"
                class="flex items-start text-sm text-gray-400"
              >
                <Icon
                  name="mdi:check-circle"
                  class="w-4 h-4 text-golden mr-2 mt-0.5 flex-shrink-0"
                />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Hover Reveal Effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
            ></div>

            <!-- Bottom Border Animation -->
            <div
              class="absolute bottom-0 left-0 w-0 h-1 bg-golden group-hover:w-full transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// stores
const companyStore = useCompanyStore();
await callOnce("company-data", () => companyStore.loadData());
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
