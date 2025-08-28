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
            Our <span class="text-gradient">Products</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            High-quality components and parts for various industrial
            applications
          </p>
        </div>
      </div>
    </section>

    <!-- Authorized Distributor Section -->
    <SectionAuthorizedDistributor
      id="authorized-distributor"
      class="bg-charcoal"
    >
      <template #prefix>
        <!-- Background Elements -->
        <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5" />
      </template>
    </SectionAuthorizedDistributor>

    <!-- Components & Parts Supply Section -->
    <section
      id="components-parts-supply"
      class="py-20 lg:pt-32 lg:pb-6 bg-gradient-industrial relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-grid opacity-5"></div>
      <div
        class="absolute top-20 right-10 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"
      ></div>

      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Components & <span class="text-gradient">Parts Supply</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Provide original quality spare parts and components for various
            industry, ensuring optimal performance and longevity of equipment.
          </p>
        </div>

        <!-- Product Icons -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-16"
        >
          <a
            v-for="(product, index) in productStore.productList"
            :key="product.name"
            :href="'#' + product.slug"
            class="group text-center animate-fade-in-up mb-6"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-golden/30 hover:scale-105 transition-all duration-300"
            >
              <Icon :name="product.icon" class="w-8 h-8 text-golden" />
            </div>
            <h3 class="text-white font-medium">{{ product.name }}</h3>
          </a>
        </div>
      </div>
    </section>

    <!-- Individual Product Category Sections -->
    <section
      v-for="(product, index) in productStore.productList"
      :key="product.id"
      :id="product.slug"
      class="py-20 lg:py-28 bg-charcoal relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      <!-- <div
        class="absolute top-10 left-10 w-16 h-16 border border-golden/20 rotate-45 animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-20 h-20 bg-golden/10 rotate-12 animate-float"
      ></div> -->

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
              {{ product.nameParts.name }}
              <span class="text-gradient">{{ product.nameParts.rest }}</span>
            </h2>
            <div class="w-24 h-1 bg-golden mb-6"></div>

            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
              {{ product.description }}
            </p>

            <div
              v-for="category in product.categories"
              :key="category.id"
              class="mb-8"
            >
              <h4 class="text-xl font-semibold text-golden mb-4">
                {{ category.name }}
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="item in category.items"
                  :key="item"
                  class="flex items-start"
                >
                  <Icon
                    name="heroicons:check-circle"
                    class="w-5 h-5 text-golden mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              Request Quote
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
            <div class="overflow-hidden rounded-xl">
              <NuxtImg
                :src="product.image"
                :alt="product.name"
                class="w-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional sections are now generated dynamically in the loop above -->

    <!-- CTA Section -->
    <!-- <section class="py-20 bg-gradient-industrial relative overflow-hidden">
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
              Need <span class="text-gradient">Specific Components</span> for
              Your Project?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Contact our team to discuss your requirements and get a customized
              quote for high-quality industrial components and parts.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">
                <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
                Request a Quote
              </NuxtLink>
              <NuxtLink to="/services" class="btn-default">
                <Icon name="mdi:view-list" class="w-5 h-5 mr-2" />
                View Our Services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import heroBackground from "~/assets/images/page-products.png";
import { useProductStore } from "~/stores/product";
import { usePartnerStore } from "~/stores/partner";

// stores
const productStore = useProductStore();
const partnerStore = usePartnerStore();
await callOnce("product-data", () => productStore.loadData());
await callOnce("partner-data", () => partnerStore.loadData());

// No additional variables needed as all data comes from the product store

// SEO Meta
useHead({
  title: "Our Products - PT Nafitek Global Indonesia | Industrial Components",
  meta: [
    {
      name: "description",
      content:
        "High-quality industrial components and parts including vacuum solutions, tools, electronics, mechanical parts, and automation solutions for various industries.",
    },
    {
      name: "keywords",
      content:
        "industrial components, vacuum parts, tools supply, electronics parts, mechanical parts, automation solutions, industrial equipment",
    },
    {
      property: "og:title",
      content:
        "Our Products - PT Nafitek Global Indonesia | Industrial Components",
    },
    {
      property: "og:description",
      content:
        "High-quality industrial components and parts for various industries, ensuring optimal performance and longevity of equipment.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
  ],
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(12deg);
  }
  50% {
    transform: translateY(-15px) rotate(12deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
