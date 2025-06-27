<template>
  <span ref="elementRef">{{ displayValue }}{{ suffix }}</span>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  target: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  suffix: {
    type: String,
    default: ''
  }
})

const displayValue = ref(0)
const elementRef = ref(null)
const hasAnimated = ref(false)

const animateCounter = () => {
  if (hasAnimated.value) return
  
  hasAnimated.value = true
  const startTime = Date.now()
  const startValue = 0
  const endValue = props.target
  
  const animate = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    
    displayValue.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
    
    if (progress < 1) {
      nextTick(() => {
        requestAnimationFrame(animate)
      })
    } else {
      displayValue.value = endValue
    }
  }
  
  requestAnimationFrame(animate)
}

onMounted(() => {
  const { stop } = useIntersectionObserver(
    elementRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        animateCounter()
        stop()
      }
    },
    { threshold: 0.5 }
  )
})
</script>