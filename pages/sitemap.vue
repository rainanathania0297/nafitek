<template>
  <div class="py-20 lg:py-32 bg-charcoal">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            {{ pageHeader.title }}
            <span class="text-gradient">{{ pageHeader.highlight }}</span>
          </h1>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300">
            {{ pageHeader.description }}
          </p>
        </div>

        <!-- Sitemap Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Loading State -->
          <div
            v-if="serviceStore.isLoading || productStore.isLoading"
            class="col-span-full flex justify-center items-center py-16"
          >
            <div class="flex items-center space-x-3 text-golden">
              <Icon name="heroicons:arrow-path" class="w-6 h-6 animate-spin" />
              <span class="text-lg font-medium">Loading sitemap...</span>
            </div>
          </div>

          <!-- Dynamic Sections -->
          <div
            v-else
            v-for="section in sitemapSections"
            :key="section.id"
            class="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
          >
            <h2
              class="text-2xl font-montserrat font-bold text-white mb-6 flex items-center"
            >
              <Icon :name="section.icon" class="w-6 h-6 text-golden mr-3" />
              {{ section.title }}
              <span
                v-if="section.id === 'services' || section.id === 'products'"
                class="ml-2 px-2 py-1 text-xs bg-golden/20 text-golden rounded-full"
              >
                {{ section.links.length - 1 }} items
              </span>
            </h2>
            <ul class="space-y-4">
              <li v-for="link in section.links" :key="link.url">
                <template v-if="link.external">
                  <NuxtLink
                    :to="link.url"
                    class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                  >
                    <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                    {{ link.title }}
                  </NuxtLink>
                </template>
                <template v-else> 
                  <a 
                    :href="link.url" 
                    class="flex items-center text-gray-300 hover:text-golden transition-colors duration-300"
                  >
                    <Icon name="heroicons:chevron-right" class="w-4 h-4 mr-2" />
                    {{ link.title }}
                  </a>
                </template>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-16 text-center">
          <div
            class="bg-gradient-industrial rounded-2xl p-8 border border-gray-700"
          >
            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              {{ contactCTA.title }}
            </h3>
            <p class="text-gray-300 mb-6">
              {{ contactCTA.description }}
            </p>
            <NuxtLink
              :to="contactCTA.buttonLink"
              class="inline-flex items-center px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105"
            >
              {{ contactCTA.buttonText }}
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// stores
const companyStore = useCompanyStore();
const serviceStore = useServiceStore();
const productStore = useProductStore();
await callOnce("company-data", () => companyStore.loadData());
await callOnce("service-data", () => serviceStore.loadData());
await callOnce("product-data", () => productStore.loadData());

// Page Configuration
const pageHeader = {
  title: "Site",
  highlight: "Map",
  description: "Navigate through all pages and sections of our website",
};

// Generate dynamic service links from store
const serviceLinks = computed(() => {
  const baseServiceLinks = [
    { title: "All Services", url: "/services", external: false },
  ];

  const dynamicServiceLinks = serviceStore.serviceList.map((service) => ({
    title: service.name,
    url: `/services?#${service.slug}`,
    external: false,
  }));

  return [...baseServiceLinks, ...dynamicServiceLinks];
});

// Generate dynamic product links from store
const productLinks = computed(() => {
  const baseProductLinks = [
    { title: "All Products", url: "/products", external: false },
  ];

  const dynamicProductLinks = productStore.productList.map((product) => ({
    title: product.name,
    url: `/products?#${product.slug}`,
    external: false,
  }));

  return [...baseProductLinks, ...dynamicProductLinks];
});

// Sitemap Sections Data
const sitemapSections = computed(() => [
  {
    id: "main-pages",
    title: "Main Pages",
    icon: "heroicons:home",
    links: [
      { title: "Home", url: "/", external: false },
      { title: "About Us", url: "/about", external: false },
      { title: "Our Services", url: "/services", external: false },
      { title: "Our Products", url: "/products", external: false },
      // { title: "Portofolio", url: "/portofolio", external: false },
      // { title: "Industry Insights Blog", url: "/blog", external: false },
      { title: "Contact Us", url: "/contact", external: false },
    ],
  },
  {
    id: "services",
    title: "Our Services",
    icon: "heroicons:cog-6-tooth",
    links: serviceLinks.value,
  },
  {
    id: "products",
    title: "Our Products",
    icon: "heroicons:cube",
    links: productLinks.value,
  },
  {
    id: "company-info",
    title: "Company Information",
    icon: "heroicons:building-office",
    links: [
      {
        title: "Vision & Mission",
        url: "/about#vision-mission",
        external: false,
      },
      // { title: "Our Team", url: "/about#team", external: false },
      { title: "Company Values", url: "/about#values", external: false },
      // {
      //   title: "Industries We Serve",
      //   url: "/portofolio#industries",
      //   external: false,
      // },
    ],
  },
  {
    id: "legal-support",
    title: "Legal & Support",
    icon: "heroicons:document-text",
    links: [
      { title: "Privacy Policy", url: "/privacy", external: false },
      { title: "Terms of Service", url: "/terms", external: false },
      {
        title: "Emergency Support",
        url: `tel:${companyStore.companyData.phone}`,
        external: true,
      },
      {
        title: "Email Support",
        url: `mailto:${companyStore.companyData.email}`,
        external: true,
      },
    ],
  },
]);

// Contact CTA Configuration
const contactCTA = {
  title: "Need Help Finding Something?",
  description:
    "Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution.",
  buttonText: "Contact Our Team",
  buttonLink: "/contact",
};

// SEO Configuration
const seoConfig = computed(() => {
  const serviceCount = serviceStore.serviceList.length;
  const productCount = productStore.productList.length;

  return {
    title: "Sitemap - PT Nafitek Global Indonesia | Website Navigation",
    description: `Complete sitemap of PT Nafitek Global Indonesia website. Navigate through all pages including ${serviceCount} services, ${productCount} products, portofolio, blog, and company information.`,
    keywords:
      "sitemap, website navigation, PT Nafitek Global, industrial services, vacuum pumps, automation, products, company pages, site structure",
    ogTitle: "Sitemap - PT Nafitek Global Indonesia",
    ogDescription: `Complete navigation guide to all pages and sections of PT Nafitek Global Indonesia website with ${serviceCount} services and ${productCount} products.`,
  };
});

// SEO Meta
useHead(() => ({
  title: seoConfig.value.title,
  meta: [
    {
      name: "description",
      content: seoConfig.value.description,
    },
    {
      name: "keywords",
      content: seoConfig.value.keywords,
    },
    {
      property: "og:title",
      content: seoConfig.value.ogTitle,
    },
    {
      property: "og:description",
      content: seoConfig.value.ogDescription,
    },
  ],
}));
</script>
