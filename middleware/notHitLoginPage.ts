import { useUserAuthStore } from "~/store/userAuth";

export default defineNuxtRouteMiddleware((to,from) => {
      const login = useUserAuthStore()
      const localePath = useLocalePath()
      if (login.userlogin) {
            console.log('routes')
            if (to.path === localePath('login')) {
                  return navigateTo(localePath('index'))
            }
      }
})