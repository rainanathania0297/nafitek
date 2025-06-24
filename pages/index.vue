<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Us Section -->
    <AboutSection />
    
    <!-- Our Strengths Section -->
    <StrengthsSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Partner Brands Section -->
    <PartnersSection />
    
    <!-- Process Timeline Section -->
    <ProcessSection />
    
    <!-- Testimonials & Metrics Section -->
    <TestimonialsSection />
    
    <!-- Portfolio Gallery Section -->
    <PortfolioSection />
    
    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
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