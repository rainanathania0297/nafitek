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
          style="
            background-image: url(&quot;https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&quot;);
          "
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
            About
            <span class="text-gradient">{{ companyStore.companyName }}</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <!-- Leading the way in industrial excellence since {{ companyStore.companyStats.year_established }} -->
            Reliable, Technical, Committed in industrial excellence since
            {{ companyStore.companyStats.year_established }}
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>

      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="animate-fade-in-left">
            <div class="mb-8">
              <h2
                class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
              >
                Our <span class="text-gradient">Story</span>
              </h2>
              <div class="w-24 h-1 bg-golden mb-6"></div>
            </div>

            <div class="space-y-6 text-gray-300 text-lg leading-relaxed">
              <template
                v-for="(item, index) in companyStore.companyData?.about"
                :key="index"
              >
                <p>{{ item }}</p>
              </template>
            </div>

            <!-- Key Stats -->
            <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div class="text-center">
                <div class="text-3xl font-bold text-golden mb-2">
                  <AnimatedCounter :target="companyStore.companyStats?.machine_total" suffix="+" />
                </div>
                <p class="text-gray-400 text-sm">Machines Serviced</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-golden mb-2">
                  <AnimatedCounter :target="companyStore.companyStats?.client_total" suffix="+" />
                </div>
                <p class="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-golden mb-2">
                  <AnimatedCounter :target="companyStore.companyStats?.year_experience" suffix="+" />
                </div>
                <p class="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-golden mb-2">
                  <AnimatedCounter :target="companyStore.companyStats?.client_statisfaction" suffix="%" />
                </div>
                <p class="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div> -->
          </div>

          <!-- Image -->
          <div class="animate-fade-in-right">
            <div class="relative">
              <NuxtImg
                src="office.png"
                alt="PT Nafitek Global Indonesia Office"
                class="w-full h-[500px] object-cover rounded-2xl shadow-industrial"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent rounded-2xl"
              ></div>

              <!-- Floating Badge -->
              <div
                class="absolute bottom-8 left-8 bg-golden text-charcoal px-6 py-4 rounded-xl font-bold"
              >
                <div class="text-2xl font-montserrat">
                  {{ companyStore.companyStats?.year_experience }}+
                </div>
                <div class="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section
      class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden"
    >
      <div
        class="absolute top-20 right-20 w-24 h-24 border border-golden/20 rotate-45 animate-pulse-slow"
      ></div>

      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Vision & <span class="text-gradient">Mission</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our guiding principles that drive us towards excellence
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Vision -->
          <div class="card-industrial animate-fade-in-up">
            <div class="text-center mb-8">
              <div
                class="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="heroicons:eye" class="w-8 h-8 text-golden" />
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
                Our Vision
              </h3>
            </div>
            <template
              v-for="(item, index) in companyStore.companyData?.vision"
              :key="index"
            >
              <p
                :class="[
                  'text-lg text-gray-300 text-center leading-relaxed',
                  index == companyStore.companyData?.vision.length - 1
                    ? 'mb-0'
                    : 'mb-6',
                ]"
              >
                {{ item }}
              </p>
            </template>
          </div>

          <!-- Mission -->
          <div
            class="card-industrial animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div class="text-center mb-8">
              <div
                class="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Icon
                  name="heroicons:rocket-launch"
                  class="w-8 h-8 text-golden"
                />
              </div>
              <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
                Our Mission
              </h3>
            </div>
            <ul class="space-y-4 text-gray-300">
              <template
                v-for="(item, index) in companyStore.companyData?.mission"
                :key="index"
              >
                <li class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 text-golden mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span>{{ item }}</span>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <!--
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Our <span class="text-gradient">Team</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering exceptional results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="card-industrial text-center animate-fade-in-up">
            <div class="w-24 h-24 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:user" class="w-12 h-12 text-golden" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-2">Technical Team</h3>
            <p class="text-golden mb-4">Certified Engineers</p>
            <p class="text-gray-300 text-sm">
              Our certified engineers bring years of experience in machinery maintenance, 
              automation, and industrial solutions.
            </p>
          </div>

          <div class="card-industrial text-center animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="w-24 h-24 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:cog-6-tooth" class="w-12 h-12 text-golden" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-2">Operations Team</h3>
            <p class="text-golden mb-4">Project Managers</p>
            <p class="text-gray-300 text-sm">
              Skilled project managers ensure seamless execution and timely delivery 
              of all industrial projects.
            </p>
          </div>

          <div class="card-industrial text-center animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-24 h-24 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:phone" class="w-12 h-12 text-golden" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-2">Support Team</h3>
            <p class="text-golden mb-4">Customer Service</p>
            <p class="text-gray-300 text-sm">
              Dedicated support team providing 24/7 assistance and maintaining 
              strong client relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
    -->

    <!-- Values Section -->
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
          >
            Our <span class="text-gradient">Values</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide our business and relationships
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <!-- Excellence -->
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6"
            >
              <Icon name="heroicons:star" class="w-8 h-8 text-golden" />
            </div>

            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Excellence
            </h3>
            <p class="text-gray-300">
              We strive for excellence in everything we do, from the quality of
              our products to the services we provide.
            </p>
          </div>

          <!-- Integrity -->
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6"
            >
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-golden" />
            </div>

            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Integrity
            </h3>
            <p class="text-gray-300">
              We conduct our business with honesty, transparency, and ethical
              practices, building trust with our clients and partners.
            </p>
          </div>

          <!-- Innovation -->
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6"
            >
              <Icon name="heroicons:light-bulb" class="w-8 h-8 text-golden" />
            </div>

            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Innovation
            </h3>
            <p class="text-gray-300">
              We continuously seek innovative solutions to address our clients'
              challenges and improve our service offerings.
            </p>
          </div>

          <!-- Collaboration -->
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6"
            >
              <Icon name="heroicons:user-group" class="w-8 h-8 text-golden" />
            </div>

            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Collaboration
            </h3>
            <p class="text-gray-300">
              We believe in working closely with our clients and partners to
              achieve shared goals and mutual success.
            </p>
          </div>

          <!-- Responsibility -->
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6"
            >
              <Icon name="heroicons:hand-raised" class="w-8 h-8 text-golden" />
            </div>

            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Responsibility
            </h3>
            <p class="text-gray-300">
              We take responsibility for our actions and are committed to
              safety, environmental stewardship, and social responsibility.
            </p>
          </div>

          <!-- Customer Focus -->
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 animate-fade-in-up"
            style="animation-delay: 0.5s"
          >
            <div
              class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6"
            >
              <Icon name="heroicons:heart" class="w-8 h-8 text-golden" />
            </div>

            <h3 class="text-2xl font-montserrat font-bold text-white mb-4">
              Customer Focus
            </h3>
            <p class="text-gray-300">
              We place our customers at the center of everything we do, striving
              to exceed their expectations and build lasting relationships.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- <section class="py-20 bg-gradient-industrial relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      <div
        class="absolute top-20 right-10 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"
      ></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
          <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Work with <span class="text-gradient">PT Nafitek Global?</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our industrial solutions can help your business thrive
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">
                <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
                Contact Us
              </NuxtLink>
              <NuxtLink to="/services" class="btn-default">
                <Icon name="mdi:view-list" class="w-5 h-5 mr-2" />
                Explore Our Services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// stores
const companyStore = useCompanyStore();
await callOnce("company-data", () => companyStore.loadData());

// SEO Meta
useHead({
  title:
    "About Us - PT Nafitek Global Indonesia | Industrial Services Excellence",
  meta: [
    {
      name: "description",
      content:
        "Learn about PT Nafitek Global Indonesia - your trusted partner for industrial services since 2018. Discover our story, vision, mission, and the experienced team behind our success.",
    },
    {
      name: "keywords",
      content:
        "about PT Nafitek Global, industrial services company, machinery maintenance Indonesia, company history, vision mission, industrial team",
    },
    {
      property: "og:title",
      content:
        "About PT Nafitek Global Indonesia - Industrial Services Excellence",
    },
    {
      property: "og:description",
      content:
        "Discover the story behind PT Nafitek Global Indonesia, a leading provider of industrial services and machinery solutions since 2018.",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
  ],
});

// Structured Data will be added later when SEO module is configured
</script>

<style scoped></style>
