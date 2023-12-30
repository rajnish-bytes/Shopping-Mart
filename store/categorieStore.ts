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
      // const addCartItem = (item: PostDetails , qnt?: number)=>{
      //       if(cartList.value.includes(item)){
      //             return alert("already")
      //       }
      //       item.quantity = qnt as number
      //       cartList.value.push(item)
      // }
      // const removeCartItem =(index: number)=>{
      //       cartList.value.splice(index, 1)
      // }

      // const addQnt = (index:number)=>{
      //       cartItems.value[index].quantity += 1
      // }
      // const subQnt = (index:number)=>{
      //       if(cartItems.value[index].quantity !== 1){
      //             cartItems.value[index].quantity -= 1
      //       }
      // }

      return {
            categorieItems ,
            getData,
      }
})