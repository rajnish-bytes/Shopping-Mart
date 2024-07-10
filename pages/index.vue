<template>
  <!-- home page -->
  <div class=" h-full w-full overflow-hidden ">
    <!-- top welcome banner -->
    <div class="w-full h-full px-10 flex justify-between  pb-20 ">
      <div class="pt-80 pl-20 space-y-7">
        <h1 class="text-7xl font-extrabold">𝐕𝐎𝐆𝐔𝐄 𝐄𝐌𝐏𝐈𝐑𝐄</h1>
        <div class="flex gap-3 text-lg">
          <p>Size: </p>
          <div class="font-bold flex gap-3">
            <p v-for="size in ['S', 'M', 'L', 'XL']" class="bg-gray-300 px-2">
              {{ size }}
            </p>
          </div>
        </div>
        <div class="flex gap-4 text-lg ">
          <p>Color: </p>
          <div class="font-bold flex gap-5">
            <p v-for="size in ['Red', 'Black', 'Pink', 'Gray']" class="border-b-2 text-gray-500 border-gray-800 px-2">
              {{ size }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-5 -mr-36  pt-80 ">
        <div v-for="n in 3" :class="[n === 1 ? 'scale-[3.1] mr-64' : 'bg-gray-100', ' w-72  rounded-lg ']">
          <ImageSlider />
        </div>
      </div>
    </div>
    <div class="-z-20 h-[100px] top-0 absolute opacity-65">
      <img src="/public/img/bg2.png" alt="bg" srcset="">
    </div>

    <!-- Catalog area -->
    <div class="pt-96 mx-40 py-20">
      <div class="text-xl px-4  border-l-4 border-purple-400">
        <h2>Catalog</h2>
      </div>
      <div class="grid grid-cols-6 grid-rows-2 gap-5">
        <div
          class="relative row-span-2 col-span-2 flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-full">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-full">
            <img src="/public/img/catalogHome.jpg" alt="card-image" class="object-cover w-full h-full" />
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button">
              Add to Cart
            </button>
          </div>
        </div>
        <div v-for="pro in catalog"
          class="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-60 ">
          <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-60">
            <img :src="`/public/img/${pro.img}`" alt="card-image"
              class="object-cover w-full h-full hover:scale-110 transition-all" />
          </div>
          <div class=" pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button">
              {{ pro.name }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-60 bg-purple-300 shadow-lg py-10">
      BANNER
    </div>
    <div v-for="n in 2" class="px-40 grid grid-cols-4">
      <div v-for="pro in catalog"
        class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
        <a class="relative flex h-60 overflow-hidden" href="#">
          <img class="absolute top-0 right-0 h-full w-full object-contain" :src="`_nuxt/public/img/${pro.img}`"
            alt="product image" />
          <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <button
              class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </a>
        <div class="mt-4 px-5 pb-5">
          <a href="#">
            <h5 class="text-xl tracking-tight text-slate-900">Lululemon Comfort Tee - White</h5>
          </a>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">$79</span>
              <span class="text-sm text-slate-900 line-through">$99</span>
            </p>
          </div>
          <button
            class="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

const catalog = ref([
  {
    img: "polo.webp",
    name: "POLO"
  },
  {
    img: "fullSleeves.jpg",
    name: "Full Sleeves"
  },
  {
    img: "planTshirt.webp",
    name: "Regular Fit"
  },
  {
    img: "hoodie.webp",
    name: "Regular Fit"
  },
  {
    img: "oversize.jpg",
    name: "Oversize"
  },
  {
    img: "catalogHome.jpg",
    name: "Regular Fit"
  },
  {
    img: "planTshirt.webp",
    name: "Regular Fit"
  },
  {
    img: "hoodie.webp",
    name: "Regular Fit"
  },
])

</script>