<template>
  <section id="about-section" class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
    <div class="absolute top-20 right-10 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"></div>
    
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            About <span class="text-gradient">PT Nafitek Global</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the way in industrial excellence since 2018
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="space-y-8">
            <!-- Company Description -->
            <div class="animate-fade-in-left">
              <h3 class="text-2xl font-montserrat font-semibold text-white mb-4">
                Our Story
              </h3>
              <p class="text-gray-300 leading-relaxed mb-6">
                PT Nafitek Global Indonesia is a company that provides high-quality machinery 
                procurement, maintenance, and repair services. Since our founding in early 
                January 2018, we have been committed to being a trusted partner and advisor 
                to our clients, helping them enhance their business competitiveness.
              </p>
              <p class="text-gray-300 leading-relaxed">
                With a strong drive and determination, we strive to stay ahead in an 
                increasingly competitive industry. Our team of skilled and experienced 
                professionals is dedicated to delivering outstanding services tailored 
                to our client's specific needs and requirements.
              </p>
            </div>

            <!-- Mission & Vision -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Vision -->
              <div class="card-industrial animate-fade-in-left" style="animation-delay: 0.2s">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-golden rounded-lg flex items-center justify-center mr-4">
                    <Icon name="mdi:eye" class="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 class="text-xl font-montserrat font-semibold text-white">Vision</h4>
                </div>
                <p class="text-gray-300">
                  To prioritize customer satisfaction by providing exceptional value.
                </p>
              </div>

              <!-- Mission -->
              <div class="card-industrial animate-fade-in-left" style="animation-delay: 0.4s">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-golden rounded-lg flex items-center justify-center mr-4">
                    <Icon name="mdi:target" class="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 class="text-xl font-montserrat font-semibold text-white">Mission</h4>
                </div>
                <ul class="text-gray-300 space-y-2">
                  <li class="flex items-start">
                    <Icon name="mdi:check" class="w-5 h-5 text-golden mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deliver high-quality products to customers on time</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="mdi:check" class="w-5 h-5 text-golden mr-2 mt-0.5 flex-shrink-0" />
                    <span>Foster partnerships that benefit all stakeholders</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="mdi:check" class="w-5 h-5 text-golden mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prioritize safety while continuously improving</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Key Achievements -->
            <div class="animate-fade-in-left" style="animation-delay: 0.6s">
              <h4 class="text-xl font-montserrat font-semibold text-white mb-4">
                Key Achievements
              </h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div class="text-2xl font-bold text-golden mb-1">
                    <AnimatedCounter :target="500" suffix="+" />
                  </div>
                  <p class="text-sm text-gray-300">Projects Completed</p>
                </div>
                <div class="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div class="text-2xl font-bold text-golden mb-1">
                    <AnimatedCounter :target="150" suffix="+" />
                  </div>
                  <p class="text-sm text-gray-300">Happy Clients</p>
                </div>
                <div class="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div class="text-2xl font-bold text-golden mb-1">
                    <AnimatedCounter :target="6" suffix="+" />
                  </div>
                  <p class="text-sm text-gray-300">Years Experience</p>
                </div>
                <div class="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div class="text-2xl font-bold text-golden mb-1">
                    <AnimatedCounter :target="24" suffix="/7" />
                  </div>
                  <p class="text-sm text-gray-300">Support</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative animate-fade-in-right">
            <!-- Main Image -->
            <div class="relative z-10">
              <NuxtImg
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Industrial machinery and equipment"
                class="rounded-2xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent rounded-2xl"></div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-8 -left-8 w-24 h-24 bg-golden/20 rounded-full animate-float"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-golden/30 rounded-full animate-float" style="animation-delay: 1s"></div>
            
            <!-- Experience Badge -->
            <div class="absolute bottom-8 left-8 bg-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-golden/30">
              <div class="text-center">
                <div class="text-3xl font-bold text-golden mb-1">6+</div>
                <p class="text-white text-sm">Years of Excellence</p>
              </div>
            </div>

            <!-- Gear Animation -->
            <div class="absolute top-8 right-8 w-16 h-16 opacity-30 animate-rotate-gear">
              <Icon name="mdi:cog" class="w-full h-full text-golden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>