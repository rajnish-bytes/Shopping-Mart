<template>
      <div id="controls-carousel" class="relative w-full bg-gray-400 mt-14" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96 ">
                  <!-- Items -->
                  <div v-for="image, index in sliderImages" :key="index" class="block duration-700 ease-in-out"
                        data-carousel-item>
                        <img :src=image v-show="showImage == index"
                              class="object-cover h-full absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                              alt="...">
                  </div>

            </div>
            <!-- Slider controls -->
            <button type="button" @click="previousimage()"
                  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev>
                  <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                  </span>
            </button>
            <button type="button" @click="nextimage()"
                  class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next>
                  <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                  </span>
            </button>
      </div>
</template>

<script setup>
const sliderImages = [
      'https://cdn.vectorstock.com/i/1000x1000/55/43/summer-sale-horizontal-geometric-banner-vector-41375543.webp',
      'https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1703830546~exp=1703831146~hmac=2f749b39755e120673039e67eb9aa0571f46203f0ab79c2412404f2f8e62027f',
      'https://img.freepik.com/free-vector/realistic-christmas-sale-banner-with-red-page_1361-3133.jpg?w=1380&t=st=1703830519~exp=1703831119~hmac=271c0c30ee5c32596af6d9eded2475f4091d3ca02d0eb9f8c8efdee846eef033',
      'https://img.freepik.com/free-psd/summer-season-banner-template_23-2149170770.jpg?w=1480&t=st=1703825840~exp=1703826440~hmac=fd5ebe79708e60c77302610134e381c3ec51c708fbf7f8689b9768e4696c217a',
      'https://img.freepik.com/free-psd/happy-new-year-2024-text-effect_47987-17600.jpg?w=1380&t=st=1703826085~exp=1703826685~hmac=5bc51e9d83c257b0a6a15d56288092286b62cfccb8b789fafda620f1084c5e6e',
]

const showImage = ref(0)
setInterval(nextimage, 5000);

function nextimage() {
      if (showImage.value === 3) {
            return showImage.value = 0
      }
      return showImage.value += 1
}

function previousimage() {
      if (showImage.value < 0) {
            return showImage.value = 0
      }
      return showImage.value -= 1
}

</script>