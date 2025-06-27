// stores/testimonial.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Testimonial {
  name: string;
  company: string;
  position: string;
  image: string;
  project: string;
  message: string;
  rating: number;
}

export const useTestimonialStore = defineStore('testimonial', () => {
  const isLoading = ref(false);
  const testimonialList = ref<Testimonial[]>([]);

  async function loadData() {
    isLoading.value = true;
    const testimonialDataSource = await queryCollection('testimonials').all();

    if (!testimonialDataSource) {
      isLoading.value = false;
      return;
    }

    testimonialList.value = testimonialDataSource.map((testimonial) => ({
      name: testimonial.name,
      company: testimonial.company,
      position: testimonial.position,
      image: testimonial.image,
      project: testimonial.project,
      message: testimonial.message,
      rating: testimonial.rating,
    }));
  }

  return {
    isLoading,
    testimonialList,
    loadData,
  };
});