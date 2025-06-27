// stores/company.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface CompanyStats {
  year_experience: number;
  client_total: number;
  client_statisfaction: number;
  project_total: number;
  project_success_percentage: number;
  project_ontime_percentage: number;
  machine_total: number;
  industry_served: number;
}

export interface CompanyStrengths {
  number: number;
  icon: string;
  name: string;
  description: string;
  features: string[];
}

export interface CompanyData {
  name: string;
  stats: CompanyStats;
  strengths: CompanyStrengths[];
}

export const useCompanyStore = defineStore('company', () => {
  const isLoading = ref(false);
  const companyData = ref<CompanyData>({} as CompanyData);

  const companyName = computed(() => companyData.value?.name);
  const companyStats = computed(() => companyData.value?.stats);
  const companyStrengths = computed(() => companyData.value?.strengths);

  async function loadData() {
    isLoading.value = true;
    const companyDataSource = await queryCollection('company').first();

    if (!companyDataSource) {
      isLoading.value = false;
      return;
    }

    companyData.value = {
      name: companyDataSource?.name,
      stats: {
        year_experience: companyDataSource?.year_experience,
        client_total: companyDataSource?.client_total,
        client_statisfaction: companyDataSource?.client_statisfaction,
        project_total: companyDataSource?.project_total,
        project_success_percentage: companyDataSource?.project_success_percentage,
        project_ontime_percentage: companyDataSource?.project_ontime_percentage,
        machine_total: companyDataSource?.machine_total,
        industry_served: companyDataSource?.industry_served,
      } as CompanyStats,
      strengths: companyDataSource?.strengths.map((strength: any) => {
        return {
          number: strength.number,
          icon: strength.icon,
          name: strength.name,
          description: strength.description,
          features: strength.features || [],
        } as CompanyStrengths;
      }),
    } as CompanyData;

    isLoading.value = false;
  }

  return {
    companyData,
    companyName,
    companyStats,
    companyStrengths,
    isLoading,
    loadData,
  };
});
