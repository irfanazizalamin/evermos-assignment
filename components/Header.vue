<template>
  <nav
    class="mx-auto flex container items-center justify-between py-6 px-4 lg:px-0 text-white"
    aria-label="Main Navigation"
  >
    <NuxtLink to="/" class="-m-1.5 p-1.5">
      <h1 class="text-2xl font-medium text-gray-100">Zafran Store</h1>
    </NuxtLink>
    <div class="flex items-center gap-5">
      <ShoppingCartIcon
        class="lg:hidden w-7 h-7 hover:bg-white hover:text-primary cursor-pointer rounded-full p-1 transition-all"
      />
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Toggle main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div class="hidden lg:flex lg:gap-x-12 items-center">
      <NuxtLink
        v-for="link in navigation"
        :key="link.name"
        :to="link.href"
        class="text-sm font-bold leading-6 text-primary hover:text-secondary bg-white hover:bg-primary-lighten px-2.5 py-1 rounded shadow transition-all"
      >
        {{ link.name }}
      </NuxtLink>
      <div class="relative">
        <span
          class="text-primary text-sm font-semibold bg-white rounded-full absolute flex px-1.5 -top-3 -left-3"
        >
          0
        </span>
        <ShoppingCartIcon
          class="w-8 h-8 hover:bg-primary-lighten hover:text-secondary cursor-pointer rounded-full p-1 transition-all"
        />
      </div>
    </div>
  </nav>
  <ClientOnly>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="isMobileMenuShown = false"
      :open="isMobileMenuShown"
    >
      <div class="fixed inset-0 z-[1000]" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <h1 class="text-2xl font-medium">Simple Store</h1>
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="isMobileMenuShown = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="link in navigation"
                :key="link.name"
                :href="link.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ link.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [{ name: "Products", href: "/products" }];

const isMobileMenuShown = ref(false);
</script>
