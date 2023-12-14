<template>
      <div>
            <img :src="productsData.image" class="w-40" />
            <h1>{{ productsData.title }}</h1>
            <h1>{{ productsData.description }}</h1>
            <h1>{{ productsData.price }}</h1>
      </div>
</template>

<script setup>
import { useFetchStore } from "~/store/fetchPost";

definePageMeta({
      middleware: "auth"
})

const route = useRoute()
const productStore = useFetchStore()

const productsData = toRaw(productStore.productsData)[route.params.id - 1]
</script>