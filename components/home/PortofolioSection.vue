<template>
  <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
    <div class="absolute top-20 right-20 w-24 h-24 border border-golden/20 rotate-45 animate-pulse-slow"></div>

    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          Our <span class="text-gradient">Portofolio</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Showcasing our expertise through successful projects and innovative solutions
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="px-6 py-3 rounded-lg font-medium transition-all duration-300"
          :class="[
            activeCategory === category
              ? 'bg-golden text-charcoal'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Portofolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Project Image -->
          <div class="relative h-64 overflow-hidden">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-golden text-charcoal text-sm font-semibold rounded-full">
                {{ project.category }}
              </span>
            </div>

            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span 
                class="px-3 py-1 text-xs font-semibold rounded-full"
                :class="[
                  project.project_status === 'completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                ]"
              >
                {{ project.project_status }}
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <!-- Title -->
            <h3 class="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-300 text-sm leading-relaxed mb-4">
              {{ project.project_solution }}
            </p>

            <!-- Technologies/Services -->
            <div class="flex flex-wrap gap-2 mb-4 max-h-24 overflow-y-hidden">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Project Details -->
            <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
              <div class="flex items-center">
                <Icon name="mdi:calendar" class="w-4 h-4 mr-1" />
                <span>{{ project.date.getFullYear() }}</span>
              </div>
              <div class="flex items-center">
                <Icon name="mdi:map-marker" class="w-4 h-4 mr-1" />
                <span>{{ project.project_location }}</span>
              </div>
            </div>

            <!-- View Details Button -->
            <NuxtLink :to="project.path">
              <button
                class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-golden hover:text-charcoal transition-all duration-300 font-medium"
              >
                View Details
              </button>
            </NuxtLink>
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12" v-if="hasMoreProjects">
        <button
          @click="loadMoreProjects"
          class="btn-secondary"
        >
          <Icon name="mdi:plus" class="w-5 h-5 mr-2" />
          Load More Projects
        </button>
      </div>

      <!-- CTA Section -->
      <!-- <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
          <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-gray-300 mb-6">
            Let's discuss how we can help you achieve your industrial goals with our proven expertise.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary">
              <Icon name="mdi:rocket-launch" class="w-5 h-5 mr-2" />
              Start Your Project
            </NuxtLink>
            <NuxtLink to="/portofolio" class="btn-secondary">
              <Icon name="mdi:view-grid" class="w-5 h-5 mr-2" />
              View Full Portofolio
            </NuxtLink>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Project Modal -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const portofolioStore = usePortofolioStore();
await callOnce("portofolio-data", () => portofolioStore.loadData());

const activeCategory = ref('All')
const selectedProject = ref(null)
const displayedProjects = ref(6)

// Categories
const categories = computed(() => {
  return ["All", ...portofolioStore.categoryList];
});

// Projects
const projectList = computed(() => {
  return portofolioStore.portofolioList;
});

const filteredProjects = computed(() => {
  const filtered = activeCategory.value === 'All' 
    ? projectList.value 
    : projectList.value.filter(project => project.category === activeCategory.value)
  
  return filtered.slice(0, displayedProjects.value)
})

const hasMoreProjects = computed(() => {
  const totalFiltered = activeCategory.value === 'All' 
    ? projectList.value.length 
    : projectList.value.filter(project => project.category === activeCategory.value).length
  
  return displayedProjects.value < totalFiltered
})

const loadMoreProjects = () => {
  displayedProjects.value += 3
}

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>