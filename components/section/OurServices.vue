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
          Our <span class="text-gradient">Services</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive industrial solutions tailored to your business needs
        </p>
      </div>

      <!-- Services Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="group relative"
        >
          <CardService 
            :name="service.name"
            :icon="service.icon"
            :image="service.image"
            :overview="service.overview"
            :feature_list="service.feature_list"
            :cta_link="`/services#${service.slug}`"
            :style="{ animationDelay: `${index * 0.1}s` }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const serviceStore = useServiceStore();
await callOnce("service-data", () => serviceStore.loadData());
const services = computed(() => serviceStore.pinnedServiceList);

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
</style>
