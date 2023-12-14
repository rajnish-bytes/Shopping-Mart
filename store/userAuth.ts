import { defineStore } from "pinia"
import { ref , computed} from "vue"

export const useUserAuthStore = defineStore('authantication' , ()=>{

      // State
      const islogin = ref(false)

      // getter
      const userlogin = computed(()=> islogin.value)

      /**
       * login funtion for LogIn && LogOut Data
       */
      function login(){
            islogin.value = !islogin.value

            console.log(islogin.value)
      }

      return { userlogin , login }
})