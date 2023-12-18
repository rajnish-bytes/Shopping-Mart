<template>
      <!-- items lists -->
      <div>
            <ul v-if="products.length" class="h-screen center flex-wrap">
                  <li v-for="product in products" :key="product.id"
                        class="h-2/6 w-1/6 bg-white mx-24 my-20 inline-block rounded-t-3xl effect">
                        <NuxtLink :to="`/posts/${product.id}`">

                              <div class="h-full w-full center">
                                    <img class=" object-contain w-4/5 h-3/5" :src="product.image">
                              </div>
                              <div class="  bg-[#35ade5c9] px-3 py-5 h-28 rounded-b-3xl">
                                    <p class="font-extrabold text-white">{{ product.title }}</p>
                                    <p>{{ product.price }}</p>
                              </div>
                        </NuxtLink>

                  </li>
            </ul>
            <div v-else>
                  Loading...
            </div>

      </div>
      <!-- END -->
      <hr class="mt-28">
      <!-- Pagination -->
      <div class="center h-1/5 -mt-14 justify-between mx-44 text-lg">

            <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                  <p @click="page -= 6" class=" ml-3 font-medium leading-none ">Previous</p>
            </div>
            <div class="sm:flex hidden">
                  <p
                        class=" font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                        1</p>
                  <p
                        class=" font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                        2</p>
                  <p
                        class=" font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                        3</p>
                  <p
                        class="font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
                        4</p>
            </div>

            <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                  <p @click="page += 6" class=" font-medium leading-none mr-3">Next</p>
            </div>
      </div>
      <!-- END -->
</template>

<script setup lang="ts">
import { useFetchStore } from '~/store/fetchPost';

definePageMeta({
      middleware: ["auth", "product-data-fetch"]
})

const fetchStore = useFetchStore()
const page = ref(0)


/** computed property to get product data */
const products = computed(() => fetchStore.productsData.slice(page.value, page.value + 6))
watch(page, () => {
      if (page.value > 20) page.value -= 6
      else if (page.value < 0) page.value += 6
})


</script>