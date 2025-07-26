// stores/service.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface NameParts {
  name: string;
  rest: string;
}

export interface ServiceFeature {
  name: string;
  image: string;
}

export interface Service {
  id: string;
  number: number;
  pinned: boolean;
  name: string;
  nameParts: NameParts;
  icon: string;
  image: string;
  overview: string;
  feature_cta: string;
  feature_list: ServiceFeature[];
  cta_text: string;
  slug: string;
}

export const useServiceStore = defineStore('service', () => {
  const isLoading = ref(false);
  const serviceList = ref<Service[]>([]);
  const pinnedServiceList = computed(() => serviceList.value.filter((service: Service) => service.pinned).sort((a: Service, b: Service) => a.number - b.number));
  const unpinnedServiceList = computed(() => serviceList.value.filter((service: Service) => !service.pinned).sort((a: Service, b: Service) => a.number - b.number));

  function splitProductName(name: string) : NameParts {
    const boldWords = [
      'Maintenance & Repair',
      'Specialists'
    ]
    for (const suffix of boldWords) {
      if (name.endsWith(suffix)) {
        const result = name.slice(0, name.length - suffix.length).trim();
        return {
          name: result,
          rest: suffix,
        } as NameParts;
      }
    }

    // fallback: first word bold
    const words = name.trim().split(' ');
    if (words.length > 1) {
      return {
        name: words.slice(0, -1).join(' '),
        rest: words[words.length - 1],
      } as NameParts;
    }
    return { name: name, rest: '' } as NameParts; // fallback if only one word
  }

  function mapService(service: any) {
    console.log(service);
    const nameParts = splitProductName(service.name);
    return {
      id: service.id,
      number: service.number,
      pinned: service.pinned,
      name: service.name,
      nameParts: nameParts,
      icon: service.icon,
      image: service.image,
      overview: service.overview,
      feature_cta: service.feature_cta,
      feature_list: service.feature_list?.map( (feature: any) => {
        return {
          name: feature.name,
          image: feature.image,
        } as ServiceFeature
      }),
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