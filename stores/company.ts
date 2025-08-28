// stores/company.ts

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface CompanyStats {
  year_established: number;
  year_experience: number;
  client_total: number;
  client_statisfaction: number;
  project_total: number;
  project_success_percentage: number;
  project_ontime_percentage: number;
  machine_total: number;
  industry_served: number;
  industry_fields: CompanyStatsIndustryField[];
}

export interface CompanyStatsIndustryField {
  name: string;
  icon: string;
}

export interface CompanyStrengths {
  number: number;
  icon: string;
  name: string;
  description: string;
  features: string[];
}

export interface CompanyProcessesStep {
  number: number;
  icon: string;
  name: string;
  description: string;
  image: string;
}

export interface CompanyProcessesBenefit {
  title: string;
  icon: string;
  description: string;
}

export interface CompanyProcesses {
  steps: CompanyProcessesStep[];
  benefits: CompanyProcessesBenefit[];
}

export interface CompanyAddress {
  street: string;
  village: string;
  district: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
}

export interface CompanyData {
  name: string;
  address: CompanyAddress;
  phone: string;
  email: string;
  about: string[];
  vision: string[];
  mission: string[];
  stats: CompanyStats;
  strengths: CompanyStrengths[];
  processes: CompanyProcesses;
}

export const useCompanyStore = defineStore("company", () => {
  const isLoading = ref(false);
  const companyData = ref<CompanyData>({} as CompanyData);

  const companyName = computed(() => companyData.value?.name);
  const companyStats = computed(() => companyData.value?.stats);
  const companyStrengths = computed(() => companyData.value?.strengths);
  const companyProcesses = computed(() => companyData.value?.processes);

  async function loadData() {
    isLoading.value = true;
    const companyDataSource = await queryCollection("company").first();

    if (!companyDataSource) {
      isLoading.value = false;
      return;
    }

    const year_established = companyDataSource?.year_established
    const year_experience = new Date().getFullYear() - year_established
    companyData.value = {
      name: companyDataSource?.name,
      address: companyDataSource?.address as CompanyAddress,
      phone: companyDataSource?.phone,
      email: companyDataSource?.email,
      about: companyDataSource?.about as string[],
      vision: companyDataSource?.vision as string[],
      mission: companyDataSource?.mission as string[],
      stats: {
        year_established: companyDataSource?.year_established,
        year_experience: year_experience,
        client_total: companyDataSource?.client_total,
        client_statisfaction: companyDataSource?.client_statisfaction,
        project_total: companyDataSource?.project_total,
        project_success_percentage:
          companyDataSource?.project_success_percentage,
        project_ontime_percentage: companyDataSource?.project_ontime_percentage,
        machine_total: companyDataSource?.machine_total,
        industry_served: companyDataSource?.industry_served,
        industry_fields: companyDataSource?.industry_fields.map(
          (field: any) => {
            return {
              name: field.name,
              icon: field.icon,
            } as CompanyStatsIndustryField;
          }
        ),
      } as CompanyStats,
      strengths: companyDataSource?.strengths.map((strength: any) => {
        const features = strength.features.map((feat: String) => {
          if (feat.includes("{year_experience}")) {
            return feat.replace("{year_experience}", year_experience.toString())
          } else {
            return feat
          }
        })
        return {
          number: strength.number,
          icon: strength.icon,
          name: strength.name,
          description: strength.description,
          features: features || [],
        } as CompanyStrengths;
      }),
      processes: {
        steps: companyDataSource?.processes?.steps
          .map((process: any) => {
            return {
              number: process.number,
              icon: process.icon,
              name: process.name,
              description: process.description,
              image: process.image,
            } as CompanyProcessesStep;
          })
          .sort(
            (a: CompanyProcessesStep, b: CompanyProcessesStep) =>
              a.number - b.number
          ),
        benefits: companyDataSource?.processes?.benefits.map((benefit: any) => {
          return {
            title: benefit.title,
            icon: benefit.icon,
            description: benefit.description,
          } as CompanyProcessesBenefit;
        }),
      } as CompanyProcesses,
    } as CompanyData;

    isLoading.value = false;
  }

  return {
    companyData,
    companyName,
    companyStats,
    companyStrengths,
    companyProcesses,
    isLoading,
    loadData,
  };
});
