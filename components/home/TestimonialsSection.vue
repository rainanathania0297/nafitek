<template>
  <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10"></div>
    <div class="absolute top-10 left-10 w-20 h-20 border border-golden/20 rotate-45 animate-pulse-slow"></div>
    <div class="absolute bottom-10 right-10 w-16 h-16 bg-golden/10 rotate-12 animate-float"></div>

    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          Client <span class="text-gradient">Success Stories</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Trusted by industry leaders across Indonesia for exceptional service and results
        </p>
      </div>

      <!-- Metrics Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div
          v-for="(metric, index) in metrics"
          :key="metric.label"
          class="text-center animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon :name="metric.icon" class="w-8 h-8 text-charcoal" />
            </div>
            <div class="text-4xl font-bold text-golden mb-2">
              <AnimatedCounter :target="metric.value" :suffix="metric.suffix" />
            </div>
            <p class="text-white font-semibold mb-1">{{ metric.label }}</p>
            <p class="text-gray-300 text-sm">{{ metric.description }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonials Carousel -->
      <div class="max-w-6xl mx-auto">
        <div class="relative">
          <!-- Testimonial Cards -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              v-for="(testimonial, index) in visibleTestimonials"
              :key="index"
              class="group animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 h-full">
                <!-- Quote Icon -->
                <div class="mb-6">
                  <Icon name="mdi:format-quote-open" class="w-12 h-12 text-golden/50" />
                </div>

                <!-- Testimonial Content -->
                <blockquote class="text-gray-300 leading-relaxed mb-6 text-lg">
                  "{{ testimonial.message }}"
                </blockquote>

                <!-- Rating -->
                <div class="flex items-center mb-4">
                  <div class="flex space-x-1 mr-3">
                    <Icon
                      v-for="i in 5"
                      :key="i"
                      :name="i <= testimonial.rating ? 'mdi:star' : ((i - testimonial.rating) <= 0.5 ? 'mdi:star-half-full' : 'mdi:star-outline')"
                      class="w-5 h-5 text-golden"
                    />
                  </div>
                  <span class="text-golden font-semibold">{{ testimonial.rating }}</span>
                </div>

                <!-- Client Info -->
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center mr-4 overflow-hidden">
                    <NuxtImg 
                      v-if="testimonial.image" 
                      preset="thumbnail"
                      :src="testimonial.image" 
                      :alt="testimonial.name" 
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span 
                      v-else 
                      class="text-charcoal font-bold text-lg"
                    >
                      {{ testimonial.name.charAt(0) }}
                    </span>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold">{{ testimonial.name }}</h4>
                    <p class="text-gray-400 text-sm">{{ testimonial.position }}</p>
                    <p class="text-golden text-sm">{{ testimonial.company }}</p>
                  </div>
                </div>

                <!-- Project Type -->
                <div class="mt-4">
                  <span class="inline-flex items-center px-3 py-1 bg-golden/20 text-golden text-xs rounded-full border border-golden/30">
                    <Icon name="mdi:briefcase" class="w-3 h-3 mr-1" />
                    {{ testimonial.project }}
                  </span>
                </div>

                <!-- Hover Effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-center mt-8 space-x-4">
            <button
              @click="previousTestimonials"
              class="w-12 h-12 bg-gray-700 hover:bg-golden rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Icon name="mdi:chevron-left" class="w-6 h-6 text-white" />
            </button>
            <button
              @click="nextTestimonials"
              class="w-12 h-12 bg-gray-700 hover:bg-golden rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Icon name="mdi:chevron-right" class="w-6 h-6 text-white" />
            </button>
          </div>

          <!-- Pagination Dots -->
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(_, index) in Math.ceil(testimonials.length / 2)"
              :key="index"
              @click="goToTestimonial(index * 2)"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="[
                Math.floor(currentTestimonialIndex / 2) === index 
                  ? 'bg-golden' 
                  : 'bg-gray-600 hover:bg-gray-500'
              ]"
            ></button>
          </div>
        </div>
      </div>

      <!-- Industry Recognition -->
      <div class="mt-20 text-center">
        <h3 class="text-2xl font-montserrat font-bold text-white mb-8">
          Trusted by Leading Industries
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(industry, index) in industries"
            :key="industry"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-gray-400 hover:text-golden transition-colors duration-300 text-sm font-medium">
              {{ industry }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const companyStore = useCompanyStore();
const testimonialStore = useTestimonialStore();
await callOnce('company-data', () => companyStore.loadData())
await callOnce('testimonial-data', () => testimonialStore.loadData())

const currentTestimonialIndex = ref(0)

const metrics = [
  {
    icon: 'mdi:cog',
    value: companyStore.companyStats?.machine_total,
    suffix: '+',
    label: 'Machines Serviced',
    description: 'Successfully maintained and repaired'
  },
  {
    icon: 'mdi:account-group',
    value: companyStore.companyStats?.client_total,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers nationwide'
  },
  {
    icon: 'mdi:clock-check',
    value: companyStore.companyStats?.project_ontime_percentage,
    suffix: '%',
    label: 'On-Time Delivery',
    description: 'Projects completed on schedule'
  },
  {
    icon: 'mdi:shield-check',
    value: companyStore.companyStats?.year_experience,
    suffix: '+',
    label: 'Years Experience',
    description: 'Proven track record since 2018'
  }
]

const testimonials = computed(() => testimonialStore.testimonialList || [])

const industries = [
  'Automotive',
  'Electronics',
  'Semiconductor',
  'Manufacturing',
  'Chemical',
  'Pharmaceutical'
]

const visibleTestimonials = computed(() => {
  return testimonials.value.slice(currentTestimonialIndex.value, currentTestimonialIndex.value + 2)
})

const nextTestimonials = () => {
  if (currentTestimonialIndex.value < testimonials.value.length - 2) {
    currentTestimonialIndex.value += 2
  } else if (currentTestimonialIndex.value >= testimonials.value.length - 2) {
    currentTestimonialIndex.value = 0
  }
}

const previousTestimonials = () => {
  if (currentTestimonialIndex.value > 0) {
    currentTestimonialIndex.value -= 2
  } else if (currentTestimonialIndex.value <= 0) {
    currentTestimonialIndex.value = testimonials.value.length - 2
  }
}

const goToTestimonial = (index) => {
  currentTestimonialIndex.value = index
}

// Auto-rotate testimonials
onMounted(() => {
  setInterval(() => {
    nextTick(() => {
      nextTestimonials()
    })
  }, 8000)
})
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