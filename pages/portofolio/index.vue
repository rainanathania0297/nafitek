<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="
            background-image: url(&quot;https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&quot;);
          "
        ></div>
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-10 z-5"
        ></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 z-5">
        <div
          class="absolute top-20 left-10 w-16 h-16 border-2 border-golden/30 rotate-45 animate-float"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-20 h-20 border border-golden/20 rounded-full animate-pulse-slow"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <h1
            class="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in-up"
          >
            Our <span class="text-gradient">Portofolio</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            Showcasing our expertise through successful projects and innovative
            solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Portofolio Stats -->
    <section class="py-16 bg-gradient-industrial">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="animate-fade-in-up">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter
                :target="companyStore.companyStats?.project_total"
                suffix="+"
              />
            </div>
            <p class="text-gray-300">Projects Completed</p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter
                :target="companyStore.companyStats?.machine_total"
                suffix="+"
              />
            </div>
            <p class="text-gray-300">Machines Serviced</p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter
                :target="companyStore.companyStats?.project_success_percentage"
                suffix="%"
              />
            </div>
            <p class="text-gray-300">Success Rate</p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="text-3xl md:text-4xl font-bold text-golden mb-2">
              <AnimatedCounter
                :target="companyStore.companyStats?.industry_served"
                suffix="+"
              />
            </div>
            <p class="text-gray-300">Industries Served</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portofolio Filter & Grid -->
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
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white',
            ]"
            style="animation-delay: 0.1s; z-index: 1"
          >
            {{ category }}
          </button>
        </div>

        <!-- Portofolio Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Project Image -->
            <div class="relative h-64 overflow-hidden">
              <NuxtImg
                preset="thumbnail"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
              ></div>

              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span
                  class="px-3 py-1 bg-golden text-charcoal text-sm font-medium rounded-full"
                >
                  {{ project.category }}
                </span>
              </div>

              <!-- Status Badge -->
              <div class="absolute top-4 right-4">
                <span
                  class="px-3 py-1 text-sm font-medium rounded-full"
                  :class="
                    project.project_status === 'completed'
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white'
                  "
                >
                  {{ project.project_status }}
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <h3
                class="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300"
              >
                {{ project.title }}
              </h3>
              <p class="text-gray-300 mb-4 line-clamp-3">
                {{ project.project_solution }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4 max-h-24 overflow-y-hidden">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Project Details -->
              <div
                class="flex justify-between items-center text-sm text-gray-400 mb-4"
              >
                <div class="flex items-center">
                  <Icon name="heroicons:calendar" class="w-4 h-4 mr-1" />
                  <span>{{ project.date.getFullYear() }}</span>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 mr-1" />
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
    <section
      class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Industries <span class="text-gradient">We Serve</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored
            solutions for diverse industrial needs
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="(industry, index) in industries"
            :key="industry.name"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-golden/30 transition-colors duration-300"
            >
              <Icon :name="industry.icon" class="w-8 h-8 text-golden" />
            </div>
            <h3 class="text-white font-medium">{{ industry.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>

      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Client <span class="text-gradient">Testimonials</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            What our clients say about working with PT Nafitek Global Indonesia
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div
            v-for="(testimonial, index) in testimonialStore.testimonialList"
            :key="index"
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-golden/20 rounded-full flex shrink-0 items-center justify-center mr-4 overflow-hidden"
              >
                <NuxtImg
                  v-if="testimonial.image"
                  preset="thumbnail"
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-12 h-12 object-cover"
                  loading="lazy"
                />
                <Icon
                  v-else
                  name="heroicons:user-circle"
                  class="w-8 h-8 text-golden"
                />
              </div>
              <div>
                <h4 class="text-lg font-montserrat font-bold text-white">
                  {{ testimonial.name }}
                </h4>
                <p class="text-gray-400 text-sm">
                  {{ testimonial.position }}, {{ testimonial.company }}
                </p>
              </div>
            </div>

            <div class="mb-6">
              <Icon
                v-for="i in 5"
                :key="i"
                :name="
                  i <= testimonial.rating
                    ? 'mdi:star'
                    : i - testimonial.rating <= 0.5
                      ? 'mdi:star-half-full'
                      : 'mdi:star-outline'
                "
                class="w-5 h-5 text-golden inline-block"
              />
            </div>

            <p class="text-gray-300 italic">"{{ testimonial.message }}"</p>

            <div class="mt-4 text-gray-400 text-sm">
              {{ testimonial.project }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>

      <div class="container mx-auto px-4 lg:px-8">
        <div
          class="text-center mt-16 animate-fade-in-up"
          style="animation-delay: 0.8s"
        >
          <div
            class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto"
          >
            <h2
              class="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6"
            >
              Ready to Start Your
              <span class="text-gradient">Next Project?</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can help you achieve your
              industrial goals
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

    <!-- Project Modal -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// store
const companyStore = useCompanyStore();
const portofolioStore = usePortofolioStore();
const testimonialStore = useTestimonialStore();
await callOnce("company-data", () => companyStore.loadData());
await callOnce("testimonial-data", () => testimonialStore.loadData());
await callOnce("portofolio-data", () => portofolioStore.loadData());

// Reactive data
const activeCategory = ref("All");
const selectedProject = ref(null);
const displayedProjects = ref(9); // Initially show 9 projects

// Categories
const categories = computed(() => {
  return ["All", ...portofolioStore.categoryList];
});

// Industries
const industries = [
  { name: "Automotive", icon: "heroicons:truck" },
  { name: "Electronics", icon: "heroicons:cpu-chip" },
  { name: "Semiconductor", icon: "mdi:integrated-circuit-chip" },
  { name: "Manufacturing", icon: "heroicons:cog-6-tooth" },
  { name: "Chemical", icon: "heroicons:beaker" },
  { name: "Pharmaceutical", icon: "heroicons:heart" },
];

const projectList = computed(() => {
  return portofolioStore.portofolioList;
});

// Computed properties
const filteredProjects = computed(() => {
  const filtered =
    activeCategory.value === "All"
      ? projectList.value
      : projectList.value.filter(
          (project) => project.category === activeCategory.value
        );

  return filtered.slice(0, displayedProjects.value);
});

const hasMoreProjects = computed(() => {
  const totalFiltered =
    activeCategory.value === "All"
      ? projectList.value.length
      : projectList.value.filter(
          (project) => project.category === activeCategory.value
        ).length;

  return displayedProjects.value < totalFiltered;
});

// Methods
const openProjectModal = (project) => {
  selectedProject.value = project;
};

const closeProjectModal = () => {
  selectedProject.value = null;
};

const loadMoreProjects = () => {
  displayedProjects.value += 6;
};

// SEO Meta
useHead({
  title:
    "Portofolio - PT Nafitek Global Indonesia | Our Projects & Success Stories",
  meta: [
    {
      name: "description",
      content:
        "Explore our portofolio of successful industrial projects including maintenance, automation, special machines, and component supply solutions across various industries in Indonesia.",
    },
    {
      name: "keywords",
      content:
        "portofolio, industrial projects, maintenance projects, automation solutions, special machines, component supply, vacuum pump services, PLC programming, Indonesia",
    },
    {
      property: "og:title",
      content: "Portofolio - PT Nafitek Global Indonesia",
    },
    {
      property: "og:description",
      content:
        "Discover our successful industrial projects and innovative solutions across maintenance, automation, and manufacturing sectors.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
  ],
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
