<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        @click="$emit('close')"
      ></div>

      <!-- Modal Content -->
      <div class="relative bg-charcoal rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="sticky top-0 bg-charcoal border-b border-gray-700 p-6 flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-montserrat font-bold text-white">
              {{ project.title }}
            </h2>
            <div class="flex items-center space-x-4 mt-2">
              <span class="px-3 py-1 bg-golden text-charcoal text-sm font-semibold rounded-full">
                {{ project.category }}
              </span>
              <span 
                class="px-3 py-1 text-xs font-semibold rounded-full"
                :class="[
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                ]"
              >
                {{ project.status }}
              </span>
            </div>
          </div>
          
          <button
            @click="$emit('close')"
            class="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <Icon name="mdi:close" class="w-6 h-6 text-white" />
          </button>
        </div>

        <!-- Content -->
        <div class="p-6">
          <!-- Project Image -->
          <div class="mb-8">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover rounded-xl"
            />
          </div>

          <!-- Project Overview -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <!-- Main Content -->
            <div class="lg:col-span-2">
              <h3 class="text-xl font-montserrat font-semibold text-white mb-4">
                Project Overview
              </h3>
              <p class="text-gray-300 leading-relaxed mb-6">
                {{ project.description }}
              </p>

              <!-- Challenge -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-golden mb-3 flex items-center">
                  <Icon name="mdi:alert-circle" class="w-5 h-5 mr-2" />
                  Challenge
                </h4>
                <p class="text-gray-300 leading-relaxed">
                  {{ project.details.challenge }}
                </p>
              </div>

              <!-- Solution -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-golden mb-3 flex items-center">
                  <Icon name="mdi:lightbulb" class="w-5 h-5 mr-2" />
                  Solution
                </h4>
                <p class="text-gray-300 leading-relaxed">
                  {{ project.details.solution }}
                </p>
              </div>

              <!-- Results -->
              <div>
                <h4 class="text-lg font-semibold text-golden mb-3 flex items-center">
                  <Icon name="mdi:chart-line" class="w-5 h-5 mr-2" />
                  Results & Impact
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="result in project.details.results"
                    :key="result"
                    class="flex items-start text-gray-300"
                  >
                    <Icon name="mdi:check-circle" class="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ result }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
              <!-- Project Details -->
              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 class="text-lg font-semibold text-white mb-4">Project Details</h4>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-400">Client:</span>
                    <span class="text-white font-medium">{{ project.details.client }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-400">Duration:</span>
                    <span class="text-white font-medium">{{ project.details.duration }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-400">Year:</span>
                    <span class="text-white font-medium">{{ project.year }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-400">Location:</span>
                    <span class="text-white font-medium">{{ project.location }}</span>
                  </div>
                </div>
              </div>

              <!-- Technologies -->
              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 class="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-golden/20 text-golden text-sm rounded-full border border-golden/30"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Contact CTA -->
              <div class="bg-gradient-to-br from-golden/20 to-golden/10 rounded-xl p-6 border border-golden/30">
                <h4 class="text-lg font-semibold text-white mb-3">
                  Interested in Similar Project?
                </h4>
                <p class="text-gray-300 text-sm mb-4">
                  Let's discuss how we can help you achieve similar results for your business.
                </p>
                <NuxtLink 
                  to="/contact" 
                  class="btn-primary w-full text-center"
                  @click="$emit('close')"
                >
                  <Icon name="mdi:phone" class="w-4 h-4 mr-2" />
                  Get Consultation
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])

// Prevent body scroll when modal is open
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Modal specific styles */
</style>