<template>
      <div class="max-w-4xl mx-auto px-10 py-4 bg-transparent rounded-lg ">
            <!-- top empty text -->
            <div>
                  <span
                        class="bg-blue-100 font-mono text-indigo-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-green-300">Cart
                        Empty State</span>
            </div>
            <!-- image and button -->
            <div class="flex flex-col items-center justify-center py-12">
                  <img src="/img/emptycart.png" alt="Empty Cart" class="h-64 w-64">
                  <p class="text-gray-600 text-lg font-semibold my-4">Your shopping cart is empty.</p>

                  <NuxtLink to="/posts">
                        <button
                              class="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
                              Let's go shopping!
                        </button>
                  </NuxtLink>
            </div>
      </div>
</template>