interface PostDetails {
      category: string
      description: string
      id: number
      image: string
      price: number
      rating: number
      title: string
      quantity: number 
      stock: number
      brand: string
      thumbnail : string
      discountPercentage : number
}

export const useCartStore = defineStore( 'Cartproduct' , ()=>{
      // State
      const cartList = ref<PostDetails[]>([])

      // getter
      const cartItems = computed(()=> cartList.value )
      const totalPrice = computed(()=> cartList.value.reduce((acc, value) => acc += value.price * value.quantity , 0))

      // action 
      const addCartItem = (item: PostDetails , qnt?: number)=>{
            if(cartList.value.includes(item)){
                  return alert("already")
            }
            item.quantity = qnt as number
            cartList.value.push(item)
      }
      const removeCartItem =(index: number)=>{
            cartList.value.splice(index, 1)
      }

      const addQnt = (index:number)=>{
            cartItems.value[index].quantity += 1
      }
      const subQnt = (index:number)=>{
            if(cartItems.value[index].quantity !== 1){
                  cartItems.value[index].quantity -= 1
            }
      }

      return {
            cartItems,
            addCartItem,
            totalPrice,
            removeCartItem,
            addQnt,
            subQnt
      }
})