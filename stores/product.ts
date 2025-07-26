// stores/product.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface ProductNameParts {
  name: string;
  rest: string;
}
export interface Product {
  id: string;
  number: number;
  name: string;
  nameParts: ProductNameParts;
  slug: string;
  description: string;
  icon: string;
  image: string;
  pinned?: boolean;
  categories: ProductCategory[];
}

export interface ProductCategory {
  id: string;
  name: string;
  items: string[];
}

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false);
  const productList = ref<Product[]>([]);
  const pinnedProductList = computed(() => productList.value.filter((product: Product) => product.pinned).sort((a: Product, b: Product) => a.number - b.number));
  const unpinnedProductList = computed(() => productList.value.filter((product: Product) => !product.pinned).sort((a: Product, b: Product) => a.number - b.number));

  function splitProductName(name: string) : ProductNameParts {
    const boldWords = [
      'Parts Supply',
      'Parts Solutions',
      'Solutions',
      'Supply'
    ]
    for (const suffix of boldWords) {
      if (name.endsWith(suffix)) {
        const result = name.slice(0, name.length - suffix.length).trim();
        return {
          name: result,
          rest: suffix,
        } as ProductNameParts;
      }
    }

    // fallback: first word bold
    const words = name.trim().split(' ');
    if (words.length > 1) {
      return {
        name: words.slice(0, -1).join(' '),
        rest: words[words.length - 1],
      } as ProductNameParts;
    }
    return { name: name, rest: '' } as ProductNameParts; // fallback if only one word
  }
  
  function mapProduct(product: any) {
    console.log(product);
    const nameParts = splitProductName(product.name);
    return {
      id: product.id,
      number: product.number,
      name: product.name,
      nameParts: nameParts,
      description: product.description,
      icon: product.icon,
      image: product.image,
      pinned: product.pinned,
      categories: product.categories?.map(
        (field: any) => {
          return {
            id: field.id,
            name: field.name,
            items: field.items,
          } as ProductCategory;
        }
      ),
      slug: product.path.replace('/products/', ''),
    } as Product
  }

  async function loadData() {
    isLoading.value = true;
    const productDataSource = await queryCollection('products').order('number', 'ASC').all();

    if (!productDataSource) {
      isLoading.value = false;
      return;
    }

    productList.value = productDataSource.map((product: any) => {
      return mapProduct(product)
    }) as Product[];

    isLoading.value = false;
  }

  return {
    productList,
    pinnedProductList,
    unpinnedProductList,
    loadData,
    isLoading
  };
});