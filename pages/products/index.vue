<template>
  <div class="container mx-auto py-10 lg:py-14 px-5 lg:px-0">
    <div class="bg-primary mb-5 p-2 rounded shadow-sm">
      <h2 class="font-medium text-xl text-white text-center">Products List</h2>
    </div>
    <ProductList :is-loading="isLoading" :products="products" />
  </div>
</template>

<script setup>
import ProductList from "~/components/Product/ProductList.vue";

useHead({
  title: "Products",
  meta: [{ name: "products", content: "List of product in Zafran Store" }],
});

const { fetchAllProducts } = useProduct();

const isLoading = ref(true);
const products = ref([]);
async function getAllProducts() {
  try {
    products.value = await fetchAllProducts();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getAllProducts();
});
</script>
