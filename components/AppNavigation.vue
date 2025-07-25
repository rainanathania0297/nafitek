<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-charcoal/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent',
      'border-b border-gray-700/50',
    ]"
  >
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <NuxtImg
            src="/logo.svg"
            alt="PT Nafitek Global Indonesia"
            class="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            loading="eager"
          />
          <div class="hidden md:block">
            <h1 class="text-xl font-montserrat font-bold text-white">
              PT Nafitek Global
            </h1>
            <p class="text-sm text-golden">
              Customer Focused, Commited to Excellent
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="relative text-white hover:text-golden transition-colors duration-300 font-medium group"
            @click="closeMenu"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full"
            ></span>
          </NuxtLink>

          <!-- CTA Button -->
          <NuxtLink to="/contact" class="btn-primary ml-4" @click="closeMenu">
            Get Quote
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
          :class="{ open: isMenuOpen }"
        >
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-golden"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-golden"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-golden"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
          ></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          :class="[
            isScrolled
              ? 'bg-charcoal/95 backdrop-blur-md'
              : 'backdrop-blur-md',
            'lg:hidden absolute top-full left-0 right-0 border-b border-gray-700/50 shadow-xl',
          ]"
        >
          <div class="container mx-auto px-4 py-6">
            <div class="flex flex-col space-y-4">
              <NuxtLink
                v-for="item in navigationItems"
                :key="item.name"
                :to="item.href"
                class="text-white hover:text-golden transition-colors duration-300 font-medium py-2 border-b border-gray-700/30 last:border-b-0"
                @click="closeMenu"
              >
                {{ item.name }}
              </NuxtLink>

              <NuxtLink
                to="/contact"
                class="btn-primary mt-4 text-center"
                @click="closeMenu"
              >
                Get Quote
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const navigationItems = [
  // { name: 'Home', href: '/' },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: 'Portofolio', href: '/portofolio' },
  // { name: 'Blog', href: '/blog' },
  { name: "Contact", href: "/contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      closeMenu();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Close menu on route change
const route = useRoute();
watch(
  () => route.path,
  () => {
    closeMenu();
  }
);
</script>

<style scoped>
/* Additional mobile menu animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
