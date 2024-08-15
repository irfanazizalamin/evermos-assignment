<template>
  <header class="bg-primary">
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer class="bg-primary">
    <Footer />
  </footer>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
</script>
