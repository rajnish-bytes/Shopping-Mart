import { useFetchStore } from "~/store/fetchPost";

export default defineNuxtRouteMiddleware(async () => {
      const data = useFetchStore()

      if (!data.productsData.length) {
            data.getData()
      }
})