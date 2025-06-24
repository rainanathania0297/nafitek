<template>
  <div class="skip-links">
    <a 
      href="#main-content" 
      class="skip-link"
      @click="skipToMain"
    >
      Skip to main content
    </a>
    <a 
      href="#navigation" 
      class="skip-link"
      @click="skipToNav"
    >
      Skip to navigation
    </a>
  </div>
</template>

<script setup>
const skipToMain = () => {
  const mainContent = document.getElementById('main-content')
  if (mainContent) {
    mainContent.focus()
    mainContent.scrollIntoView({ behavior: 'smooth' })
  }
}

const skipToNav = () => {
  const navigation = document.getElementById('navigation')
  if (navigation) {
    navigation.focus()
    navigation.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.skip-links {
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 9999;
}

.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-golden);
  color: var(--color-charcoal);
  padding: 8px 16px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0 0 4px 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.skip-link:focus {
  transform: translateY(0);
  outline: 2px solid var(--color-charcoal);
  outline-offset: 2px;
}

.skip-link:hover {
  background: var(--color-golden-light);
}
</style>