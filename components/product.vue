<template>
<img class="absolute top-0 right-0 h-full w-full object-contain" :src="`_nuxt/assets/images/${imageIcon}`"
alt="product image" />
</template>

<script setup>
const props = defineProps({
  
  imageIcon: {
    type: String,
    default: () => "",
  },
  })
</script>