<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url('${project.image}')` }"
        ></div>
        <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10 z-5"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-center space-x-4 mb-6">
            <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
              {{ project.category }}
            </span>
            <span class="text-gray-300 text-sm">{{ formatDate(project.date) }}</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            {{ project.title }}
          </h1>
          
          <div class="flex items-center justify-center space-x-4 mb-6">
            <div class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span class="text-white font-medium">Client:</span>
              <span class="text-gray-300 ml-2">{{ project.project_client }}</span>
            </div>
            
            <div class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span class="text-white font-medium">Location:</span>
              <span class="text-gray-300 ml-2">{{ project.project_location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Content -->
    <section class="py-16 lg:py-24 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700">
          <!-- Project Content -->
          <div class="prose prose-lg prose-invert max-w-none">
            <ContentRenderer v-if="project" :value="project" />
            <p v-else class="text-gray-300">Loading project details...</p>
          </div>
        </div>
        
        <!-- Related Projects -->
        <div class="max-w-6xl mx-auto mt-20">
          <h2 class="text-3xl font-montserrat font-bold text-white mb-12 text-center">
            Related <span class="text-gradient">Projects</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="(relatedProject, index) in relatedProjects" 
              :key="relatedProject._id"
              class="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Project Image -->
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="relatedProject.image"
                  :alt="relatedProject.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
                    {{ relatedProject.category }}
                  </span>
                </div>
              </div>

              <!-- Project Content -->
              <div class="p-6">
                <h3 class="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300 line-clamp-2">
                  {{ relatedProject.title }}
                </h3>
                
                <p class="text-gray-300 mb-4 line-clamp-3">
                  {{ relatedProject.project_solution }}
                </p>
                
                <!-- View Details -->
                <NuxtLink 
                  :to="relatedProject.path"
                  class="inline-flex items-center text-golden hover:text-golden-light transition-colors duration-300 font-medium"
                >
                  View Details
                  <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Back to Portofolio -->
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
          <NuxtLink 
            to="/portofolio"
            class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
          >
            <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
            Back to Portofolio
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-industrial relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready for a Similar <span class="text-gradient">Solution?</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can implement a similar solution for your business
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">
                <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
                Contact Us
              </NuxtLink>
              <NuxtLink to="/services" class="btn-default">
                <Icon name="mdi:view-list" class="w-5 h-5 mr-2" />
                Explore Our Services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// stores
const portofolioStore = usePortofolioStore();
await callOnce('portofolio-data', () => portofolioStore.loadData())

// Get the slug from the route
const route = useRoute()
const { slug } = route.params

// data
const loading = ref(false)
const project = ref(null)
const relatedProjects = ref(null)

async function setup() {
  loading.value = true
  project.value = await portofolioStore.getPortofolioByStem(slug)
  if (!project.value) {
    navigateTo('/portofolio')
  }
  relatedProjects.value = await portofolioStore.getRelatedPortofolio(slug, project.value?.category)
  loading.value = false
}

await setup()

// Format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// SEO Meta
useHead({
  title: project.value ? `${project.value.title} - PT Nafitek Global Indonesia` : 'Portofolio - PT Nafitek Global Indonesia',
  meta: [
    {
      name: 'description',
      content: project.value ? project.value.summary : 'Portofolio of industrial projects by PT Nafitek Global Indonesia'
    },
    {
      property: 'og:title',
      content: project.value ? project.value.title : 'Portofolio - PT Nafitek Global Indonesia'
    },
    {
      property: 'og:description',
      content: project.value ? project.value.summary : 'Portofolio of industrial projects by PT Nafitek Global Indonesia'
    },
    {
      property: 'og:image',
      content: project.value ? project.value.image : '/logo.png'
    }
  ]
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gradient-overlay {
  background: linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.9));
}

.bg-gradient-industrial {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
}

:deep(.prose) {
  color: #e5e7eb;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  color: white;
  font-family: 'Montserrat', sans-serif;
}

:deep(.prose h2) {
  color: #FBBF24;
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose h3) {
  color: #FBBF24;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.prose strong) {
  color: #FBBF24;
}

:deep(.prose a) {
  color: #FBBF24;
  text-decoration: none;
}

:deep(.prose a:hover) {
  text-decoration: underline;
}

:deep(.prose blockquote) {
  border-left-color: #FBBF24;
  color: #9ca3af;
}

:deep(.prose ul li::before) {
  background-color: #FBBF24;
}

:deep(.prose ol li::before) {
  color: #FBBF24;
}

:deep(.prose hr) {
  border-color: #4b5563;
}

:deep(.prose table) {
  border-collapse: collapse;
  width: 100%;
}

:deep(.prose table th) {
  background-color: #374151;
  color: white;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #4b5563;
}

:deep(.prose table td) {
  padding: 0.75rem;
  border: 1px solid #4b5563;
}

:deep(.prose table tr:nth-child(even)) {
  background-color: #1f2937;
}
</style>