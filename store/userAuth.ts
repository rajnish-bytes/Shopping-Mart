import { getAuth } from "@firebase/auth"
import { defineStore } from "pinia"
import { ref, computed } from "vue"



export const useUserAuthStore = defineStore('authantication', () => {

      // State
      const islogin = ref<string | boolean>()
      const userName = ref('')

      // getter
      const userlogin = computed(() => islogin.value)
      const loginUserName = computed(() => userName.value )

      /**
       * login funtion for LogIn && LogOut Data
       */
      function login() {
            islogin.value = localStorage.getItem('login') as string

            islogin.value = islogin.value === 'true' ? false : true

            localStorage.setItem('login', islogin.value ? 'true' : 'false')
      }

      function setUsername(username: string) {
            userName.value = username
            console.log(userName.value)
      }

      function setLoginData() {
            islogin.value = localStorage.getItem('login') as string

            islogin.value = islogin.value === 'true' ? true : false
      }

      return {
            userlogin,
            login,
            setUsername,
            setLoginData,
            loginUserName,
            userName
      }
})