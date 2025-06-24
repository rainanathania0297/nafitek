<template>
  <div class="fixed inset-0 z-50 bg-charcoal flex items-center justify-center">
    <div class="text-center">
      <!-- Logo -->
      <div class="mb-8">
        <NuxtImg
          src="/logo.svg"
          alt="PT Nafitek Global Indonesia"
          class="h-20 w-auto mx-auto animate-pulse-slow"
        />
      </div>
      
      <!-- Loading Animation -->
      <div class="flex items-center justify-center space-x-2 mb-4">
        <div class="w-3 h-3 bg-golden rounded-full animate-bounce" style="animation-delay: 0ms"></div>
        <div class="w-3 h-3 bg-golden rounded-full animate-bounce" style="animation-delay: 150ms"></div>
        <div class="w-3 h-3 bg-golden rounded-full animate-bounce" style="animation-delay: 300ms"></div>
      </div>
      
      <!-- Loading Text -->
      <p class="text-white font-montserrat font-medium">
        Loading<span class="loading-dots"></span>
      </p>
    </div>
    
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-industrial-grid bg-grid opacity-10"></div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.loading-dots::after {
  content: '';
  animation: loading-dots 1.5s infinite;
}

@keyframes loading-dots {
  0%, 20% { content: ''; }
  40% { content: '.'; }
  60% { content: '..'; }
  80%, 100% { content: '...'; }
}
</style>