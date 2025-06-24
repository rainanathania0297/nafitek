<template>
  <footer class="bg-charcoal-dark border-t border-gray-700">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <NuxtImg
              src="/logo.svg"
              alt="PT Nafitek Global Indonesia"
              class="h-12 w-auto"
            />
            <div>
              <h3 class="text-xl font-montserrat font-bold text-white">
                PT Nafitek Global Indonesia
              </h3>
              <p class="text-golden">Industrial Services Excellence</p>
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Your trusted partner for high-quality machinery procurement, maintenance, 
            and repair services since 2018. We deliver exceptional value through 
            innovative solutions and professional expertise.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Icon name="mdi:map-marker" class="text-golden w-5 h-5" />
              <span class="text-gray-300 text-sm">
                Kp. Rawa Bebek RT 03/RW 10, Kel. Kota Baru, Kec. Bekasi Barat, Bekasi, Jawa Barat 17133
              </span>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="mdi:phone" class="text-golden w-5 h-5" />
              <a href="tel:+622122157327" class="text-gray-300 hover:text-golden transition-colors">
                +62 21 2215 7327
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="mdi:email" class="text-golden w-5 h-5" />
              <a href="mailto:sales@nafitekglobal-ind.com" class="text-gray-300 hover:text-golden transition-colors">
                sales@nafitekglobal-ind.com
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-montserrat font-semibold text-white mb-6">
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-gray-300 hover:text-golden transition-colors duration-300 flex items-center space-x-2 group"
              >
                <Icon name="mdi:chevron-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>{{ link.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-montserrat font-semibold text-white mb-6">
            Our Services
          </h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <div class="text-gray-300 flex items-center space-x-2">
                <Icon name="mdi:gear" class="w-4 h-4 text-golden" />
                <span class="text-sm">{{ service }}</span>
              </div>
            </li>
          </ul>
          
          <!-- Social Media -->
          <div class="mt-8">
            <h5 class="text-white font-semibold mb-4">Follow Us</h5>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-golden hover:text-charcoal transition-all duration-300 hover:scale-110"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700 bg-charcoal">
      <div class="container mx-auto px-4 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © {{ currentYear }} PT Nafitek Global Indonesia. All rights reserved.
          </div>
          
          <div class="flex items-center space-x-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-golden transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-golden transition-colors">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/sitemap" class="text-gray-400 hover:text-golden transition-colors">
              Sitemap
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get Quote', href: '/contact' }
]

const services = [
  'Component Supply',
  'Special Purpose Machines',
  'Maintenance & Repair',
  'Automation Services',
  'Brand Distribution'
]

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'mdi:linkedin' },
  { name: 'Facebook', href: '#', icon: 'mdi:facebook' },
  { name: 'Instagram', href: '#', icon: 'mdi:instagram' },
  { name: 'YouTube', href: '#', icon: 'mdi:youtube' },
  { name: 'WhatsApp', href: 'https://wa.me/622122157327', icon: 'mdi:whatsapp' }
]
</script>

<style scoped>
/* Add any footer-specific styles here */
</style>