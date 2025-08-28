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
          class="absolute inset-0 bg-cover bg-top bg-no-repeat"
          :style="{ backgroundImage: `url(${heroBackground})` }"
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
            Our <span class="text-gradient">Services</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
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
          <h2
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Complete <span class="text-gradient">Industrial Solutions</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From machinery procurement to automation services, we provide
            end-to-end solutions for your industrial needs
          </p>
        </div>

        <!-- Service Overview -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
        >
          <a
            v-for="(service, index) in serviceStore.serviceList"
            :key="service.name"
            :href="'#' + service.slug"
            class="group text-center animate-fade-in-up mb-6"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-golden/30 hover:scale-105 transition-all duration-300"
            >
              <Icon :name="service.icon" class="w-8 h-8 text-golden" />
            </div>
            <h3 class="text-white font-medium">{{ service.name }}</h3>
          </a>
        </div>
      </div>
    </section>

    <!-- Service List Section-->
    <section
      v-for="(service, index) in serviceStore.serviceList"
      :key="service.id"
      :id="service.slug"
      class="py-20 lg:py-32 relative overflow-hidden"
      :class="[index % 2 === 0 ? 'bg-gradient-industrial' : 'bg-charcoal']"
    >
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      <div
        class="absolute top-20 right-20 w-24 h-24 border border-golden/20 rotate-45 animate-pulse-slow"
      ></div>

      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- content -->
          <div
            :class="[
              index % 2 === 0
                ? 'animate-fade-in-left order-1 lg:order-1'
                : 'animate-fade-in-right order-1 lg:order-2',
            ]"
          >
            <h2
              class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
            >
              {{ service.nameParts.name }}
              <span class="text-gradient">{{ service.nameParts.rest }}</span>
            </h2>
            <div class="w-24 h-1 bg-golden mb-6"></div>

            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
              {{ service.overview }}
            </p>

            <div class="mb-8">
              <h3 class="text-xl font-montserrat font-bold text-white mb-4">
                {{ service.feature_cta }}
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="brand in service.feature_list"
                  :key="brand"
                  class="flex items-center space-x-3"
                >
                  <Icon
                    name="heroicons:check-circle"
                    class="w-5 h-5 text-golden flex-shrink-0"
                  />
                  <!-- <NuxtImg
                    v-if="brand.image"
                    :preset="brand.image.includes('.svg') ? undefined : 'brand'"
                    :src="brand.image"
                    :alt="brand.name"
                    class="w-auto h-8 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <span v-else class="text-gray-300">{{ brand.name }}</span> -->
                  <span class="text-gray-300">{{ brand.name }}</span>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              {{ service.cta_text }}
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>

          <!-- image -->
          <div
            :class="
              index % 2 === 0
                ? 'animate-fade-in-right order-2 lg:order-2'
                : 'animate-fade-in-left order-2 lg:order-1'
            "
          >
            <NuxtImg
              :src="service.image"
              :alt="service.name"
              class="w-full h-[500px] object-cover rounded-2xl shadow-industrial hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <SectionProcessTimelineImage
      id="service-timeline"
      class="bg-gradient-industrial"
    >
      <template #prefix>
        <div
          class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"
        ></div>
      </template>
    </SectionProcessTimelineImage>

    <!-- CTA Section -->
    <!-- <section class="py-20 bg-charcoal relative overflow-hidden">
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
              Ready to Enhance Your
              <span class="text-gradient">Industrial Operations?</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our services can help you improve
              efficiency, reduce costs, and achieve your business goals
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
    </section> -->
  </div>
</template>

<script setup>
import heroBackground from "~/assets/images/page-services.png";

// stores
const companyStore = useCompanyStore();
const serviceStore = useServiceStore();
const partnerStore = usePartnerStore();
await callOnce("company-data", () => companyStore.loadData());
await callOnce("service-data", () => serviceStore.loadData());
await callOnce("partner-data", () => partnerStore.loadData());

// SEO Meta
useHead({
  title: "Our Services - PT Nafitek Global Indonesia | Industrial Solutions",
  meta: [
    {
      name: "description",
      content:
        "Comprehensive industrial services including component supply, special purpose machines, maintenance & repair, automation services, and brand distribution. Expert solutions for your industrial needs.",
    },
    {
      name: "keywords",
      content:
        "industrial services, component supply, special purpose machines, maintenance repair, automation services, vacuum pumps, PLC programming, Atlas Copco, Trusco distributor",
    },
    {
      property: "og:title",
      content: "Industrial Services - PT Nafitek Global Indonesia",
    },
    {
      property: "og:description",
      content:
        "Complete industrial solutions including machinery procurement, maintenance, automation, and brand distribution services.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
  ],
});

// Structured Data will be added later when SEO module is configured
</script>
