<template>
  <ul
    role="list"
    class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    <template v-if="isLoading">
      <div v-for="index in 8" :key="index">
        <ProductLoadingCard />
      </div>
    </template>
    <template v-else>
      <li
        v-for="product in products"
        :key="product?.title"
        class="relative group"
      >
        <ProductCard :product="product" />
      </li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
import ProductCard from "./ProductCard.vue";
import ProductLoadingCard from "./ProductLoadingCard.vue";

defineProps({
  products: {
    required: true,
    type: Object,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>
