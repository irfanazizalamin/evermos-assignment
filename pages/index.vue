<template>
  <NuxtLayout name="main-layout">
    <div class="h-screen relative isolate overflow-hidden py-32 px-10">
      <img
        src="https://images.unsplash.com/photo-1652410057727-f0424a870692?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div
        class="bg-white/50 backdrop-blur-lg mx-auto max-w-4xl h-full flex items-center px-10 rounded-lg shadow"
      >
        <div class="text-center w-full">
          <h1
            class="text-4xl font-semibold tracking-tight sm:text-6xl text-white"
          >
            <div class="font-bold text-white">"ONLY TODAY"</div>
            <p class="mt-4 text-2xl">you will get Special Price only in:</p>
          </h1>
          <ClientOnly>
            <div class="flex items-center justify-center">
              <div class="mt-5 text-white py-2 px-4 w-fit">
                <h1 class="text-4xl font-bold">{{ formattedTime }}</h1>
              </div>
            </div>
          </ClientOnly>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink
              to="/products"
              class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryLighter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >Lets Check Our Products</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Home",
  meta: [{ name: "Zafran Store", content: "Zafran Store" }],
});

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const formattedTime = ref("00:00:00");

const calculateTimeRemaining = () => {
  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const timeDiff = endOfDay - now;

  hours.value = Math.floor(timeDiff / (1000 * 60 * 60));
  minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);

  formattedTime.value = `${String(hours.value).padStart(2, "0")}:${String(
    minutes.value
  ).padStart(2, "0")}:${String(seconds.value).padStart(2, "0")}`;
};

let countdownInterval = null;

onMounted(() => {
  calculateTimeRemaining();
  countdownInterval = setInterval(calculateTimeRemaining, 1000);
});

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>

<style lang="scss" scoped>
</style>
