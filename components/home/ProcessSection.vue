<template>
  <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
    <div class="absolute top-20 right-20 w-24 h-24 border border-golden/20 rotate-45 animate-pulse-slow"></div>

    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          Our <span class="text-gradient">Process</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          From initial inquiry to project delivery - our streamlined process ensures excellence at every step
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="max-w-6xl mx-auto">
        <!-- Desktop Timeline -->
        <div class="hidden lg:block relative">
          <!-- Timeline Line -->
          <div class="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2"></div>
          <div class="absolute top-1/2 left-0 h-1 bg-golden transform -translate-y-1/2 transition-all duration-1000" :style="{ width: `${timelineProgress}%` }"></div>

          <!-- Timeline Steps -->
          <div class="grid grid-cols-5 gap-8">
            <div
              v-for="(step, index) in processSteps"
              :key="step.title"
              class="relative animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <!-- Step Circle -->
              <div class="flex justify-center mb-8">
                <div 
                  class="w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative z-10"
                  :class="[
                    index <= currentStep ? 'bg-golden border-golden' : 'bg-gray-700 border-gray-600',
                    'hover:scale-110'
                  ]"
                >
                  <Icon 
                    :name="step.icon" 
                    class="w-8 h-8 transition-colors duration-300"
                    :class="index <= currentStep ? 'text-charcoal' : 'text-gray-400'"
                  />
                </div>
              </div>

              <!-- Step Content -->
              <div class="text-center">
                <div class="text-sm font-semibold text-golden mb-2 uppercase tracking-wide">
                  Step {{ index + 1 }}
                </div>
                <h3 class="text-lg font-montserrat font-semibold text-white mb-3">
                  {{ step.title }}
                </h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  {{ step.description }}
                </p>
                
                <!-- Duration -->
                <div class="mt-3 inline-flex items-center text-xs text-golden bg-golden/10 px-3 py-1 rounded-full">
                  <Icon name="mdi:clock-outline" class="w-3 h-3 mr-1" />
                  {{ step.duration }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Timeline -->
        <div class="lg:hidden">
          <div class="relative">
            <!-- Vertical Line -->
            <div class="absolute left-8 top-0 bottom-0 w-1 bg-gray-700"></div>
            <div class="absolute left-8 top-0 w-1 bg-golden transition-all duration-1000" :style="{ height: `${mobileTimelineProgress}%` }"></div>

            <!-- Mobile Steps -->
            <div class="space-y-12">
              <div
                v-for="(step, index) in processSteps"
                :key="step.title"
                class="relative flex items-start animate-fade-in-up"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <!-- Step Circle -->
                <div 
                  class="w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative z-10 flex-shrink-0"
                  :class="[
                    index <= currentStep ? 'bg-golden border-golden' : 'bg-gray-700 border-gray-600'
                  ]"
                >
                  <Icon 
                    :name="step.icon" 
                    class="w-8 h-8 transition-colors duration-300"
                    :class="index <= currentStep ? 'text-charcoal' : 'text-gray-400'"
                  />
                </div>

                <!-- Step Content -->
                <div class="ml-8 flex-1">
                  <div class="text-sm font-semibold text-golden mb-2 uppercase tracking-wide">
                    Step {{ index + 1 }}
                  </div>
                  <h3 class="text-xl font-montserrat font-semibold text-white mb-3">
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-300 leading-relaxed mb-3">
                    {{ step.description }}
                  </p>
                  
                  <!-- Duration -->
                  <div class="inline-flex items-center text-sm text-golden bg-golden/10 px-3 py-1 rounded-full">
                    <Icon name="mdi:clock-outline" class="w-4 h-4 mr-1" />
                    {{ step.duration }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Benefits -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in processBenefits"
            :key="benefit.title"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-golden/30">
              <Icon :name="benefit.icon" class="w-8 h-8 text-golden" />
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
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 1s">
          <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p class="text-gray-300 mb-6">
              Let's discuss your requirements and create a customized solution for your industrial needs.
            </p>
            <NuxtLink to="/contact" class="btn-primary">
              <Icon name="mdi:rocket-launch" class="w-5 h-5 mr-2" />
              Start Your Journey
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const currentStep = ref(-1)
const timelineProgress = ref(0)
const mobileTimelineProgress = ref(0)
const sectionRef = ref(null)

const processSteps = [
  {
    title: 'Initial Consultation',
    icon: 'mdi:account-voice',
    description: 'We discuss your requirements, assess your needs, and provide initial recommendations for your project.',
    duration: '1-2 Days'
  },
  {
    title: 'Technical Assessment',
    icon: 'mdi:clipboard-search',
    description: 'Our experts conduct a thorough technical evaluation and create detailed specifications for your solution.',
    duration: '3-5 Days'
  },
  {
    title: 'Proposal & Planning',
    icon: 'mdi:file-document-edit',
    description: 'We prepare a comprehensive proposal with timeline, costs, and detailed project plan for your approval.',
    duration: '2-3 Days'
  },
  {
    title: 'Implementation',
    icon: 'mdi:cog-play',
    description: 'Our skilled team executes the project with precision, keeping you updated throughout the process.',
    duration: '1-4 Weeks'
  },
  {
    title: 'Delivery & Support',
    icon: 'mdi:check-circle',
    description: 'Final testing, delivery, training, and ongoing support to ensure optimal performance and satisfaction.',
    duration: 'Ongoing'
  }
]

const processBenefits = [
  {
    title: 'Transparent Communication',
    icon: 'mdi:message-text',
    description: 'Regular updates and clear communication throughout every phase of your project.'
  },
  {
    title: 'Quality Assurance',
    icon: 'mdi:shield-check',
    description: 'Rigorous testing and quality control measures to ensure exceptional results.'
  },
  {
    title: 'Timely Delivery',
    icon: 'mdi:clock-check',
    description: 'Committed to meeting deadlines and delivering projects on schedule.'
  }
]

const animateTimeline = () => {
  let step = 0
  const interval = setInterval(() => {
    if (step < processSteps.length) {
      currentStep.value = step
      timelineProgress.value = ((step + 1) / processSteps.length) * 100
      mobileTimelineProgress.value = ((step + 1) / processSteps.length) * 100
      step++
    } else {
      clearInterval(interval)
    }
  }, 500)
}

onMounted(() => {
  const { stop } = useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setTimeout(animateTimeline, 500)
        stop()
      }
    },
    { threshold: 0.3 }
  )
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>