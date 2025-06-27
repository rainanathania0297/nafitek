// stores/partner.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  products: string[];
  link: string;
  pinned: boolean;
}

export const usePartnerStore = defineStore('partner', () => {
  const isLoading = ref(false);
  const partnerList = ref<Partner[]>([]);
  const pinnedPartnerList = computed(() => partnerList.value.filter((partner: Partner) => partner.pinned).sort((a: Partner, b: Partner) => a.id.localeCompare(b.id)));
  const unpinnedPartnerList = computed(() => partnerList.value.filter((partner: Partner) => !partner.pinned).sort((a: Partner, b: Partner) => a.id.localeCompare(b.id)));

  function mapPartner(partner: any) {
    return {
      id: partner.id,
      name: partner.name,
      logo: partner.logo,
      description: partner.description,
      products: partner.products,
      link: partner.link,
      pinned: partner.pinned,
    } as Partner
  }

  async function loadData() {
    isLoading.value = true;
    const partnerDataSource = await queryCollection('partners').order('id', 'ASC').all();

    if (!partnerDataSource) {
      isLoading.value = false;
      return;
    }

    partnerList.value = partnerDataSource.map((partner: any) => {
      return mapPartner(partner)
    }) as Partner[];

    isLoading.value = false;
  }

  return {
    partnerList,
    pinnedPartnerList,
    unpinnedPartnerList,
    loadData,
  };
});