<template>
  <div class="min-h-screen bg-white dark:bg-charcoal transition-colors duration-300">
    <!-- Accessibility Skip Links -->
    <AccessibilitySkipLink />
    
    <!-- Navigation -->
    <AppNavigation id="navigation" />
    
    <!-- Main Content -->
    <main id="main-content" tabindex="-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Scroll to Top Button -->
    <ScrollToTop />

  </div>
</template>

<script setup>
// SEO and Meta
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'theme-color', content: '#3F4240' },
    { name: 'msapplication-TileColor', content: '#3F4240' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ]
})
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>