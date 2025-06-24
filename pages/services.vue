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
          <!-- Component Supply -->
          <div id="component-supply" class="card-service animate-fade-in-up">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center">
                  <Icon name="heroicons:cog-6-tooth" class="w-8 h-8 text-golden" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-montserrat font-bold text-white mb-4">Component Supply</h3>
                <p class="text-gray-300 mb-6 leading-relaxed">
                  We offer a diverse range of high-quality components to meet the operational needs of our customers' machinery. 
                  We ensure that spare parts are readily available and comply with industry standards. Additionally, we provide 
                  customizable products tailored to specific requirements, maintaining quality and reliability at all times.
                </p>
                
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-golden mb-3">Our Component Services Include:</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Supply mechanical and electrical spare parts like bells, pneumatics, breakers, sensors, switches, and more</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Supply of vacuum accessory components</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Quality assurance testing for all components</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Fast delivery service nationwide</span>
                    </li>
                  </ul>
                </div>

                <NuxtLink 
                  to="/contact" 
                  class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
                >
                  Get Quote
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Special Purpose Machines -->
          <div id="special-purpose-machines" class="card-service animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center">
                  <Icon name="heroicons:wrench-screwdriver" class="w-8 h-8 text-golden" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-montserrat font-bold text-white mb-4">Special Purpose Machines</h3>
                <p class="text-gray-300 mb-6 leading-relaxed">
                  We provide specialized machines to enhance efficiency and precision in various manufacturing applications. 
                  Our team customizes each machine to meet our clients' specific requirements, thereby improving operational 
                  performance. Every machine we produce is built to the highest technical standards and is designed to operate 
                  effectively in any environment.
                </p>
                
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-golden mb-3">Key Features:</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Custom machine design and engineering</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Precision manufacturing and assembly</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Performance optimization and testing</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Complete technical documentation</span>
                    </li>
                  </ul>
                </div>

                <NuxtLink 
                  to="/contact" 
                  class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Maintenance & Repair -->
          <div id="maintenance-repair" class="card-service animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center">
                  <Icon name="heroicons:wrench" class="w-8 h-8 text-golden" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-montserrat font-bold text-white mb-4">Maintenance & Repair Services</h3>
                <p class="text-gray-300 mb-6 leading-relaxed">
                  We offer comprehensive maintenance and repair services for machines to keep your equipment operating at peak 
                  performance. Our skilled team is prepared to address a diverse range of issues, ranging from routine and 
                  scheduled maintenance to emergency repairs. We are committed to ensuring that your machines function optimally 
                  and to preventing any disruptions in productivity caused by equipment failures.
                </p>
                
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-golden mb-3">Our Services Include:</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Vacuum pump specialization (including rotary pumps, booster pumps, and diffusion pumps)</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Helium leak testing services</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Electric motor rewinding and repair</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Repair of electronic components</span>
                    </li>
                  </ul>
                </div>

                <NuxtLink 
                  to="/contact" 
                  class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
                >
                  Schedule Service
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Automation Services -->
          <div id="automation" class="card-service animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center">
                  <Icon name="heroicons:cpu-chip" class="w-8 h-8 text-golden" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-montserrat font-bold text-white mb-4">Automation Services</h3>
                <p class="text-gray-300 mb-6 leading-relaxed">
                  We provide automation services aimed at improving the efficiency of industrial machinery. Our objective is to 
                  optimize machine performance through advanced technology, reducing the risk of downtime. By implementing 
                  integrated systems, we ensure that every process operates smoothly and efficiently, supporting continuous production.
                </p>
                
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-golden mb-3">Our Automation Services Include:</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Installation and modification of PLC programs</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Electrical wiring for control panels</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Andon systems implementation</span>
                    </li>
                    <li class="flex items-start">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span>Process optimization and monitoring</span>
                    </li>
                  </ul>
                </div>

                <NuxtLink 
                  to="/contact" 
                  class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
                >
                  Explore Automation
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
            
            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
              We offer a wide range of high-quality vacuum pumps, including rotary pumps, booster pumps, diffusion pumps, 
              and others. As experts in vacuum pump solutions, we play a crucial role in ensuring that each product performs 
              at its best and is built to last, effectively solving any vacuum-related issues.
            </p>

            <div class="mb-8">
              <h3 class="text-xl font-montserrat font-bold text-white mb-4">Vacuum Pump Brands We Service:</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">Pfeiffer</span>
                </div>
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">Leybold</span>
                </div>
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">Inficon</span>
                </div>
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">Ulvac</span>
                </div>
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">Shinko Seiki</span>
                </div>
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-golden flex-shrink-0" />
                  <span class="text-gray-300">Edwards</span>
                </div>
              </div>
            </div>

            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              Get Vacuum Pump Service
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
            We offer a diverse range of products to meet the machinery needs of various industrial sectors
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- Atlas Copco -->
          <div class="card-industrial text-center animate-fade-in-up">
            <div class="w-20 h-20 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span class="text-golden font-bold text-lg">AC</span>
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">Atlas Copco</h3>
            <p class="text-gray-300 mb-6">
              Renowned vacuum pumps for enhancing project performance and efficiency in industrial applications.
            </p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>• Vacuum Pumps</li>
              <li>• Compressors</li>
              <li>• Industrial Tools</li>
            </ul>
          </div>

          <!-- Trusco -->
          <div class="card-industrial text-center animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="w-20 h-20 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span class="text-golden font-bold text-lg">TR</span>
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">Trusco</h3>
            <p class="text-gray-300 mb-6">
              Extensive array of products including spare parts and chemicals, perfectly suited for professional equipment.
            </p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>• Industrial Supplies</li>
              <li>• Safety Equipment</li>
              <li>• Chemicals & Tools</li>
            </ul>
          </div>

          <!-- Other Brands -->
          <div class="card-industrial text-center animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-20 h-20 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:building-storefront" class="w-10 h-10 text-golden" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">Trusted Brands</h3>
            <p class="text-gray-300 mb-6">
              Variety of machinery solutions from other trusted brands, all known for their reliability in solving industry challenges.
            </p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>• Ulvac Solutions</li>
              <li>• Pfeiffer Products</li>
              <li>• Leybold Equipment</li>
            </ul>
          </div>
        </div>

        <div class="text-center">
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
    <ProcessSection />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
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