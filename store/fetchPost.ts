import { defineStore } from "pinia";

interface PostDetails {
      category: string
      description: string
      id: number
      image: string[]
      price: number
      rating: number
      title: string
      stock: number
      brand: string
      thumbnail : string
      discountPercentage : number
}

export const useFetchStore = defineStore('postData', () => {
      const posts = ref<PostDetails[]>([])            // State
      const FetchLimit = ref<number>(0)
      const productsData = computed(() => posts.value)     // Getter

      /**
       *    getData function to fetch StoreApi
       */
      async function getData(): Promise<void> {
            const { data }  = await useAsyncData('storeData', () => $fetch(`https://dummyjson.com/products?skip=${FetchLimit.value}&limit=${24}`) ) 
            posts.value.push( ...data.value.products )
      }
      async function setFetchLimit(){
            FetchLimit.value += 24
            await getData()
      }
      return {
            productsData,
            getData,
            setFetchLimit
      }
})