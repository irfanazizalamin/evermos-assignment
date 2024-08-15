import { defineStore } from "pinia";
import type { Product } from "~/types";

const addCartToLocalStorage = (products: Product[]) => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    localStorage.setItem("cart", JSON.stringify({ products }));
  }
};

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    totalQuantityAllProducts(state) {
      return state.products.reduce((acc, curr) => (acc += curr.quantity!), 0);
    },
  },
  actions: {
    initialProductToCart(products: Product[]) {
      this.products = products;
    },
    addProductToCart(product: Product) {
      const isThere = this.products.find((p: Product) => p.id === product.id);

      if (isThere) {
        this.products.forEach((p: Product) => {
          if (p.id === product.id) {
            p.quantity!++;
          }
        });
      } else {
        this.products.push({ ...product, quantity: 1 });
      }
      addCartToLocalStorage(this.products);
    },
    increaseQuantityProduct(id: string) {
      this.products.forEach((product: Product) => {
        if (product.id === id) {
          product.quantity!++;
        }
      });
      addCartToLocalStorage(this.products);
    },
    decreaseQuantityProduct(id: string) {
      this.products.forEach((product: Product) => {
        if (product.id === id) {
          if (product.quantity! > 1) {
            product.quantity!--;
          }
        }
      });
      addCartToLocalStorage(this.products);
    },
  },
});
