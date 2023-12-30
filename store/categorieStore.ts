interface categorieData {

      id: number
      name: string
      image: string
      creationAt: string
      updatedAt: string

}

export const useCategorieStore = defineStore('Categorieproduct', () => {
      // State
      const categorieList = ref<categorieData[]>([])

      // getter
      const categorieItems = computed(() => categorieList.value)
      // const totalPrice = computed(()=> cartList.value.reduce((acc, value) => acc += value.price * value.quantity , 0))

      // action 
      async function getData(): Promise<void> {

            const { data } = await useAsyncData('categorieData', () => $fetch('https://api.escuelajs.co/api/v1/categories'))

            categorieList.value = data.value as unknown as categorieData[]
      
      }

      return {
            categorieItems ,
            getData,
      }
})