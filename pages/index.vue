<template>
      <!-- home page -->
      <div class="md:px-20 h-full w-full ">
            <!-- top welcome banner -->
            <div class="relative h-64 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg ">
                  <img src="/img/homePagebanner.jpg" alt="" class="object-contain h-64 w-full">
                  <div class="px-4 pt-8 pb-10">
                        <!-- user image -->
                        <div class="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
                              <span
                                    class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                              <img class="mx-auto h-auto w-full rounded-full" src="/img/placeholder.png" alt="" />
                        </div>
                  </div>
            </div>
            <!-- dicription area -->
            <div
                  class="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
                  <div class="max-w-lg">
                        <h1 class="text-3xl font-bold text-gray-800">{{$t('welcome')}} <span class="text-purple-500 underline">{{ name }}</span></h1>
                        <p class="mt-2 text-gray-600">{{ $t('Our shopping page is here to help you to choose the right one') }}</p>
                  </div>

            </div>
            <!-- Items Categorie -->
            <main
                  class="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 lg:px-20">
                  <!-- Items -->
                  <article v-for="item, i in categorieItems" :key="i" class="relative">
                        <div class="aspect-square overflow-hidden">
                              <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                    :src="item.image" alt="" />
                        </div>
                        <div class="absolute top-0 m-1 rounded-full bg-white">
                              <p
                                    class="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                                    Sale</p>
                        </div>
                        <div class="mt-4 flex items-start justify-between">
                              <div class="">
                                    <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                                          <a href="#" title="" class="">
                                                {{ item.name }}
                                                <span class="absolute" aria-hidden="true"></span>
                                          </a>
                                    </h3>
                              </div>

                        </div>
                  </article>

            </main>
      </div>
</template>

<script setup>
import { useUserAuthStore } from "~/store/userAuth";
import { useCategorieStore } from "~/store/categorieStore";

definePageMeta({
      middleware: 'categorie-data-fetch'
})
// get currentuse name from DB
const userDetail = useUserAuthStore()
const name = computed(() => userDetail.loginUserName.toUpperCase())

// get all categorie of product
const categorie = useCategorieStore()
const categorieItems = computed(()=> categorie.categorieItems)


</script>