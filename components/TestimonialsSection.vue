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
              :key="testimonial.id"
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
                  "{{ testimonial.content }}"
                </blockquote>

                <!-- Rating -->
                <div class="flex items-center mb-4">
                  <div class="flex space-x-1 mr-3">
                    <Icon
                      v-for="star in 5"
                      :key="star"
                      name="mdi:star"
                      class="w-5 h-5 text-golden"
                    />
                  </div>
                  <span class="text-golden font-semibold">5.0</span>
                </div>

                <!-- Client Info -->
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center mr-4">
                    <span class="text-charcoal font-bold text-lg">
                      {{ testimonial.author.charAt(0) }}
                    </span>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold">{{ testimonial.author }}</h4>
                    <p class="text-gray-400 text-sm">{{ testimonial.position }}</p>
                    <p class="text-golden text-sm">{{ testimonial.company }}</p>
                  </div>
                </div>

                <!-- Project Type -->
                <div class="mt-4">
                  <span class="inline-flex items-center px-3 py-1 bg-golden/20 text-golden text-xs rounded-full border border-golden/30">
                    <Icon name="mdi:briefcase" class="w-3 h-3 mr-1" />
                    {{ testimonial.projectType }}
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
              :disabled="currentTestimonialIndex === 0"
            >
              <Icon name="mdi:chevron-left" class="w-6 h-6 text-white" />
            </button>
            <button
              @click="nextTestimonials"
              class="w-12 h-12 bg-gray-700 hover:bg-golden rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              :disabled="currentTestimonialIndex >= testimonials.length - 2"
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
import { ref, computed, onMounted } from 'vue'

const currentTestimonialIndex = ref(0)

const metrics = [
  {
    icon: 'mdi:cog',
    value: 500,
    suffix: '+',
    label: 'Machines Serviced',
    description: 'Successfully maintained and repaired'
  },
  {
    icon: 'mdi:account-group',
    value: 150,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers nationwide'
  },
  {
    icon: 'mdi:clock-check',
    value: 99,
    suffix: '%',
    label: 'On-Time Delivery',
    description: 'Projects completed on schedule'
  },
  {
    icon: 'mdi:shield-check',
    value: 6,
    suffix: '+',
    label: 'Years Experience',
    description: 'Proven track record since 2018'
  }
]

const testimonials = [
  {
    id: 1,
    content: "PT Nafitek Global Indonesia has been instrumental in maintaining our production line efficiency. Their expertise in vacuum pump maintenance and quick response time has saved us significant downtime costs.",
    author: "Ahmad Wijaya",
    position: "Production Manager",
    company: "PT Elektronik Nusantara",
    projectType: "Vacuum Pump Maintenance"
  },
  {
    id: 2,
    content: "The automation solutions provided by Nafitek have revolutionized our manufacturing process. The PLC programming and control panel installation were executed flawlessly with excellent documentation.",
    author: "Sari Indrawati",
    position: "Engineering Director",
    company: "PT Industri Maju",
    projectType: "Automation Services"
  },
  {
    id: 3,
    content: "Outstanding service quality and competitive pricing. Their team's technical expertise in special purpose machines helped us achieve our production targets ahead of schedule.",
    author: "Robert Chen",
    position: "Operations Manager",
    company: "PT Precision Manufacturing",
    projectType: "Special Purpose Machine"
  },
  {
    id: 4,
    content: "Reliable partner for all our industrial component needs. The quality of spare parts and after-sales support from Nafitek has been consistently excellent over the years.",
    author: "Diana Kusuma",
    position: "Procurement Head",
    company: "PT Teknologi Industri",
    projectType: "Component Supply"
  },
  {
    id: 5,
    content: "Professional team with deep understanding of industrial automation. Their Andon system implementation has significantly improved our production monitoring and quality control.",
    author: "Michael Tan",
    position: "Plant Manager",
    company: "PT Otomotif Prima",
    projectType: "Andon System"
  },
  {
    id: 6,
    content: "Exceptional technical support and training provided by Nafitek team. Their expertise in Atlas Copco and Ulvac products has been invaluable for our semiconductor operations.",
    author: "Lisa Hartono",
    position: "Technical Manager",
    company: "PT Semikonduktor Indonesia",
    projectType: "Brand Distribution"
  }
]

const industries = [
  'Automotive',
  'Electronics',
  'Semiconductor',
  'Manufacturing',
  'Chemical',
  'Pharmaceutical'
]

const visibleTestimonials = computed(() => {
  return testimonials.slice(currentTestimonialIndex.value, currentTestimonialIndex.value + 2)
})

const nextTestimonials = () => {
  if (currentTestimonialIndex.value < testimonials.length - 2) {
    currentTestimonialIndex.value += 2
  }
}

const previousTestimonials = () => {
  if (currentTestimonialIndex.value > 0) {
    currentTestimonialIndex.value -= 2
  }
}

const goToTestimonial = (index) => {
  currentTestimonialIndex.value = index
}

// Auto-rotate testimonials
onMounted(() => {
  setInterval(() => {
    if (currentTestimonialIndex.value >= testimonials.length - 2) {
      currentTestimonialIndex.value = 0
    } else {
      nextTestimonials()
    }
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