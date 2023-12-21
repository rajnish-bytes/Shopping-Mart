<template>
      <div class="h-screen w-screen center flex-col flex-wrap">
            <!-- <img src="~/assets/img/shop.jpg" alt="home page img" > -->
            <!-- <h1 class="absolute text-9xl font-extrabold text-blue-600 top-1/2 right-1/4 -translate-y-1/2 boxsdo drop-shadow-btn" >Shopping</h1> -->

            <div class="h-screen w-1/2  center flex-col ">
                  <h1 class="text-5xl font-extrabold font-serif my-10 ">{{ $t('welcome') }} <span class="text-blue-500">{{
                                                name }}</span></h1>
                  <div>
                        <p class="text-xl font-mono m-10 ">{{ $t(`Our shopping page is here to help you to choose the right
                              one - you don't need to give an effort.`)}}</p>
                        <button @click="nevigate"
                              class="text-white bg-gradient-to-r from-blue-400  to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium ml-10">{{$t(`EXPLORE`)}}</button>
                  </div>
            </div>
            <div class="h-screen w-1/2  center">
                  <img src=" /img/home.jpg" alt="wildlife">
            </div>
      </div>
</template>

<script setup>
import { useUserAuthStore } from "~/store/userAuth";

const userDetail = useUserAuthStore()
const name = computed(()=> userDetail.loginUserName.toUpperCase() )

function nevigate(){
      return navigateTo('/posts')
}
</script>