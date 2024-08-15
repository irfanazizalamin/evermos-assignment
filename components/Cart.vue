<template>
  <ClientOnly>
    <TransitionRoot as="template" :show="isCartOpen">
      <Dialog as="div" class="relative z-[99999]" @close="emit('closeCart')">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 scale-105"
              enter-to="opacity-100 scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-105"
            >
              <DialogPanel
                class="flex w-full max-w-3xl transform text-left text-base transition sm:my-8"
              >
                <form
                  v-if="products.length > 0"
                  class="relative flex w-full flex-col overflow-hidden bg-white pb-8 pt-6 sm:rounded-lg sm:pb-6 lg:py-8"
                >
                  <div
                    class="flex items-center justify-between px-4 sm:px-6 lg:px-8"
                  >
                    <h2 class="text-lg font-medium text-gray-900">
                      Shopping Cart
                    </h2>
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-500"
                      @click="emit('closeCart')"
                    >
                      <span class="sr-only">Close</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <section aria-labelledby="cart-heading">
                    <h2 id="cart-heading" class="sr-only">
                      Items in your shopping cart
                    </h2>

                    <ul
                      role="list"
                      class="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
                    >
                      <li
                        v-for="(product, productIdx) in products"
                        :key="product.id"
                        class="flex py-8 text-sm sm:items-center"
                      >
                        <img
                          :src="product.image"
                          :alt="product.title"
                          class="h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32 p-3"
                        />
                        <div
                          class="ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-x-5 gap-y-3 sm:ml-6 sm:flex sm:items-center sm:gap-0"
                        >
                          <div class="row-end-1 flex-auto sm:pr-6">
                            <h3 class="font-medium text-gray-900">
                              <a :href="product.id" target="_blank">{{
                                product.title
                              }}</a>
                            </h3>
                            <p class="mt-1 text-gray-500">
                              {{ product.category.toUpperCase() }}
                            </p>
                          </div>
                          <p
                            class="row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right"
                          >
                            ${{ product.price }}
                          </p>
                          <div
                            class="ml-2 flex-col items-center sm:block sm:flex-none sm:text-center"
                          >
                            <label
                              :for="`quantity-${productIdx}`"
                              class="sr-only"
                              >Quantity, {{ product.title }}</label
                            >
                            <div class="border px-1 py-1 mr-2 mb-2 sm:mb-0">
                              <p class="font-medium">
                                {{ product.quantity }}
                              </p>
                            </div>

                            <div class="space-x-2">
                              <button
                                @click="decreaseQuantity(product.id)"
                                type="button"
                                class="border px-5 shadow-sm font-medium rounded-full text-white bg-primary hover:bg-primaryLighter active:scale-105 transition-all"
                              >
                                <span class="text-lg">-</span>
                              </button>
                              <button
                                @click="increaseQuantity(product.id)"
                                type="button"
                                class="border px-5 shadow-sm font-medium sm:ml-0 sm:mt-2 rounded-full text-white bg-primary hover:bg-primaryLighter active:scale-105 transition-all"
                              >
                                <span class="text-lg">+</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section
                    aria-labelledby="summary-heading"
                    class="mt-auto sm:px-6 lg:px-8"
                  >
                    <div class="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                      <h2 id="summary-heading" class="sr-only">
                        Order summary
                      </h2>

                      <div class="flow-root">
                        <dl class="-my-4 divide-y divide-gray-200 text-sm">
                          <div class="flex items-center justify-between py-4">
                            <dt class="text-gray-600">Subtotal</dt>
                            <dd class="font-medium text-gray-900">
                              ${{ order.subTotal }}
                            </dd>
                          </div>

                          <div class="flex items-center justify-between py-4">
                            <dt class="text-gray-600">Tax (10%)</dt>
                            <dd class="font-medium text-gray-900">
                              ${{ order.tax }}
                            </dd>
                          </div>
                          <div class="flex items-center justify-between py-4">
                            <dt class="text-base font-medium text-gray-900">
                              Order total
                            </dt>
                            <dd class="text-base font-medium text-gray-900">
                              ${{ order.total }}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>
                </form>
                <div
                  v-else
                  class="bg-white w-full pb-8 pt-6 sm:rounded-lg sm:pb-6 lg:py-8"
                >
                  <div
                    class="flex items-center justify-between px-4 sm:px-6 lg:px-8"
                  >
                    <h2 class="text-lg font-medium text-gray-900">
                      Shopping Cart
                    </h2>
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-500"
                      @click="emit('closeCart')"
                    >
                      <span class="sr-only">Close</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div class="mt-10 bg-gray-100 mx-5 py-5 rounded">
                    <p class="text-center font-medium text-xl">No Product.</p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { Product } from "~/types";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useCartStore } from "~/store/cartStore";

defineProps({
  isCartOpen: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["closeCart"]);

const { products, increaseQuantityProduct, decreaseQuantityProduct } =
  useCartStore();

const order = ref({
  subTotal: 0,
  tax: 0.1,
  total: 0,
});
const TAX = 0.1;

const increaseQuantity = (id: string) => {
  increaseQuantityProduct(id);
};

const decreaseQuantity = (id: string) => {
  decreaseQuantityProduct(id);
};

const updateDetailOrder = (products: Product[]) => {
  order.value.subTotal = 0;
  order.value.tax = 0;
  order.value.total = 0;

  products.forEach((p: Product) => {
    order.value.subTotal += p.price * p.quantity!;
  });

  order.value.subTotal = Math.ceil(order.value.subTotal);
  order.value.tax = Math.ceil(order.value.subTotal * TAX);

  order.value.total = order.value.subTotal + order.value.tax;
};

onMounted(() => {
  if (products) {
    updateDetailOrder(products);
  }
});

watch(products, () => {
  updateDetailOrder(products);
});
</script>
