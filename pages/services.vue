<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            Our <span class="text-gradient">Services</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
            Comprehensive industrial solutions tailored to your business needs
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Complete <span class="text-gradient">Industrial Solutions</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From machinery procurement to automation services, we provide end-to-end solutions for your industrial needs
          </p>
        </div>

        <!-- Service Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div v-for="service in services" :key="service.id" class="card-service animate-fade-in-up">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center">
                  <Icon :name="service.icon" class="w-8 h-8 text-golden" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-montserrat font-bold text-white mb-4">{{ service.name }}</h3>
                <p class="text-gray-300 mb-6 leading-relaxed">{{ service.overview }}</p>
                
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-golden mb-3">{{ service.feature_cta }}</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li v-for="feature in service.feature_list" :key="feature" class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <NuxtLink 
                  to="/contact" 
                  class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
                >
                  {{ service.cta_text }}
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vacuum Pump Specialists Section -->
    <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
      <div class="absolute top-20 right-20 w-24 h-24 border border-golden/20 rotate-45 animate-pulse-slow"></div>
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="animate-fade-in-left">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Vacuum Pump <span class="text-gradient">Specialists</span>
            </h2>
            <div class="w-24 h-1 bg-golden mb-6"></div>
            
            <p class="text-lg text-gray-300 mb-8 leading-relaxed">{{ vacuumPumpService.overview }}</p>

            <div class="mb-8">
              <h3 class="text-xl font-montserrat font-bold text-white mb-4">Vacuum Pump Brands We Service:</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="brand in vacuumPumpService.feature_list" :key="brand" class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">{{ brand }}</span>
                </div>
              </div>
            </div>

            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              {{ vacuumPumpService.cta_text }}
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>

          <!-- Image -->
          <div class="animate-fade-in-right">
            <NuxtImg
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Vacuum pump maintenance and repair"
              class="w-full h-[500px] object-cover rounded-2xl shadow-industrial"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Distribution Section -->
    <section id="brand-distribution" class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Authorized <span class="text-gradient">Distributor</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            {{ brandDistributionService.overview }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div v-for="partner in partnerStore.pinnedPartnerList" :key="partner.id" class="card-industrial text-center animate-fade-in-up">
            <div class="w-20 h-20 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <template v-if="partner.logo">
                <NuxtImg
                  :src="partner.logo"
                  :alt="partner.name"
                  class="p-1 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </template>
              <template v-else>
                <span class="text-golden font-bold text-lg">{{ partner.name.slice(0, 2) }}</span>
              </template>
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">{{ partner.name }}</h3>
            <p class="text-gray-300 mb-6">{{ partner.description }}</p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li v-for="product in partner.products" :key="product">• {{ product }}</li>
            </ul>
          </div>
        </div>

        <!-- Brand Logos -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="partner in partnerStore.unpinnedPartnerList" 
            :key="partner.id" 
            class="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-golden transition-all duration-300 hover:scale-105">
              <template v-if="partner.logo">
                <NuxtImg
                  :preset="partner.logo.includes('.svg') ? undefined : 'brand'"
                  :src="partner.logo"
                  :alt="partner.name"
                  class="w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </template>
              <template v-else>
                <span class="text-center text-lg font-semibold text-gray-400 group-hover:text-golden transition-colors duration-300 uppercase tracking-wide">{{ partner.name }}</span>
              </template>
          </div>
        </div>

        <!-- <div class="flex flex-row flex-wrap items-stretch gap-8 max-w-7xl mx-auto justify-center items-center">
          <div 
            v-for="partner in partnerStore.unpinnedPartnerList" 
            :key="partner.id" 
            class="flex basis-xs sm:basis-1/2 md:basis-1/4 lg:basis-1/6 items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-golden transition-all duration-300 hover:scale-105">
            <NuxtImg
                preset="brand"
                fit="contain"
                :src="partner.logo"
                :alt="partner.name"
                class="w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
          </div>
        </div> -->
        
        <!-- CTA -->
        <div class="text-center mt-16">
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              Become Our Partner
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Our <span class="text-gradient">Process</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a structured approach to ensure successful project delivery and client satisfaction
          </p>
        </div>
        
        <!-- Process Steps -->
        <div class="relative max-w-5xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-golden via-golden to-transparent"></div>
          
          <!-- Step 1 -->
          <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-16 animate-fade-in-up">
            <div class="flex-1 md:text-right md:pr-8 mb-6 md:mb-0">
              <h3 class="text-2xl font-montserrat font-bold text-white mb-3">Consultation</h3>
              <p class="text-gray-300">
                We begin with a thorough consultation to understand your specific requirements, challenges, and objectives. 
                Our team of experts works closely with you to identify the most effective solutions for your needs.
              </p>
            </div>
            
            <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center z-20 mx-4">
              <span class="text-charcoal font-bold">1</span>
            </div>
            
            <div class="flex-1 md:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Consultation" 
                class="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="relative z-10 flex flex-col md:flex-row-reverse items-center md:items-start mb-16 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="flex-1 md:text-left md:pl-8 mb-6 md:mb-0">
              <h3 class="text-2xl font-montserrat font-bold text-white mb-3">Design & Planning</h3>
              <p class="text-gray-300">
                Based on the consultation, we develop a detailed design and implementation plan. This includes technical 
                specifications, timelines, resource allocation, and budget considerations to ensure a smooth execution.
              </p>
            </div>
            
            <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center z-20 mx-4">
              <span class="text-charcoal font-bold">2</span>
            </div>
            
            <div class="flex-1 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Design & Planning" 
                class="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="flex-1 md:text-right md:pr-8 mb-6 md:mb-0">
              <h3 class="text-2xl font-montserrat font-bold text-white mb-3">Implementation</h3>
              <p class="text-gray-300">
                Our skilled team executes the plan with precision and attention to detail. Whether it's installing equipment, 
                implementing automation systems, or providing components, we ensure high-quality workmanship and minimal disruption.
              </p>
            </div>
            
            <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center z-20 mx-4">
              <span class="text-charcoal font-bold">3</span>
            </div>
            
            <div class="flex-1 md:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Implementation" 
                class="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <!-- Step 4 -->
          <div class="relative z-10 flex flex-col md:flex-row-reverse items-center md:items-start mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="flex-1 md:text-left md:pl-8 mb-6 md:mb-0">
              <h3 class="text-2xl font-montserrat font-bold text-white mb-3">Testing & Validation</h3>
              <p class="text-gray-300">
                We conduct thorough testing and validation to ensure that all systems and components meet the specified 
                requirements and performance standards. This includes functional testing, quality checks, and safety verification.
              </p>
            </div>
            
            <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center z-20 mx-4">
              <span class="text-charcoal font-bold">4</span>
            </div>
            
            <div class="flex-1 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Testing & Validation" 
                class="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <!-- Step 5 -->
          <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start animate-fade-in-up" style="animation-delay: 0.5s">
            <div class="flex-1 md:text-right md:pr-8 mb-6 md:mb-0">
              <h3 class="text-2xl font-montserrat font-bold text-white mb-3">Ongoing Support</h3>
              <p class="text-gray-300">
                Our commitment doesn't end with implementation. We provide comprehensive ongoing support, including maintenance, 
                troubleshooting, training, and continuous improvement to ensure long-term success and optimal performance.
              </p>
            </div>
            
            <div class="w-12 h-12 bg-golden rounded-full flex items-center justify-center z-20 mx-4">
              <span class="text-charcoal font-bold">5</span>
            </div>
            
            <div class="flex-1 md:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Ongoing Support" 
                class="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
          <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Enhance Your <span class="text-gradient">Industrial Operations?</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our services can help you improve efficiency, reduce costs, and achieve your business goals
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">
                <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
                Request a Quote
              </NuxtLink>
              <NuxtLink to="/portofolio" class="btn-default">
                <Icon name="mdi:view-list" class="w-5 h-5 mr-2" />
                View Our Portofolio
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
const serviceStore = useServiceStore();
const partnerStore = usePartnerStore();
await callOnce('service-data', () => serviceStore.loadData());
await callOnce('partner-data', () => partnerStore.loadData());

const services = computed(() => serviceStore.pinnedServiceList);
const vacuumPumpService = computed(() => serviceStore.unpinnedServiceList.find(service => service.slug === 'vacuum-pump-specialists'));
const brandDistributionService = computed(() => serviceStore.unpinnedServiceList.find(service => service.slug === 'brand-distribution'));

// SEO Meta
useHead({
  title: 'Our Services - PT Nafitek Global Indonesia | Industrial Solutions',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive industrial services including component supply, special purpose machines, maintenance & repair, automation services, and brand distribution. Expert solutions for your industrial needs.'
    },
    {
      name: 'keywords',
      content: 'industrial services, component supply, special purpose machines, maintenance repair, automation services, vacuum pumps, PLC programming, Atlas Copco, Trusco distributor'
    },
    {
      property: 'og:title',
      content: 'Industrial Services - PT Nafitek Global Indonesia'
    },
    {
      property: 'og:description',
      content: 'Complete industrial solutions including machinery procurement, maintenance, automation, and brand distribution services.'
    },
    {
      property: 'og:image',
      content: '/logo.png'
    }
  ]
})

// Structured Data will be added later when SEO module is configured
</script>