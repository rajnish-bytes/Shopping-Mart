<template>
    <NuxtPwaManifest />
    <!-- NavBar -->
    <nav
        class="fixed z-10 h-16 w-full md:px-20 flex place-content-between items-center bg-gray-100/90 backdrop-filter backdrop-blur-sm">
        <!-- SignUp && Login Button -->
        <div class="md:ml-32">
            <NuxtLink to="/login">
                <button
                    class="text-white bg-gradient-to-r from-blue-400  to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium  "
                    v-if="!Loginuser.userlogin">
                    {{ $t(`Login`) }}
                </button>
                <button @click="logoutUser"
                    class="text-white bg-gradient-to-r from-red-400  to-red-700 focus:ring-4 focus:ring-red-300 font-medium  "
                    v-else>
                    {{ $t(`LogOut`) }}
                </button>
            </NuxtLink>

        </div>
        <!-- Navigation List -->
        <ul class="hidden md:block space-x-10 ">
            <li class="inline hover:border-blue-400 hover:border-b-2 ">
                <NuxtLink to="/">{{ $t('Home') }}</NuxtLink>
            </li>
            <li class="inline hover:border-blue-400 hover:border-b-2 ">
                <NuxtLink to="/posts">{{ $t('Posts') }}</NuxtLink>
            </li>
            <li v-if="Loginuser.userlogin" class="inline hover:border-blue-400 hover:border-b-2">
                <NuxtLink to="/cart">Cart</NuxtLink>
            </li>
            <li class="inline hover:border-blue-400 hover:border-b-2">
                <NuxtLink to="/about">{{ $t('About') }}</NuxtLink>
            </li>
        </ul>

        <div class="md:hidden">
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="text-black focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-16 left-0 right-0 bg-blue-500 p-4"
      >
        <!-- <a class="text-white block mb-2" href="#">Home</a> -->
        <NuxtLink to="/" class="text-white block mb-2" >{{ $t('Home') }}</NuxtLink>
        <NuxtLink to="/posts" class="text-white block mb-2" >{{ $t('Posts') }}</NuxtLink>
        <NuxtLink to="/cart" class="text-white block mb-2" >Cart</NuxtLink>
        <NuxtLink to="/about" class="text-white block mb-2" >{{ $t('About') }}</NuxtLink>
       
      </div>
        <!-- Language Selector -->
        <div class="md:mr-32 md:block hidden">
            <select name="language" v-model="locale">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
            </select>
        </div>

    </nav>

    <!-- Pages Load Box -->
    <div class=" h-full ">

            <NuxtPage />

            <Footer v-if="$route.path !== '/login'" />
    </div>
</template>


<script setup>
import { getAuth } from "@firebase/auth";
import { useUserAuthStore } from "~/store/userAuth";

const isMobileMenuOpen = ref(false);
const Loginuser = useUserAuthStore()
const { locale } = useI18n()

function logoutUser() {
    useLogoutUser()
    return navigateTo("/login")
}

onMounted(() => {
    Loginuser.setLoginData()
    const route = useRoute()

    if (Loginuser.userlogin) {
        if (route.path === '/login') {
            return navigateTo('/')
        }
    }else{
        if (route.path === '/posts') {
            return navigateTo('/login')
        }
        else if(route.path === '/posts/'){
            return navigateTo('/login')
        }
        // else if(route.path === `/posts/${route.params.id}`){
        //     return navigateTo('/login')
        // }
    }

    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
        if(user){
            Loginuser.setUsername(user.displayName)
        }else{
            Loginuser.setUsername('')
        }
    })
})

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<style>
/* .router-link-active {
    font-weight: 400;
    color: rgb(69, 162, 255);
    border-bottom: solid 2px;
} */
</style>
