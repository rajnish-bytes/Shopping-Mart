<template>
      <ImageSlider />
      <div class="h-full w-full center flex-col md:center md:flex-row ">

            <div class="h-full md:w-1/2 w-full mt-16 center flex-col bg-gradient-to-b from-[#68bbf6] to-[#f8f9ff] md:bg-none">
                  <h1 class="text-5xl font-extrabold font-serif my-10 ">{{ $t('welcome') }} <span class="text-blue-500">{{
                        name }}</span></h1>
                  <div>
                        <p class="text-xl font-mono m-10 ">{{ $t(`Our shopping page is here to help you to choose the right one - you don't need to give an effort.`) }}</p>
                        <button @click="nevigate"
                              class="text-white bg-gradient-to-r from-blue-400  to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium ml-10 md:text-l text-xl btn ">{{ $t(`EXPLORE`) }}</button>
                  </div>
            </div>
            <div class="h-full md:w-1/2 w-full  center">
                  <img src=" /img/home.jpg" alt="wildlife">
            </div>
      </div>
</template>

<script setup>
import { useUserAuthStore } from "~/store/userAuth";

const userDetail = useUserAuthStore()
const name = computed(() => userDetail.loginUserName.toUpperCase())

function nevigate() {
      return navigateTo('/posts')
}
</script>