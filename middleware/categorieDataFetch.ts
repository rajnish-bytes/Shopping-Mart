import { useCategorieStore } from "~/store/categorieStore";

export default defineNuxtRouteMiddleware(async () => {


      const data = useCategorieStore()

      data.getData()
})