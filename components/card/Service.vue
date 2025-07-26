<template>
  <div
    class="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 hover:border-golden hover:shadow-2xl hover:shadow-golden/20 hover:scale-105 animate-fade-in-up"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
    >
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="name"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 p-8 h-full flex flex-col">
      <!-- Icon -->
      <div class="mb-6" v-if="icon">
        <div
          class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        >
          <Icon :name="icon" class="w-8 h-8 text-charcoal" />
        </div>
      </div>

      <!-- Title -->
      <h3
        class="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-golden transition-colors duration-300"
      >
        {{ name }}
      </h3>

      <!-- Description -->
      <p class="text-gray-300 leading-relaxed mb-6 line-clamp-4">
        {{ overview }}
      </p>

      <!-- Key Features -->
      <div class="mb-6" v-if="feature_list && feature_list.length > 0">
        <h4
          class="text-sm font-semibold text-golden mb-3 uppercase tracking-wide"
        >
          Key Features
        </h4>
        <ul
          :class="
            feature_list.length > 4
              ? 'grid grid-cols-2 gap-2'
              : 'space-y-2'
          "
        >
          <li
            v-for="feature in feature_list"
            :key="feature.name"
            class="flex items-start text-sm text-gray-400"
          >
            <Icon
              name="mdi:check-circle"
              class="w-4 h-4 text-golden mr-2 mt-0.5 flex-shrink-0"
            />
            <span>{{ feature.name }}</span>
          </li>
        </ul>
      </div>

      <!-- CTA Button -->
      <div class="mt-auto">
        <NuxtLink
          :to="cta_link"
          class="inline-flex items-center text-golden hover:text-white transition-colors duration-300 group/btn"
        >
          <span class="mr-2">{{ cta_text }}</span>
          <Icon
            name="mdi:arrow-right"
            class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </NuxtLink>
      </div>

      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      ></div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-4 right-4 w-8 h-8 border border-golden/30 rotate-45 group-hover:rotate-90 transition-transform duration-500"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-0 h-1 bg-golden group-hover:w-full transition-all duration-500"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: ''
  },
  icon:{
    type: String,
    default: ''
  },
  overview: {
    type: String,
    default: ''
  },
  feature_list:{
    type: Array,
    default: () => []
  },
  cta_link: {
    type: String,
    default: '#'
  },
  cta_text:{
    type: String,
    default: 'Learn More'
  },
});
</script>