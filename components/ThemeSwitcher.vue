<template>
  <button
    @click="toggleColorMode"
    class="relative p-2 rounded-lg transition-all duration-300 hover:bg-gray-700/50 dark:hover:bg-gray-200/10 group"
    :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun Icon (Light Mode) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-0 rotate-90"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-to-class="opacity-0 scale-0 rotate-90"
    >
      <Icon
        v-if="colorMode.value === 'dark'"
        name="mdi:white-balance-sunny"
        class="w-6 h-6 text-golden group-hover:text-yellow-300 transition-colors duration-300"
      />
    </Transition>

    <!-- Moon Icon (Dark Mode) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-0 rotate-90"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-to-class="opacity-0 scale-0 rotate-90"
    >
      <Icon
        v-if="colorMode.value !== 'dark'"
        name="mdi:moon-waning-crescent"
        class="w-6 h-6 text-golden group-hover:text-yellow-300 transition-colors duration-300"
      />
    </Transition>

    <!-- Hover effect background -->
    <div
      class="absolute inset-0 rounded-lg bg-golden/10 scale-0 group-hover:scale-100 transition-transform duration-300"
    ></div>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  // Toggle between light and dark (skip system for simplicity)
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>

<style scoped>
/* Additional styles for smooth transitions */
.v-enter-active,
.v-leave-active {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>