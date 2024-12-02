import { defineStore } from "pinia";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
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
  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;  // Actualizar el producto en el array
    }
    },
  updateProductImage(productId: number, imageUrl: string) {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.products[index].imageUrl = imageUrl;  // Actualiza solo la URL de la imagen
    }
  }
},
});
