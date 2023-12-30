import { defineStore } from "pinia";

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

export const useFetchStore = defineStore('postData', () => {
      const posts = ref<PostDetails[]>([])            // State

      const productsData = computed(() => posts.value)       // Getter

      /**
       *    getData function to fetch StoreApi
       */
      async function getData(): Promise<void> {

            const { data } = await useAsyncData('storeData', () => $fetch('https://fakestoreapi.com/products') )

            posts.value = data.value as unknown as PostDetails[]
      }

      return {
            productsData,
            getData
      }
})