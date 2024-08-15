<template>
  <div>
    <div class="flex items-center gap-x-8">
      <button class="hidden md:block text-2xl bg-primary hover:bg-blue-800 w-8 rounded-full" @click="prev">
        <span class="text-white">&larr;</span>
      </button>

      <div class="w-[80vw] overflow-hidden">
        <div class="flex items-center">
          <div
            v-for="number in 5"
            :key="'pic-' + number"
            class="w-[80vw] min-w-[80vw] max-w-[80vw]"
            :style="{ transform: `translateX(${-80 * (currentSlide - 1)}vw)` }"
          >
            <img
              :src="`https://picsum.photos/id/${number}/1024/300`"
              :alt="'Slider Pic ' + number"
              class="h-[300px] w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <button class="hidden md:block text-2xl bg-primary hover:bg-blue-800 w-8 rounded-full" @click="next">
        <span class="text-white">&rarr;</span>
      </button>
    </div>

    <div class="flex items-center justify-center gap-x-4 py-4">
      <button
        v-for="number in 5"
        :key="'slider2-dot-' + number"
        class="h-4 rounded-full"
        :class="{
          'bg-primary w-4 hover:bg-blue-800': currentSlide !== number,
          'bg-secondary w-12': currentSlide === number,
        }"
        @click="currentSlide = number"
      />
    </div>
  </div>
</template>

<script setup>
const interval = ref(null)
const currentSlide = ref(1);

function prev() {
  if (currentSlide.value > 1) {
    currentSlide.value--;
  } else {
    currentSlide.value = 5;
  }
}

function next() {
  if (currentSlide.value === 5) {
    currentSlide.value = 1;
  } else {
    currentSlide.value++;
  }
}

onMounted(() => {
  interval.value = setInterval(() => {
    next();
  }, 2000);
});
</script>
