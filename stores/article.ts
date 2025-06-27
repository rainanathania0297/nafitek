// stores/article.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Article {
  id: string;
  title: string;
  date: Date;
  category: string;
  author: string;
  authorRole: string;
  readTime: number;
  image: string;
  featured: boolean;
  overview: string;
  path: string;
}

export const useArticleStore = defineStore('article', () => {
  const isLoading = ref(false);
  const articleList = ref<Article[]>([]);
  const categoryList = computed(() => {
    return Array.from(
        new Set(articleList.value.map(article => article.category))
    )
  });

  function mapArticle(article: any) {
    return {
      id: article.id,
      title: article.title,
      overview: article.overview,
      category: article.category,
      author: article.author,
      authorRole: article.authorRole,
      date: article.date ? new Date(article.date) : new Date(),
      readTime: article.readTime || 5,
      image: article.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: article.featured || false,
      path: article.path,
    } as Article
  }

  async function loadData() {
    isLoading.value = true;
    const articleDataSource = await queryCollection('article').all();

    if (!articleDataSource) {
      isLoading.value = false;
      return;
    }

    articleList.value = articleDataSource.map((article: any) => {
      return mapArticle(article)
    }) as Article[];

    isLoading.value = false;
  }

  async function getArticleByStem(stem: string) {
    const articleSource = await queryCollection('article').where(
        "stem" , "=", `article/${stem}`
      ).first()

    return articleSource;
  }

  async function findRelatedArticleByStemAndCategory(stem: string, category: string, limit: number = 3) {
    const articleRelatedSource = await queryCollection('article').where(
        "stem" , "<>", `article/${stem}`
      ).where(
        "category" , "=", category
      ).limit(limit).all()

    return articleRelatedSource?.map((article: any) => {
      return mapArticle(article)
    }) || []
  }

  async function findRelatedArticleByStem(stem: string, limit: number = 3) {
    const articleRelatedSource = await queryCollection('article').where(
      "stem" , "<>", `article/${stem}`
    ).limit(limit).all()

    return articleRelatedSource?.map((article: any) => {
      return mapArticle(article)
    }) || []
  }

  async function getRelatedArticles(stem: string, category: string, limit: number = 3) {
    const relatedArticleByStemAndCategory = await findRelatedArticleByStemAndCategory(stem, category, limit)
    const relatedArticleByStem = await findRelatedArticleByStem(stem, limit)
    const seenKeys = new Set(); 
    const mergedArticles = relatedArticleByStemAndCategory.concat(relatedArticleByStem); // Combine the arrays
    const uniqueArticles = mergedArticles.filter(obj => {
      const keyValue = obj.id;
      if (seenKeys.has(keyValue)) {
        return false; // Duplicate, so filter it out
      } else {
        seenKeys.add(keyValue); // Add the key to the set
        return true; // Unique, so keep it
      }
    });
  
    return uniqueArticles.slice(0, limit);
  }

  return {
    articleList,
    categoryList,
    loadData,
    getArticleByStem,
    getRelatedArticles,
  };
});