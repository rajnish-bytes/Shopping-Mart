import { useUserAuthStore } from "~/store/userAuth";

export default defineNuxtRouteMiddleware((to,from) => {
      const login = useUserAuthStore()

      if( login.userlogin === false ){
            return navigateTo("/en/login")
      }
           
})