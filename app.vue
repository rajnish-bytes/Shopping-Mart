<template>

<!-- NavBar -->
        <nav class="fixed z-10 h-16 w-screen px-20 flex place-content-between items-center bg-gray-100/90 backdrop-filter backdrop-blur-sm">
<!-- SignUp && Login Button -->
            <div class="ml-32">
                <NuxtLink to="/login">
                    <button @click="loginpage" class="text-white bg-gradient-to-r from-blue-400  to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium  ">
                        {{ login.userlogin ? "Log out" : "Login" }}
                    </button>
                </NuxtLink>
            </div>
<!-- Navigation List -->
            <ul class="space-x-10 ">
                <li class="inline hover:border-blue-400 hover:border-b-2 ">
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="inline hover:border-blue-400 hover:border-b-2 ">
                    <NuxtLink to="/posts">Posts</NuxtLink>
                </li>
                <li class="inline hover:border-blue-400 hover:border-b-2">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
<!-- Language Selector --> 
            <div class="mr-32">
                <select name="language">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>

        </nav>

<!-- Pages Load Box -->
        <div class=" h-screen ">
            <NuxtLayout>

                <NuxtPage />
                
            </NuxtLayout>
        </div>

</template>


<script setup>
import { useUserAuthStore } from "~/store/userAuth";

const login = useUserAuthStore()

function loginpage(){
    login.login()
    return navigateTo("/login")
}

</script>

<style>

.router-link-active {
    font-weight: 400;
    color: rgb(69, 162, 255);
    border-bottom: solid 2px;
}
</style>
