<template>
  <div
    class="mx-auto container py-12 md:flex md:items-center md:justify-between text-white"
  >
    <div class="flex justify-center space-x-6 md:order-2">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        target="_blank"
        class="font-medium hover:text-primary-lighten"
      >
        <div>{{ item.name }}</div>
      </a>
    </div>
    <div class="mt-8 md:order-1 md:mt-0">
      <p class="text-center text-sm leading-5">
        &copy; {{ dateNow }} Zafran Store. © All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup>
const dateNow = new Date().getFullYear();

const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/irfan-aziz-al-amin-16967b142/",
  },

  {
    name: "GitHub",
    href: "https://github.com/irfanazizalamin",
  },

  {
    name: "Portfolio",
    href: "https://irfanazizalamin.site",
  },
];
</script>
