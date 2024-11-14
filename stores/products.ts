import { defineStore } from "pinia";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export const useProductStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as Product[],
    product: {} as Product,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
  },
  actions: {
    async fetchProducts() {
      const products = await $fetch("/api/products");
      this.products = products;
    },    
  },
});