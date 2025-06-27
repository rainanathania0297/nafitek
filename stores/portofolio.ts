// stores/portofolio.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Portofolio {
  id: string;
  title: string;
  date: Date;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  project_status: string;
  project_client: string;
  project_location: string;
  project_duration: string;
  project_solution: string;
  path: string;
}

export const usePortofolioStore = defineStore('portofolio', () => {
  const isLoading = ref(false);
  const portofolioList = ref<Portofolio[]>([]);
  const categoryList = computed(() => {
    return Array.from(
        new Set(portofolioList.value.map(portofolio => portofolio.category))
    )
  });

  function mapPortofolio(portofolio: any) {
    return {
      id: portofolio.id,
      title: portofolio.title,
      date: portofolio.date ? new Date(portofolio.date) : new Date(),
      category: portofolio.category,
      tags: portofolio.tags,
      image: portofolio.image,
      featured: portofolio.featured,
      project_status: portofolio.project_status,
      project_client: portofolio.project_client,
      project_location: portofolio.project_location,
      project_duration: portofolio.project_duration,
      project_solution: portofolio.project_solution,
      path: portofolio.path,
    } as Portofolio
  }

  async function loadData() {
    isLoading.value = true;
    const portofolioDataSource = await queryCollection('portofolio').order('date', 'DESC').all();

    if (!portofolioDataSource) {
      isLoading.value = false;
      return;
    }

    portofolioList.value = portofolioDataSource.map((portofolio: any) => {
      return mapPortofolio(portofolio)
    }) as Portofolio[];

    isLoading.value = false;
  }

  async function getPortofolioByStem(stem: string) {
    const portofolioSource = await queryCollection('portofolio').where(
        'stem', '=', `portofolio/${stem}`
    ).first();
    return portofolioSource;
  }

  async function findRelatedPortofolioByStemAndCategory(stem: string, category: string, limit: number = 3) {
    const portofolioRelatedSource = await queryCollection('portofolio').where(
        "stem" , "<>", `portofolio/${stem}`
      ).where(
        "category" , "=", category
      ).limit(limit).all()

    return portofolioRelatedSource?.map((portofolio: any) => {
      return mapPortofolio(portofolio)
    }) || []
  }

  async function findRelatedPortofolioByStem(stem: string, limit: number = 3) {
    const portofolioRelatedSource = await queryCollection('portofolio').where(
      "stem" , "<>", `portofolio/${stem}`
    ).limit(limit).all()

    return portofolioRelatedSource?.map((portofolio: any) => {
      return mapPortofolio(portofolio)
    }) || []
  }

  async function getRelatedPortofolio(stem: string, category: string, limit: number = 3) {
    const relatedPortofolioByStemAndCategory = await findRelatedPortofolioByStemAndCategory(stem, category, limit)
    const relatedPortofolioByStem = await findRelatedPortofolioByStem(stem, limit)
    const seenKeys = new Set(); 
    const mergedPortofolio = relatedPortofolioByStemAndCategory.concat(relatedPortofolioByStem); // Combine the arrays
    const uniquePortofolio = mergedPortofolio.filter(obj => {
      const keyValue = obj.id;
      if (seenKeys.has(keyValue)) {
        return false; // Duplicate, so filter it out
      } else {
        seenKeys.add(keyValue); // Add the key to the set
        return true; // Unique, so keep it
      }
    });
  
    return uniquePortofolio.slice(0, limit);
  }

  return {
    portofolioList,
    categoryList,
    loadData,
    getPortofolioByStem,
    getRelatedPortofolio,
  }
})