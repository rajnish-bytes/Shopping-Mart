<template>

      <div class="min-h-screen w-screen flex flex-col-reverse md:center md:flex-row">
            <div class="min-h-screen w-screen center hidden sm:flex">
                  <img v-if="route.path === '/login'"
                        src="/img/login.jpg" 
                        alt="Welcome to the login Page"
                        class="w-full h-full object-cover " />
                  <img v-else 
                        src="/img/register.jpg" 
                        alt="Welcome to the login Page" 
                        class="w-full h-full object-cover" />
            </div>
            <div class="min-h-screen w-screen bg-gradient-to-b from-[#c2e6ff] to-[#0844f4] center">
                  <slot />
            </div>
      </div>
</template>

<script setup>

const route = useRoute()

</script>