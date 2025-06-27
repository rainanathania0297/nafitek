// stores/service.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Service {
  id: string;
  number: number;
  pinned: boolean;
  name: string;
  icon: string;
  image: string;
  overview: string;
  feature_cta: string;
  feature_list: string[];
  cta_text: string;
  slug: string;
}

export const useServiceStore = defineStore('service', () => {
  const isLoading = ref(false);
  const serviceList = ref<Service[]>([]);
  const pinnedServiceList = computed(() => serviceList.value.filter((service: Service) => service.pinned).sort((a: Service, b: Service) => a.number - b.number));
  const unpinnedServiceList = computed(() => serviceList.value.filter((service: Service) => !service.pinned).sort((a: Service, b: Service) => a.number - b.number));

  function mapService(service: any) {
    console.log(service);
    return {
      id: service.id,
      number: service.number,
      pinned: service.pinned,
      name: service.name,
      icon: service.icon,
      image: service.image,
      overview: service.overview,
      feature_cta: service.feature_cta,
      feature_list: service.feature_list,
      cta_text: service.cta_text,
      slug: service.path.replace('/services/', ''),
    } as Service
  }

  async function loadData() {
    isLoading.value = true;
    const serviceDataSource = await queryCollection('services').order('number', 'ASC').all();

    if (!serviceDataSource) {
      isLoading.value = false;
      return;
    }

    serviceList.value = serviceDataSource.map((service: any) => {
      return mapService(service)
    }) as Service[];

    isLoading.value = false;
  }

  return {
    serviceList,
    pinnedServiceList,
    unpinnedServiceList,
    loadData,
  };
});