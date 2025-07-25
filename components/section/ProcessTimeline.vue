<template>
  <section
    :id="props.id"
    :class="props.class"
    ref="sectionRef"
    class="py-20 lg:py-32 relative overflow-hidden"
  >
    <slot name="prefix"></slot>
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
        >
          Our <span class="text-gradient">Process</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          From initial inquiry to project delivery - our streamlined process
          ensures excellence at every step
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="max-w-6xl mx-auto">
        <!-- Desktop Timeline -->
        <div class="hidden lg:block relative">
          <!-- Timeline Line -->
          <div
            class="absolute top-8 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2 transition-all"
          ></div>
          <div
            class="absolute top-8 left-0 h-1 bg-golden transform -translate-y-1/2 transition-all duration-1000"
            :style="{ width: `${timelineProgress}%` }"
          ></div>

          <!-- Timeline Steps -->
          <div class="grid grid-cols-5 gap-8">
            <div
              v-for="(step, index) in companyStore.companyProcesses?.steps"
              :key="index"
              class="relative animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <!-- Step Circle -->
              <div class="flex justify-center mb-8">
                <div
                  class="w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative z-10"
                  :class="[
                    index <= currentStep
                      ? 'bg-golden border-golden'
                      : 'bg-gray-700 border-gray-600',
                    'hover:scale-110',
                  ]"
                >
                  <Icon
                    :name="step.icon"
                    class="w-8 h-8 transition-colors duration-300"
                    :class="
                      index <= currentStep ? 'text-charcoal' : 'text-gray-400'
                    "
                  />
                </div>
              </div>

              <!-- Step Content -->
              <div class="text-center">
                <div
                  class="text-sm font-semibold text-golden mb-2 uppercase tracking-wide"
                >
                  Step {{ step.number }}
                </div>
                <h3
                  class="text-lg font-montserrat font-semibold text-white mb-3"
                >
                  {{ step.name }}
                </h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Timeline -->
        <div class="lg:hidden">
          <div class="relative">
            <!-- Vertical Line -->
            <div class="absolute left-8 top-0 bottom-0 w-1 bg-gray-700"></div>
            <div
              class="absolute left-8 top-0 w-1 bg-golden transition-all duration-1000"
              :style="{ height: `${mobileTimelineProgress}%` }"
            ></div>

            <!-- Mobile Steps -->
            <div class="space-y-12">
              <div
                v-for="(step, index) in companyStore.companyProcesses?.steps"
                :key="index"
                class="relative flex items-start animate-fade-in-up"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <!-- Step Circle -->
                <div
                  class="w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative z-10 flex-shrink-0"
                  :class="[
                    index <= currentStep
                      ? 'bg-golden border-golden'
                      : 'bg-gray-700 border-gray-600',
                  ]"
                >
                  <Icon
                    :name="step.icon"
                    class="w-8 h-8 transition-colors duration-300"
                    :class="
                      index <= currentStep ? 'text-charcoal' : 'text-gray-400'
                    "
                  />
                </div>

                <!-- Step Content -->
                <div class="ml-8 flex-1">
                  <div
                    class="text-sm font-semibold text-golden mb-2 uppercase tracking-wide"
                  >
                    Step {{ step.number }}
                  </div>
                  <h3
                    class="text-xl font-montserrat font-semibold text-white mb-3"
                  >
                    {{ step.name }}
                  </h3>
                  <p class="text-gray-300 leading-relaxed mb-3">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Benefits -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in companyStore.companyProcesses?.benefits"
            :key="index"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-golden/30"
            >
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
        <!-- <div
            class="text-center mt-16 animate-fade-in-up"
            style="animation-delay: 1s"
          >
            <div
              class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto"
            >
              <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p class="text-gray-300 mb-6">
                Let's discuss your requirements and create a customized solution
                for your industrial needs.
              </p>
              <NuxtLink to="/contact" class="btn-primary">
                <Icon name="mdi:rocket-launch" class="w-5 h-5 mr-2" />
                Start Your Journey
              </NuxtLink>
            </div>
          </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

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

const currentStep = ref(-1);
const timelineProgress = ref(0);
const mobileTimelineProgress = ref(0);
const sectionRef = ref(null);

const animateTimeline = () => {
  let step = 0;
  const animate = () => {
    if (step < companyStore.companyProcesses?.steps.length) {
      currentStep.value = step;
      timelineProgress.value =
        ((step + 1) / companyStore.companyProcesses?.steps.length) * 100;
      mobileTimelineProgress.value =
        ((step + 1) / companyStore.companyProcesses?.steps.length) * 100;
      step++;
    } else {
      step = -1;
      currentStep.value = -1;
      timelineProgress.value = 0;
      mobileTimelineProgress.value = 0;
    }
    nextTick(() => {
      setTimeout(animate, 1000);
    });
  };
  requestAnimationFrame(animate);
};

onMounted(() => {
  const { stop } = useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setTimeout(animateTimeline, 500);
        stop();
      }
    },
    { threshold: 0.3 }
  );
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
