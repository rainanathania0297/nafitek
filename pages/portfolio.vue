<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        ></div>
        <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10 z-5"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 z-5">
        <div class="absolute top-20 left-10 w-16 h-16 border-2 border-golden/30 rotate-45 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-20 h-20 border border-golden/20 rounded-full animate-pulse-slow"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            Our <span class="text-gradient">Portfolio</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
            Showcasing our expertise through successful projects and innovative solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Stats -->
    <section class="py-16 bg-gradient-industrial">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="animate-fade-in-up">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter :target="150" suffix="+" />
            </div>
            <p class="text-gray-300">Projects Completed</p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter :target="500" suffix="+" />
            </div>
            <p class="text-gray-300">Machines Serviced</p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter :target="98" suffix="%" />
            </div>
            <p class="text-gray-300">Success Rate</p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter :target="50" suffix="+" />
            </div>
            <p class="text-gray-300">Industries Served</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Filter & Grid -->
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
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

        <!-- Portfolio Grid -->
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
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full">
                  {{ project.category }}
                </span>
              </div>
              
              <!-- Status Badge -->
              <div class="absolute top-4 right-4">
                <span 
                  class="px-3 py-1 text-sm font-medium rounded-full"
                  :class="project.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'"
                >
                  {{ project.status }}
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-gray-300 mb-4 line-clamp-3">
                {{ project.description }}
              </p>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Project Details -->
              <div class="flex justify-between items-center text-sm text-gray-400 mb-4">
                <div class="flex items-center">
                  <Icon name="heroicons:calendar" class="w-4 h-4 mr-1" />
                  <span>{{ project.year }}</span>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 mr-1" />
                  <span>{{ project.location }}</span>
                </div>
              </div>

              <!-- View Details Button -->
              <button 
                @click="openProjectModal(project)"
                class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-golden hover:text-charcoal transition-all duration-300 font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-16" v-if="hasMoreProjects">
          <button 
            @click="loadMoreProjects"
            class="px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
          >
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Industries <span class="text-gradient">We Serve</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored solutions for diverse industrial needs
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="(industry, index) in industries" 
            :key="industry.name"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-golden/30 transition-colors duration-300">
              <Icon :name="industry.icon" class="w-8 h-8 text-golden" />
            </div>
            <h3 class="text-white font-medium">{{ industry.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <ProjectModal 
      v-if="selectedProject" 
      :project="selectedProject" 
      @close="closeProjectModal" 
    />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive data
const activeCategory = ref('All')
const selectedProject = ref(null)
const displayedProjects = ref(9) // Initially show 9 projects

// Categories
const categories = [
  'All',
  'Maintenance',
  'Automation',
  'Special Machines',
  'Component Supply',
  'Distribution'
]

// Industries
const industries = [
  { name: 'Automotive', icon: 'heroicons:truck' },
  { name: 'Electronics', icon: 'heroicons:cpu-chip' },
  { name: 'Semiconductor', icon: 'heroicons:circuit-board' },
  { name: 'Manufacturing', icon: 'heroicons:cog-6-tooth' },
  { name: 'Chemical', icon: 'heroicons:beaker' },
  { name: 'Pharmaceutical', icon: 'heroicons:heart' }
]

// Portfolio projects data
const allProjects = [
  {
    id: 1,
    title: 'Vacuum Pump Overhaul - Electronics Manufacturing',
    description: 'Complete overhaul and optimization of Pfeiffer vacuum pump systems for semiconductor production line, including performance testing and leak detection.',
    category: 'Maintenance',
    status: 'Completed',
    year: '2024',
    location: 'Jakarta',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Pfeiffer Pumps', 'Leak Testing', 'Performance Optimization'],
    details: {
      client: 'PT Elektronik Nusantara',
      duration: '3 weeks',
      challenge: 'Critical vacuum pump failure affecting production line efficiency',
      solution: 'Complete overhaul with upgraded components and performance optimization',
      results: '99.5% uptime improvement and 15% energy efficiency gain'
    }
  },
  {
    id: 2,
    title: 'Automated Quality Control System',
    description: 'Implementation of PLC-based quality control system with Andon integration for automotive parts manufacturing facility.',
    category: 'Automation',
    status: 'Completed',
    year: '2024',
    location: 'Bekasi',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['PLC Programming', 'Andon System', 'HMI Interface'],
    details: {
      client: 'PT Industri Maju',
      duration: '6 weeks',
      challenge: 'Manual quality control causing production delays',
      solution: 'Automated PLC-based system with real-time monitoring',
      results: '40% reduction in quality control time and improved accuracy'
    }
  },
  {
    id: 3,
    title: 'Custom Assembly Line Machine',
    description: 'Design and manufacturing of specialized assembly machine for precision electronic components with integrated vision system.',
    category: 'Special Machines',
    status: 'Completed',
    year: '2023',
    location: 'Tangerang',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Custom Design', 'Precision Assembly', 'Vision System'],
    details: {
      client: 'PT Precision Manufacturing',
      duration: '12 weeks',
      challenge: 'Need for high-precision automated assembly solution',
      solution: 'Custom-designed machine with vision-guided assembly',
      results: '300% increase in assembly speed with 99.8% accuracy'
    }
  },
  {
    id: 4,
    title: 'Industrial Component Supply Program',
    description: 'Comprehensive spare parts supply and inventory management system for chemical processing plant operations.',
    category: 'Component Supply',
    status: 'Ongoing',
    year: '2023',
    location: 'Cilegon',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Inventory Management', 'Genuine Parts', 'Logistics'],
    details: {
      client: 'PT Kimia Industri',
      duration: 'Ongoing',
      challenge: 'Complex inventory management for critical spare parts',
      solution: 'Integrated supply chain management with predictive maintenance',
      results: '30% reduction in downtime and optimized inventory costs'
    }
  },
  {
    id: 5,
    title: 'Atlas Copco Vacuum System Installation',
    description: 'Installation and commissioning of Atlas Copco vacuum system for pharmaceutical manufacturing with full validation.',
    category: 'Distribution',
    status: 'Completed',
    year: '2023',
    location: 'Bandung',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Atlas Copco', 'System Integration', 'Commissioning'],
    details: {
      client: 'PT Farmasi Nusantara',
      duration: '4 weeks',
      challenge: 'Pharmaceutical-grade vacuum system requirements',
      solution: 'Atlas Copco system with full GMP compliance',
      results: 'FDA-compliant installation with 99.9% reliability'
    }
  },
  {
    id: 6,
    title: 'Motor Rewinding & Repair Service',
    description: 'Emergency motor rewinding service for critical production equipment in textile manufacturing facility.',
    category: 'Maintenance',
    status: 'Completed',
    year: '2024',
    location: 'Surabaya',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Motor Rewinding', 'Emergency Service', 'Performance Testing'],
    details: {
      client: 'PT Tekstil Indonesia',
      duration: '1 week',
      challenge: 'Critical motor failure during peak production',
      solution: 'Emergency rewinding with upgraded insulation',
      results: 'Restored production with improved motor efficiency'
    }
  },
  {
    id: 7,
    title: 'PLC Control Panel Upgrade',
    description: 'Modernization of legacy control systems with new PLC technology for improved reliability and functionality.',
    category: 'Automation',
    status: 'Completed',
    year: '2023',
    location: 'Karawang',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['PLC Upgrade', 'Control Panel', 'System Migration'],
    details: {
      client: 'PT Otomotif Prima',
      duration: '5 weeks',
      challenge: 'Obsolete control system affecting production',
      solution: 'Complete PLC upgrade with modern HMI interface',
      results: 'Improved system reliability and reduced maintenance costs'
    }
  },
  {
    id: 8,
    title: 'Helium Leak Testing Equipment',
    description: 'Installation and calibration of helium leak testing equipment for aerospace component manufacturing.',
    category: 'Special Machines',
    status: 'Completed',
    year: '2024',
    location: 'Bandung',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Leak Testing', 'Aerospace', 'Calibration'],
    details: {
      client: 'PT Aerospace Components',
      duration: '3 weeks',
      challenge: 'High-precision leak testing requirements',
      solution: 'Advanced helium leak testing system with automated handling',
      results: 'Achieved aerospace-grade leak detection standards'
    }
  },
  {
    id: 9,
    title: 'Trusco Safety Equipment Supply',
    description: 'Complete safety equipment supply and installation for manufacturing facility safety compliance.',
    category: 'Component Supply',
    status: 'Completed',
    year: '2023',
    location: 'Bekasi',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Safety Equipment', 'Trusco', 'Compliance'],
    details: {
      client: 'PT Manufaktur Aman',
      duration: '2 weeks',
      challenge: 'Safety compliance requirements for new facility',
      solution: 'Comprehensive Trusco safety equipment installation',
      results: 'Full safety compliance with zero incidents record'
    }
  }
]

// Computed properties
const filteredProjects = computed(() => {
  const filtered = activeCategory.value === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory.value)
  
  return filtered.slice(0, displayedProjects.value)
})

const hasMoreProjects = computed(() => {
  const totalFiltered = activeCategory.value === 'All' 
    ? allProjects.length 
    : allProjects.filter(project => project.category === activeCategory.value).length
  
  return displayedProjects.value < totalFiltered
})

// Methods
const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}

const loadMoreProjects = () => {
  displayedProjects.value += 6
}

// SEO Meta
useHead({
  title: 'Portfolio - PT Nafitek Global Indonesia | Our Projects & Success Stories',
  meta: [
    {
      name: 'description',
      content: 'Explore our portfolio of successful industrial projects including maintenance, automation, special machines, and component supply solutions across various industries in Indonesia.'
    },
    {
      name: 'keywords',
      content: 'portfolio, industrial projects, maintenance projects, automation solutions, special machines, component supply, vacuum pump services, PLC programming, Indonesia'
    },
    {
      property: 'og:title',
      content: 'Portfolio - PT Nafitek Global Indonesia'
    },
    {
      property: 'og:description',
      content: 'Discover our successful industrial projects and innovative solutions across maintenance, automation, and manufacturing sectors.'
    },
    {
      property: 'og:image',
      content: '/logo.png'
    }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>