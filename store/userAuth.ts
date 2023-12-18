import { defineStore } from "pinia"
import { ref , computed} from "vue"

export const useUserAuthStore = defineStore('authantication' , ()=>{

      // State
      const islogin = ref<string | boolean >()
      const userName = ref('')

      // getter
      const userlogin = computed(()=>  islogin.value )

      /**
       * login funtion for LogIn && LogOut Data
       */
      function login(){
            islogin.value  =  localStorage.getItem('login') as string

            islogin.value =  islogin.value === 'true' ? false : true

            localStorage.setItem('login', islogin.value ? 'true' : 'false' )
      }

      function setLoginData(){
            islogin.value  =  localStorage.getItem('login') as string

            islogin.value =  islogin.value === 'true' ? true : false
      }

      return { userlogin , login , setLoginData , userName }
})