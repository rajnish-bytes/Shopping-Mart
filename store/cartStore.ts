interface PostDetails {
      category: string
      description: string
      id: number
      image: string
      price: number
      rating: object
      title: string
}

export const useCartStore = defineStore( 'Cartproduct' , ()=>{
      // State
      const cartList = ref<PostDetails[]>([])

      // getter
      const cartItems = computed(()=> cartList.value )
      const totalPrice = computed(()=> cartList.value.reduce((acc, value) => acc += value.price, 0))

      // action 
      const addCartItem = (item: PostDetails)=>{
            if(cartList.value.includes(item)){
                  return alert("already")
            }
            cartList.value.push(item)
      }
      const removeCartItem =(index: number)=>{
            cartList.value.splice(index, 1)
        }

      return {
            cartItems,
            addCartItem,
            totalPrice,
            removeCartItem,
            
      }
})