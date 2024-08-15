<template>
  <div class="container mx-auto py-10 lg:py-14 px-5 lg:px-0">
    <div
      class="flex flex-col items-center justify-center pb-8"
    >
      <Slider />
    </div>

    <div>
      <div class="flex justify-between">
        <div>
          <div class="bg-primary mb-5 p-2 rounded shadow-sm">
            <h2 class="font-medium text-xl text-white text-center">
              Products List
            </h2>
          </div>
        </div>
        <div class="relative">
          <button
            type="button"
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            @click="isSortDropdownOpen = !isSortDropdownOpen"
          >
            Sort By
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            v-if="isSortDropdownOpen"
            class="absolute right-0 z-[99] mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                v-for="(option, index) in sortOptions"
                :key="index"
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                :class="{
                  'bg-primary text-gray-900':
                    selectedSortValue === option.value,
                }"
                @click="onSortProduct(option.value)"
              >
                {{ option.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ProductList :is-loading="isLoading" :products="products" />
    </div>
  </div>
</template>

<script setup>
import Slider from "~/components/Slider.vue";
import ProductList from "~/components/Product/ProductList.vue";

useHead({
  title: "Products",
  meta: [{ name: "products", content: "List of product in Zafran Store" }],
});

const { fetchAllProducts } = useProduct();

const isLoading = ref(true);
const products = ref([]);
const sortedProducts = ref([]);
async function getAllProducts() {
  try {
    const response = await fetchAllProducts();
    products.value = response;
    sortedProducts.value = response;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

const isSortDropdownOpen = ref(false);
const selectedSortValue = ref("");
const sortOptions = [
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
];

function onSortProduct(value) {
  selectedSortValue.value = value;
  isSortDropdownOpen.value = false;

  if (value === "price-asc") {
    sortedProducts.value = products.value.sort((a, b) => a.price - b.price);
  } else if (value === "price-desc") {
    sortedProducts.value = products.value.sort((a, b) => b.price - a.price);
  }
}

onMounted(() => {
  getAllProducts();
});
</script>
