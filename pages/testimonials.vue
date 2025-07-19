<template>
  <div class="py-20 bg-charcoal">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          Client <span class="text-gradient">Testimonials</span>
        </h1>
        <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Hear what our clients have to say about our services and solutions
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonialStore.testimonialList" 
          :key="testimonial.id"
          class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-500 hover:border-golden hover:bg-white/20 hover:scale-105 animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Testimonial Quote -->
          <div class="mb-6 text-golden text-5xl opacity-30">
            <Icon name="mdi:format-quote-open" />
          </div>
          
          <!-- Testimonial Content -->
          <p class="text-gray-300 mb-8 italic">
            "{{ testimonial.quote }}"
          </p>
          
          <!-- Author Info -->
          <div class="flex items-center">
            <div class="mr-4">
              <NuxtImg
                v-if="testimonial.avatar"
                preset="thumbnail"
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover border-2 border-golden"
                loading="lazy"
              />
              <div v-else class="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center text-golden font-bold">
                {{ testimonial.name.charAt(0) }}
              </div>
            </div>
            <div>
              <h3 class="text-white font-semibold">{{ testimonial.name }}</h3>
              <p class="text-gray-400 text-sm">{{ testimonial.position }}, {{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center">
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
          <h2 class="text-2xl font-montserrat font-bold text-white mb-4">
            Ready to Experience Our Services?
          </h2>
          <p class="text-gray-300 mb-6">
            Contact us today to discuss how we can help your business with our industrial solutions.
          </p>
          <NuxtLink to="/contact" class="btn-primary">
            <Icon name="mdi:email-outline" class="w-5 h-5 mr-2" />
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonialStore = useTestimonialStore();
await callOnce('testimonial-data', () => testimonialStore.loadData());

// SEO
useHead({
  title: 'Client Testimonials - PT Nafitek Global Indonesia',
  meta: [
    { 
      name: 'description', 
      content: 'Read what our clients say about PT Nafitek Global Indonesia\'s industrial services, machinery solutions, and customer support.' 
    },
    { name: 'keywords', content: 'testimonials, client reviews, industrial services, customer feedback, Indonesia' },
  ]
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  @apply inline-flex items-center justify-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg transition-all duration-300 hover:bg-amber-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-golden focus:ring-opacity-50;
}
</style>