<template>
      <div class="h-screen w-screen center">

            <div class="h-screen w-screen center">
                  <img v-if="route.path == '/login'" src='~assets/img/login.jpg' alt="Welcome to login Page" >
                  <img v-else src='~assets/img/register.jpg' alt="Welcome to login Page" >
            </div>
            <div class="h-screen w-screen bg-gradient-to-b from-[#c2e6ff]  to-[#0844f4] center">
                  <slot />
            </div>
      </div>
</template>

<script setup>

const route = useRoute()

</script>