<template>
    <NuxtPwaManifest />
    <NuxtLayout>

        <NuxtPage />

    </NuxtLayout>
</template>


<script setup>
import { getAuth } from "@firebase/auth";
import { useUserAuthStore } from "~/store/userAuth";


onMounted(() => {
    const Loginuser = useUserAuthStore()
    Loginuser.setLoginData()
    const route = useRoute()

    if (Loginuser.userlogin) {
        if (route.path === '/login') {
            return navigateTo('/')
        }
    } else {
        if (route.path === '/posts') {
            return navigateTo('/login')
        }
        else if (route.path === '/posts/') {
            return navigateTo('/login')
        }
    }

    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
        if (user) {
            Loginuser.setUsername(user.displayName)
        } else {
            Loginuser.setUsername('')
        }
    })



})

</script>

<style>
/* .router-link-active {
    font-weight: 400;
    color: rgb(69, 162, 255);
    border-bottom: solid 2px;
} */
</style>
