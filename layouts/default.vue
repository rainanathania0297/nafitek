<template>
  <div class="min-h-screen bg-charcoal">
    <!-- Navigation -->
    <AppNavigation />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Scroll to Top Button -->
    <ScrollToTop />
    
    <!-- Loading Overlay -->
    <LoadingOverlay v-if="isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

// SEO and Meta
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'theme-color', content: '#3F4240' },
    { name: 'msapplication-TileColor', content: '#3F4240' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ]
})
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>