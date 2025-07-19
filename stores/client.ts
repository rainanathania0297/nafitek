// stores/client.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  featured: boolean;
}

export const useClientStore = defineStore('client', () => {
  const isLoading = ref(false);
  const clientList = ref<Client[]>([]);
  const featuredClientList = computed(() => clientList.value.filter((client: Client) => client.featured).sort((a: Client, b: Client) => a.id.localeCompare(b.id)));
  const regularClientList = computed(() => clientList.value.filter((client: Client) => !client.featured).sort((a: Client, b: Client) => a.id.localeCompare(b.id)));

  function mapClient(client: any) {
    return {
      id: client.id,
      name: client.name,
      logo: client.logo,
      industry: client.industry,
      description: client.description,
      featured: client.featured,
    } as Client
  }

  async function loadData() {
    isLoading.value = true;
    // Use the dedicated clients collection
    const clientDataSource = await queryCollection('clients').order('id', 'ASC').all();

    if (!clientDataSource) {
      isLoading.value = false;
      return;
    }

    clientList.value = clientDataSource.map((client: any) => {
      return mapClient(client)
    }) as Client[];

    isLoading.value = false;
  }

  return {
    clientList,
    featuredClientList,
    regularClientList,
    loadData,
  };
});