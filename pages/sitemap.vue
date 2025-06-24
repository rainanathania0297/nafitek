<template>
  <div class="py-20 lg:py-32 bg-charcoal">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Site <span class="text-gradient">Map</span>
          </h1>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300">
            Navigate through all pages and sections of our website
          </p>
        </div>

        <!-- Sitemap Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Main Pages -->
          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 class="text-2xl font-montserrat font-bold text-white mb-6 flex items-center">
              <Icon name="heroicons:home" class="w-6 h-6 text-golden mr-3" />
              Main Pages
            </h2>
            <ul class="space-y-4">
              <li>
                <NuxtLink 
                  to="/" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/about" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/services" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Our Services
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/portfolio" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Portfolio
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/blog" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Industry Insights Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/contact" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Contact Us
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 class="text-2xl font-montserrat font-bold text-white mb-6 flex items-center">
              <Icon name="heroicons:cog-6-tooth" class="w-6 h-6 text-golden mr-3" />
              Our Services
            </h2>
            <ul class="space-y-4">
              <li>
                <NuxtLink 
                  to="/services#component-supply" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Component Supply
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/services#special-purpose-machines" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Special Purpose Machines
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/services#maintenance-repair" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Maintenance & Repair
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/services#automation" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Automation Services
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/services#brand-distribution" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Brand Distribution
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Company Information -->
          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 class="text-2xl font-montserrat font-bold text-white mb-6 flex items-center">
              <Icon name="heroicons:building-office" class="w-6 h-6 text-golden mr-3" />
              Company Information
            </h2>
            <ul class="space-y-4">
              <li>
                <NuxtLink 
                  to="/about#vision-mission" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Vision & Mission
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/about#team" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Our Team
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/about#values" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Company Values
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/portfolio#industries" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Industries We Serve
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Legal & Support -->
          <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 class="text-2xl font-montserrat font-bold text-white mb-6 flex items-center">
              <Icon name="heroicons:document-text" class="w-6 h-6 text-golden mr-3" />
              Legal & Support
            </h2>
            <ul class="space-y-4">
              <li>
                <NuxtLink 
                  to="/privacy" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/terms" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Terms of Service
                </NuxtLink>
              </li>
              <li>
                <a 
                  href="tel:+622122157327" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Emergency Support
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sales@nafitekglobal-ind.com" 
                  class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                >
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-industrial rounded-2xl p-8 border border-gray-700">
            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Need Help Finding Something?
            </h3>
            <p class="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution.
            </p>
            <NuxtLink 
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Sitemap - PT Nafitek Global Indonesia | Website Navigation',
  meta: [
    {
      name: 'description',
      content: 'Complete sitemap of PT Nafitek Global Indonesia website. Navigate through all pages including services, portfolio, blog, and company information.'
    },
    {
      name: 'keywords',
      content: 'sitemap, website navigation, PT Nafitek Global, industrial services, company pages, site structure'
    },
    {
      property: 'og:title',
      content: 'Sitemap - PT Nafitek Global Indonesia'
    },
    {
      property: 'og:description',
      content: 'Complete navigation guide to all pages and sections of PT Nafitek Global Indonesia website.'
    }
  ]
})
</script>