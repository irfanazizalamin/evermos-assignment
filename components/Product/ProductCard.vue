<template>
  <NuxtLink :to="`/product/${product.id}`">
    <div
      class="absolute top-1 right-1 lg:top-2 lg:right-2 bg-primary group-hover:bg-primary-lighten transition-all w-fit py-1 px-2 rounded-full z-20 scale-90 lg:scale-100"
    >
      <p class="pointer-events-none block text-xs font-medium text-white">
        {{ product.category }}
      </p>
    </div>
    <div
      class="aspect-square flex items-center w-full overflow-hidden rounded-t-lg border"
    >
      <img
        :src="product.image"
        alt=""
        class="pointer-events-none object-contain object-center group-hover:opacity-75 scale-[.55] transition-all"
      />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for {{ product.title }}</span>
      </button>
    </div>
    <div
      class="bg-gray-50 p-3 rounded-b-lg mt-1 border group-hover:bg-gray-100"
    >
      <p
        class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900"
      >
        {{ product.title }}
      </p>
      <p class="pointer-events-none block text-sm font-medium text-gray-500">
        {{ product.price }}$
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  product: {
    required: true,
    type: Object,
  },
});
</script>
