<template>
  <section class="py-20 lg:py-32 bg-gradient-industrial relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10"></div>
    <div class="absolute top-10 left-10 w-32 h-32 border border-golden/20 rotate-45 animate-pulse-slow"></div>
    <div class="absolute bottom-10 right-10 w-24 h-24 bg-golden/10 rotate-12 animate-float"></div>
    
    <!-- Floating Gears -->
    <div class="absolute top-20 right-20 w-16 h-16 opacity-20 animate-rotate-gear">
      <Icon name="mdi:cog" class="w-full h-full text-golden" />
    </div>
    <div class="absolute bottom-20 left-20 w-12 h-12 opacity-30 animate-rotate-gear" style="animation-direction: reverse; animation-duration: 15s;">
      <Icon name="mdi:cog" class="w-full h-full text-golden" />
    </div>

    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Main CTA Content -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your
            <span class="text-gradient block">Industrial Operations?</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
            Join 150+ satisfied clients who trust PT Nafitek Global Indonesia for their 
            machinery procurement, maintenance, and automation needs.
          </p>
        </div>

        <!-- CTA Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Quick Quote Card -->
          <div class="group animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 h-full">
              <div class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="mdi:calculator" class="w-8 h-8 text-charcoal" />
              </div>
              <h3 class="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-golden transition-colors duration-300">
                Get Instant Quote
              </h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Receive a detailed quote for your project within 24 hours. Our experts will assess your needs and provide competitive pricing.
              </p>
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                <Icon name="mdi:calculator-variant" class="w-5 h-5 mr-2" />
                Request Quote
              </NuxtLink>
            </div>
          </div>

          <!-- Consultation Card -->
          <div class="group animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 h-full">
              <div class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="mdi:account-voice" class="w-8 h-8 text-charcoal" />
              </div>
              <h3 class="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-golden transition-colors duration-300">
                Free Consultation
              </h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Schedule a free consultation with our technical experts to discuss your industrial challenges and explore solutions.
              </p>
              <NuxtLink to="/contact" class="btn-secondary w-full text-center">
                <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
                Book Consultation
              </NuxtLink>
            </div>
          </div>

          <!-- Emergency Support Card -->
          <div class="group animate-fade-in-up md:col-span-2 lg:col-span-1" style="animation-delay: 0.5s">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-golden transition-all duration-500 hover:scale-105 h-full">
              <div class="w-16 h-16 bg-golden rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="mdi:phone-alert" class="w-8 h-8 text-charcoal" />
              </div>
              <h3 class="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-golden transition-colors duration-300">
                24/7 Emergency Support
              </h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Critical equipment failure? Our emergency response team is available 24/7 to minimize your downtime.
              </p>
              <a href="tel:+622122157327" class="btn-primary w-full text-center bg-red-600 hover:bg-red-500">
                <Icon name="mdi:phone-alert" class="w-5 h-5 mr-2" />
                Emergency Hotline
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 animate-fade-in-up" style="animation-delay: 0.6s">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Contact Details -->
            <div>
              <h3 class="text-2xl font-montserrat font-bold text-white mb-6">
                Get in Touch Today
              </h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-golden rounded-lg flex items-center justify-center">
                    <Icon name="mdi:phone" class="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p class="text-gray-400 text-sm">Call Us</p>
                    <a href="tel:+622122157327" class="text-white hover:text-golden transition-colors font-semibold">
                      +62 21 2215 7327
                    </a>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-golden rounded-lg flex items-center justify-center">
                    <Icon name="mdi:email" class="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p class="text-gray-400 text-sm">Email Us</p>
                    <a href="mailto:sales@nafitekglobal-ind.com" class="text-white hover:text-golden transition-colors font-semibold">
                      sales@nafitekglobal-ind.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-golden rounded-lg flex items-center justify-center">
                    <Icon name="mdi:map-marker" class="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p class="text-gray-400 text-sm">Visit Us</p>
                    <p class="text-white font-semibold">
                      Kp. Rawa Bebek RT 03/RW 10<br>
                      Kel. Kota Baru, Kec. Bekasi Barat<br>
                      Bekasi, Jawa Barat 17133
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Contact Form -->
            <div>
              <div class="bg-charcoal/50 rounded-xl p-6 border border-gray-600">
                <h4 class="text-lg font-semibold text-white mb-4">Quick Contact</h4>
                <form @submit.prevent="submitQuickContact" class="space-y-4">
                  <div>
                    <input
                      v-model="quickContact.name"
                      type="text"
                      placeholder="Your Name"
                      required
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-golden focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      v-model="quickContact.email"
                      type="email"
                      placeholder="Your Email"
                      required
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-golden focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      v-model="quickContact.message"
                      placeholder="Brief description of your needs"
                      rows="3"
                      required
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-golden focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full btn-primary"
                  >
                    <Icon name="mdi:send" class="w-5 h-5 mr-2" />
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof -->
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s">
          <p class="text-gray-400 mb-6">Trusted by leading companies across Indonesia</p>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div class="text-gray-500 font-semibold">PT Elektronik Nusantara</div>
            <div class="text-gray-500 font-semibold">PT Industri Maju</div>
            <div class="text-gray-500 font-semibold">PT Precision Manufacturing</div>
            <div class="text-gray-500 font-semibold">PT Teknologi Industri</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const quickContact = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const submitQuickContact = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    quickContact.value = {
      name: '',
      email: '',
      message: ''
    }
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-15px) rotate(12deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>