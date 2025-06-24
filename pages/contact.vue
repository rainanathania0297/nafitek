<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-overlay z-10"></div>
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        ></div>
        <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10 z-5"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 z-5">
        <div class="absolute top-20 left-10 w-16 h-16 border-2 border-golden/30 rotate-45 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-20 h-20 border border-golden/20 rounded-full animate-pulse-slow"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in-up">
            Contact <span class="text-gradient">Us</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
            Ready to transform your industrial operations? Let's discuss your project
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-5"></div>
      
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Information -->
          <div class="animate-fade-in-left">
            <div class="mb-12">
              <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
                Get in <span class="text-gradient">Touch</span>
              </h2>
              <div class="w-24 h-1 bg-golden mb-6"></div>
              <p class="text-lg text-gray-300 leading-relaxed">
                Ready to discuss your industrial needs? Our team of experts is here to help you find the perfect solution. 
                Contact us today for a free consultation and quote.
              </p>
            </div>

            <!-- Contact Details -->
            <div class="space-y-8">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 class="text-xl font-montserrat font-bold text-white mb-2">Our Location</h3>
                  <p class="text-gray-300">
                    Kp. Rawa Bebek RT 03/RW 10<br>
                    Kel. Kota Baru, Kec. Bekasi Barat<br>
                    Bekasi, Jawa Barat 17133<br>
                    Indonesia
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 class="text-xl font-montserrat font-bold text-white mb-2">Phone</h3>
                  <a 
                    href="tel:+622122157327" 
                    class="text-gray-300 hover:text-golden transition-colors duration-300"
                  >
                    +62 21 2215 7327
                  </a>
                  <p class="text-sm text-gray-400 mt-1">24/7 Emergency Support Available</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 class="text-xl font-montserrat font-bold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:sales@nafitekglobal-ind.com" 
                    class="text-gray-300 hover:text-golden transition-colors duration-300"
                  >
                    sales@nafitekglobal-ind.com
                  </a>
                  <p class="text-sm text-gray-400 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 class="text-xl font-montserrat font-bold text-white mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/622122157327" 
                    target="_blank"
                    class="text-gray-300 hover:text-golden transition-colors duration-300"
                  >
                    +62 21 2215 7327
                  </a>
                  <p class="text-sm text-gray-400 mt-1">Quick response for urgent inquiries</p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="mt-12 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 class="text-xl font-montserrat font-bold text-white mb-4">Business Hours</h3>
              <div class="space-y-2 text-gray-300">
                <div class="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-fade-in-right">
            <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 class="text-2xl font-montserrat font-bold text-white mb-6">Send us a Message</h3>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>

                <!-- Company -->
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <!-- Service Interest -->
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    v-model="form.service"
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="component-supply">Component Supply</option>
                    <option value="special-machines">Special Purpose Machines</option>
                    <option value="maintenance-repair">Maintenance & Repair</option>
                    <option value="automation">Automation Services</option>
                    <option value="distribution">Brand Distribution</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-8 py-4 bg-golden text-charcoal font-bold rounded-lg hover:bg-golden-light transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span v-if="!isSubmitting" class="flex items-center justify-center">
                    Send Message
                    <Icon name="heroicons:paper-airplane" class="w-5 h-5 ml-2" />
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <Icon name="heroicons:arrow-path" class="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </span>
                </button>
              </form>

              <!-- Success/Error Messages -->
              <div v-if="submitMessage" class="mt-6">
                <div 
                  :class="[
                    'p-4 rounded-lg',
                    submitSuccess ? 'bg-green-600/20 border border-green-600 text-green-400' : 'bg-red-600/20 border border-red-600 text-red-400'
                  ]"
                >
                  {{ submitMessage }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="py-20 bg-gradient-industrial relative overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Quick <span class="text-gradient">Actions</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Need immediate assistance? Choose the best way to reach us
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Emergency Support -->
          <div class="card-industrial text-center animate-fade-in-up">
            <div class="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:exclamation-triangle" class="w-8 h-8 text-red-400" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">Emergency Support</h3>
            <p class="text-gray-300 mb-6">
              Critical equipment failure? Our emergency response team is available 24/7.
            </p>
            <a 
              href="tel:+622122157327"
              class="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Call Now
              <Icon name="heroicons:phone" class="w-5 h-5 ml-2" />
            </a>
          </div>

          <!-- Request Quote -->
          <div class="card-industrial text-center animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:document-text" class="w-8 h-8 text-golden" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">Request Quote</h3>
            <p class="text-gray-300 mb-6">
              Get a detailed quote for your project within 24 hours from our experts.
            </p>
            <button 
              @click="scrollToForm"
              class="inline-flex items-center px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300"
            >
              Get Quote
              <Icon name="heroicons:calculator" class="w-5 h-5 ml-2" />
            </button>
          </div>

          <!-- WhatsApp Chat -->
          <div class="card-industrial text-center animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:chat-bubble-left-right" class="w-8 h-8 text-green-400" />
            </div>
            <h3 class="text-xl font-montserrat font-bold text-white mb-4">WhatsApp Chat</h3>
            <p class="text-gray-300 mb-6">
              Quick questions? Chat with us directly on WhatsApp for instant responses.
            </p>
            <a 
              href="https://wa.me/622122157327"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              Chat Now
              <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-charcoal">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Find <span class="text-gradient">Us</span>
          </h2>
          <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit our facility in Bekasi, West Java for direct consultation and service
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            <!-- Map Placeholder -->
            <div class="h-96 bg-gray-700 flex items-center justify-center">
              <div class="text-center">
                <Icon name="heroicons:map-pin" class="w-16 h-16 text-golden mx-auto mb-4" />
                <h3 class="text-xl font-montserrat font-bold text-white mb-2">Our Location</h3>
                <p class="text-gray-300">
                  Kp. Rawa Bebek RT 03/RW 10, Kel. Kota Baru<br>
                  Kec. Bekasi Barat, Bekasi, Jawa Barat 17133
                </p>
                <a 
                  href="https://maps.google.com/?q=Kp.+Rawa+Bebek+RT+03/RW+10,+Kel.+Kota+Baru,+Kec.+Bekasi+Barat,+Bekasi,+Jawa+Barat+17133"
                  target="_blank"
                  class="inline-flex items-center mt-4 px-6 py-3 bg-golden text-charcoal font-semibold rounded-lg hover:bg-golden-light transition-all duration-300"
                >
                  Open in Google Maps
                  <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Methods
const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    }
    
    submitSuccess.value = true
    submitMessage.value = 'Thank you for your message! We will get back to you within 24 hours.'
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
    
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}

const scrollToForm = () => {
  const formElement = document.querySelector('form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}

// SEO Meta
useHead({
  title: 'Contact Us - PT Nafitek Global Indonesia | Get Industrial Solutions',
  meta: [
    {
      name: 'description',
      content: 'Contact PT Nafitek Global Indonesia for industrial services, machinery maintenance, automation solutions. 24/7 emergency support available. Get your free quote today.'
    },
    {
      name: 'keywords',
      content: 'contact PT Nafitek Global, industrial services contact, machinery maintenance quote, automation consultation, emergency support, Bekasi industrial services'
    },
    {
      property: 'og:title',
      content: 'Contact PT Nafitek Global Indonesia - Industrial Solutions'
    },
    {
      property: 'og:description',
      content: 'Get in touch with our industrial experts for machinery maintenance, automation, and component supply solutions. Free consultation available.'
    },
    {
      property: 'og:image',
      content: '/logo.png'
    }
  ]
})

// Structured Data will be added later when SEO module is configured
</script>