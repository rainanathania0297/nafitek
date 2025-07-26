<template>
  <section
    :id="props.id"
    :class="props.class"
    ref="sectionRef"
    class="py-20 lg:py-32 relative overflow-hidden"
  >
    <slot name="prefix"></slot>
    <div class="container mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
        >
          Our <span class="text-gradient">Process</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          We follow a structured approach to ensure successful project delivery
          and client satisfaction
        </p>
      </div>

      <!-- Process Steps -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Timeline Line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-golden via-golden to-transparent"
        ></div>

        <template
          v-for="(step, index) in companyStore.companyProcesses?.steps"
          :key="index"
        >
          <div
            :class="[
              'relative z-10 flex flex-col items-center md:items-start mb-16 animate-fade-in-up',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            ]"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div
              :class="[
                'flex-1 mb-6 md:mb-0',
                index % 2 === 0
                  ? 'md:text-right md:pr-8'
                  : 'md:text-left md:pl-8',
              ]"
            >
              <h3 class="text-2xl font-montserrat font-bold text-white mb-3">
                {{ step.name }}
              </h3>
              <p class="text-gray-300">{{ step.description }}</p>
            </div>
            <div
              class="w-12 h-12 bg-golden rounded-full flex items-center justify-center z-20 mx-4"
            >
              <span class="text-charcoal font-bold">{{ step.number }}</span>
            </div>
            <div :class="['flex-1', index % 2 === 0 ? 'md:pl-8' : 'md:pr-8']">
              <NuxtImg
                preset="process"
                :src="step.image"
                :alt="step.name"
                class="w-full h-48 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </template>
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
