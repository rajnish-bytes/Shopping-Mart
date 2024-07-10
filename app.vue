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

