<template>
      <div>
            <ul v-if="products.length" class="h-screen center flex-wrap">
                  <!-- product card -->
                  <li v-for="product in products" :key="product.id"
                        class="relative mt-32 mx-32 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md effect"
                        >
                              <!-- product image -->
                              <NuxtLink :to="`/posts/${product.id}`" class="center">
                                    <img class="h-60 rounded-t-lg object-contain"
                                          :src="product.image"
                                          alt="product image" />
                              </NuxtLink>
                              <span
                                    class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                              <!-- product detailes -->
                              <div class="mt-4 px-5 pb-5">
                                    <!-- product title -->
                                    <NuxtLink :to="`/posts/${product.id}`" class="h-2"> 
                                          <h5 class="text-xl font-semibold tracking-tight text-slate-900 overflow-hidden h-14">{{ product.title }}</h5>
                                    </NuxtLink>
                                    <!-- product rating and star -->
                                    <div class="mt-2.5 mb-5 flex items-center">
                                          <span
                                                class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{ product.rating.rate }}</span>
                                          <svg v-for="star in 5" aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                          </svg>
                                          
                                    </div>
                                    <!-- product price and add to card container -->
                                    <div class="flex items-center justify-between">
                                          <p>
                                                <span class="text-2xl font-bold text-slate-900">${{ product.price }}</span>
                                                <span class="text-sm text-slate-900 line-through">${{ (product.price * 2.4).toFixed(2) }}</span>
                                          </p>
                                          <button
                                                class="flex items-center rounded-md bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                @click="addInCartStore(product)" >
                                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none"
                                                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                      >
                                                      <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Add to cart
                                          </button>
                                    </div>
                              </div>
                        <!-- </div> -->


                  </li>
            </ul>
            <!-- product card loading state -->
            <div v-else>
                  Loading...
            </div>

      </div>
      <!-- END -->
      <hr class="mt-80">
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
import { useCartStore } from '~/store/cartStore';
import { useFetchStore } from '~/store/fetchPost';

definePageMeta({
      middleware: ["auth", "product-data-fetch"]
})
interface PostDetails {
      category: string
      description: string
      id: number
      image: string
      price: number
      rating: {
            rate: number
            count: number
      }
      title: string
      quantity: number
}

const fetchStore = useFetchStore()
const page = ref(0)
const { addCartItem } = useCartStore()

const addInCartStore = (product: PostDetails)=>{
      product.quantity = 1;
      addCartItem(product)
}

/** computed property to get product data */
const products = computed(() => fetchStore.productsData.slice(page.value, page.value + 6))
watch(page, () => {
      if (page.value > 20) page.value -= 6
      else if (page.value < 0) page.value += 6
})


</script>