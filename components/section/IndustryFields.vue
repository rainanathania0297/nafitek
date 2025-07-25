<template>
  <section
    :id="props.id"
    :class="props.class"
    class="py-20 lg:py-32 relative overflow-hidden"
  >
    <slot name="prefix"></slot>
    <div class="container mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
        >
          Industries <span class="text-gradient">We Serve</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Our expertise spans across multiple industries, delivering tailored
          solutions for diverse industrial needs
        </p>
      </div>

      <!-- 
          its not automaticly import grid col-start, when we use in calculation 
          so we need to create a hidden grid to fix it
        -->
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 hidden">
          <div class="col-span-2">01.1</div>
          <div class="col-span-2">01.2</div>
          <div class="col-span-2">01.3</div>
          <div class="col-span-2">01.4</div>
          <div class="col-span-2">01.5</div>
          <div class="col-span-2">01.6</div>
          <div class="col-start-6 col-span-2">02.7</div>
        </div>
      <!-- end fix import grid col-start -->

      <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
        <div
          v-for="(industry, index) in companyStore.companyStats
            ?.industry_fields"
          :key="industry.name"
          class="text-center animate-fade-in-up col-span-2 mb-6"
          :style="{ animationDelay: `${index * 0.1}s` }"
          :class="[
            index == 0 ? 'col-start-3' : '',
            index == 4 ? 'col-start-4' : '',
            // index == (companyStore.companyStats?.industry_fields.length - 1)
            //       ? 'col-start-2 md:col-start-3 lg:col-start-6'
            //       : '',
          ]"
        >
          <div
            class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-golden/30 transition-colors duration-300"
          >
            <Icon :name="industry.icon" class="w-8 h-8 text-golden" />
          </div>
          <h3 class="text-white font-medium">{{ industry.name }}</h3>
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

<style scoped></style>
