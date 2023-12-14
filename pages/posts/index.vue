<template>
      <div >
            <ul v-if="products.length" class="h-screen center flex-wrap">
                  <li v-for="product in products" :key="product.id" class="h-2/6 w-1/6 bg-white mx-24 my-20 inline-block rounded-t-3xl effect">
                        <NuxtLink :to="`/posts/${product.id}`">
                              
                                    <div class="h-full w-full center">
                                          <img class=" object-contain w-4/5 h-3/5"
                                                :src="product.image">
                                    </div>
                                    <div class="  bg-slate-600 px-3 py-5 h-28 rounded-b-3xl">
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
</template>

<script setup lang="ts">
import { useFetchStore } from '~/store/fetchPost';

definePageMeta({
      middleware: ["auth", "product-data-fetch"]
})

const fetchStore = useFetchStore()

/** computed property to get product data */
const products = computed(() => fetchStore.productsData)

</script>