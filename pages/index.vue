<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection />
    
    <!-- About Us Section -->
    <HomeAboutSection />
    
    <!-- Our Strengths Section -->
    <HomeStrengthsSection />
    
    <!-- Services Section -->
    <HomeServicesSection />
    
    <!-- Our Clients Section -->
    <HomeClientsSection />
    
    <!-- Partner Brands Section -->
    <HomePartnersSection />
    
    <!-- Process Timeline Section -->
    <HomeProcessSection />
    
    <!-- Testimonials & Metrics Section -->
    <HomeTestimonialsSection />
    
    <!-- Portofolio Gallery Section -->
    <HomePortofolioSection />
    
    <!-- CTA Section -->
    <HomeCTASection />
  </div>
</template>

<script setup>
// stores
const companyStore = useCompanyStore();
const clientStore = useClientStore();
await callOnce('company-data', () => companyStore.loadData())
await callOnce('client-data', () => clientStore.loadData())

// SEO Meta
useHead({
  title: 'PT Nafitek Global Indonesia - Industrial Services & Machinery Solutions',
  meta: [
    {
      name: 'description',
      content: 'Leading provider of machinery procurement, maintenance, repair services, and automation solutions in Indonesia. Trusted partner since 2018 with 500+ machines serviced.'
    },
    {
      name: 'keywords',
      content: 'machinery procurement, industrial maintenance, vacuum pumps, automation services, special purpose machines, Indonesia industrial services'
    },
    {
      property: 'og:title',
      content: 'PT Nafitek Global Indonesia - Industrial Services & Machinery Solutions'
    },
    {
      property: 'og:description',
      content: 'Leading provider of machinery procurement, maintenance, repair services, and automation solutions in Indonesia.'
    },
    {
      property: 'og:image',
      content: '/logo.png'
    }
  ]
})

// Structured Data will be added later when SEO module is configured
</script>