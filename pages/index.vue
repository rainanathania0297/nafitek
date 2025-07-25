<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- Industries Served Section -->
    <SectionIndustryFields id="industries-served" class="bg-charcoal">
      <template #prefix>
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"
        ></div>
        <div
          class="absolute top-20 right-10 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"
        ></div>
      </template>
    </SectionIndustryFields>

    <!-- About Us Section -->
    <!-- <HomeAboutSection /> -->

    <!-- Our Strengths Section -->
    <SectionStrength id="home-strength" class="bg-gradient-industrial">
      <template #prefix>
        <!-- Background Elements -->
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-10"
        ></div>
        <div
          class="absolute top-10 left-10 w-20 h-20 border border-golden/20 rotate-45 animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-24 h-24 bg-golden/10 rotate-12 animate-float"
        ></div>
      </template>
    </SectionStrength>

    <!-- Process Timeline Section -->
    <SectionProcessTimeline id="process-timeline" class="bg-charcoal">
      <template #prefix>
        <!-- Background Elements -->
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"
        ></div>
        <div
          class="absolute top-20 right-20 w-24 h-24 border border-golden/20 rotate-45 animate-pulse-slow"
        ></div>
      </template>
    </SectionProcessTimeline>

    <!-- Our Clients Section -->
    <!-- <HomeClientsSection /> -->
    <SectionOurClient id="our-client" class="bg-gradient-industrial">
      <template #prefix>
        <!-- Background Elements -->
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"
        ></div>
        <div
          class="absolute top-10 left-10 w-16 h-16 border border-golden/20 rotate-45 animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-20 h-20 bg-golden/10 rotate-12 animate-float"
        ></div>
      </template>
    </SectionOurClient>

    <!-- Services Section -->
    <SectionOurServices id="our-services" class="bg-charcoal">
      <template #prefix>
        <!-- Background Elements -->
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"
        ></div>
        <div
          class="absolute top-20 right-10 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"
        ></div>
      </template>
    </SectionOurServices>

    <!-- Partner Brands Section -->
    <SectionAuthorizedDistributor
      id="our-services"
      class="bg-gradient-industrial"
    >
      <template #prefix>
        <!-- Background Elements -->
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"
        ></div>
        <div
          class="absolute top-10 left-10 w-16 h-16 border border-golden/20 rotate-45 animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-20 h-20 bg-golden/10 rotate-12 animate-float"
        ></div>
      </template>
    </SectionAuthorizedDistributor>

    <!-- Testimonials & Metrics Section -->
    <!-- <HomeTestimonialsSection /> -->

    <!-- Portofolio Gallery Section -->
    <!-- <HomePortofolioSection /> -->

    <!-- CTA Section -->
    <HomeCTASection />
  </div>
</template>

<script setup>
// stores
const companyStore = useCompanyStore();
const clientStore = useClientStore();
await callOnce("company-data", () => companyStore.loadData());
await callOnce("client-data", () => clientStore.loadData());

// SEO Meta
useHead({
  title:
    "PT Nafitek Global Indonesia - Industrial Services & Machinery Solutions",
  meta: [
    {
      name: "description",
      content:
        "Leading provider of machinery procurement, maintenance, repair services, and automation solutions in Indonesia. Trusted partner since 2018 with 500+ machines serviced.",
    },
    {
      name: "keywords",
      content:
        "machinery procurement, industrial maintenance, vacuum pumps, automation services, special purpose machines, Indonesia industrial services",
    },
    {
      property: "og:title",
      content:
        "PT Nafitek Global Indonesia - Industrial Services & Machinery Solutions",
    },
    {
      property: "og:description",
      content:
        "Leading provider of machinery procurement, maintenance, repair services, and automation solutions in Indonesia.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
  ],
});

// Structured Data will be added later when SEO module is configured
</script>
