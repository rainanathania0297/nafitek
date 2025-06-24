<template>
  <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
    <div class="absolute top-20 right-20 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"></div>

    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          Our <span class="text-gradient">Services</span>
        </h2>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive industrial solutions tailored to your business needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative"
        >
          <!-- Service Card -->
          <div 
            class="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 hover:border-golden hover:shadow-2xl hover:shadow-golden/20 hover:scale-105 animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Background Image -->
            <div class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <NuxtImg
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 p-8 h-full flex flex-col">
              <!-- Icon -->
              <div class="mb-6">
                <div class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon :name="service.icon" class="w-8 h-8 text-charcoal" />
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-golden transition-colors duration-300">
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-300 leading-relaxed mb-6 flex-grow">
                {{ service.description }}
              </p>

              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-golden mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul class="space-y-2">
                  <li 
                    v-for="feature in service.features"
                    :key="feature"
                    class="flex items-start text-sm text-gray-400"
                  >
                    <Icon name="mdi:check-circle" class="w-4 h-4 text-golden mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- CTA Button -->
              <div class="mt-auto">
                <NuxtLink 
                  :to="`/services#${service.slug}`"
                  class="inline-flex items-center text-golden hover:text-white transition-colors duration-300 group/btn"
                >
                  <span class="mr-2">Learn More</span>
                  <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </NuxtLink>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-4 right-4 w-8 h-8 border border-golden/30 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            <div class="absolute bottom-0 left-0 w-0 h-1 bg-golden group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
          <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p class="text-gray-300 mb-6">
            Our team of experts can design and implement tailored solutions for your specific industrial requirements.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary">
              <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
              Get Consultation
            </NuxtLink>
            <NuxtLink to="/services" class="btn-secondary">
              <Icon name="mdi:view-list" class="w-5 h-5 mr-2" />
              View All Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Component Supply',
    slug: 'component-supply',
    icon: 'mdi:package-variant',
    description: 'We offer a diverse range of high-quality components to meet the operational needs of our customers\' machinery. We ensure that spare parts are readily available and comply with industry standards.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Mechanical and electrical spare parts',
      'Vacuum accessory components',
      'Quality assurance testing',
      'Fast delivery service'
    ]
  },
  {
    title: 'Special Purpose Machines',
    slug: 'special-purpose-machines',
    icon: 'mdi:robot-industrial',
    description: 'We provide specialized machines to enhance efficiency and precision in various manufacturing applications. Our team customizes each machine to meet our clients\' specific requirements.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Custom machine design',
      'Precision manufacturing',
      'Performance optimization',
      'Technical documentation'
    ]
  },
  {
    title: 'Maintenance & Repair',
    slug: 'maintenance-repair',
    icon: 'mdi:wrench',
    description: 'We offer comprehensive maintenance and repair services for machines to keep your equipment operating at peak performance. Our skilled team is prepared to address a diverse range of issues.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Vacuum pump specialization',
      'Helium leak testing',
      'Electric motor rewinding',
      'Electronic component repair'
    ]
  },
  {
    title: 'Automation Services',
    slug: 'automation',
    icon: 'mdi:robot',
    description: 'We provide automation services aimed at improving the efficiency of industrial machinery. Our objective is to optimize machine performance through advanced technology.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'PLC program installation',
      'Control panel wiring',
      'Andon systems',
      'Process optimization'
    ]
  },
  {
    title: 'Brand Distribution',
    slug: 'brand-distribution',
    icon: 'mdi:store',
    description: 'We offer a diverse range of products to meet the machinery needs of various industrial sectors. Our selection includes trusted brands known for their reliability.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Atlas Copco vacuum pumps',
      'Trusco products & chemicals',
      'Ulvac solutions',
      'Authorized distributor'
    ]
  }
]
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>