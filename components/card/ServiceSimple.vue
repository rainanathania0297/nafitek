<template>
  <div class="flex items-start space-x-6 h-full">
    <div class="flex-shrink-0">
      <div
        class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center"
      >
        <Icon :name="icon" class="w-8 h-8 text-golden" />
      </div>
    </div>
    <div class="flex-1 relative h-full flex flex-col">
      <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
        {{ name }}
      </h3>
      <p class="text-gray-300 mb-6 leading-relaxed">{{ overview }}</p>

      <div class="mb-6" v-if="feature_list && feature_list.length > 0">
        <h4 class="text-lg font-semibold text-golden mb-3">
          {{ feature_cta }}
        </h4>
        <ul
          :class="[
            'text-gray-300',
            feature_list.length > 4 ? 'grid grid-cols-2 gap-2' : 'space-y-2',
          ]"
        >
          <li
            v-for="feature in feature_list"
            :key="feature"
            class="flex items-start"
          >
            <Icon
              name="heroicons:check-circle"
              class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0"
            />
            <span>{{ feature.name }}</span>
          </li>
        </ul>
      </div>

      <!-- CTA Button -->
      <div class="mt-auto">
        <NuxtLink
          :to="cta_link"
          class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
        >
          {{ cta_text }}
          <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  overview: {
    type: String,
    default: "",
  },
  feature_cta: {
    type: String,
    default: "Key Features",
  },
  feature_list: {
    type: Array,
    default: () => [],
  },
  cta_link: {
    type: String,
    default: "#",
  },
  cta_text: {
    type: String,
    default: "Learn More",
  },
});
</script>
