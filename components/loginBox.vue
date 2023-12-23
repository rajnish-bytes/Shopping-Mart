<template>
      <div class="min-h-full w-full">
            <!--  Heading -->

            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {{ $t(`Sign in to your account`) }}
                  </h2>
                  <p class="mt-2 text-center text-sm text-gray-600 max-w">
                        {{ $t(`Or`) }}
                        <NuxtLink to="/register" class="font-medium text-blue-600 hover:text-blue-500">
                              {{ $t(`create an account`) }}
                        </NuxtLink>
                  </p>
            </div>

            <div class="mt-8 mx-auto max-w-md">
                  <!--  Lgin && register box -->
                  <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10 mx-9 sm:mx-0">
                        <form class="space-y-6">
                              <!--  email address container -->
                              <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">
                                          {{ $t(`Email address`) }}
                                    </label>
                                    <div class="mt-1">
                                          <input id="email" name="email" type="email" autocomplete="email" required
                                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter your email address" v-model="email">
                                    </div>
                              </div>
                              <!--  Password Container -->
                              <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">
                                          {{ $t(`Password`) }}
                                    </label>
                                    <div class="mt-1">
                                          <input id="password" name="password" type="password" autocomplete="current-password"
                                                required
                                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter your password" v-model="password">
                                    </div>
                              </div>
                              <!-- remember me && forgot password container -->
                              <div class="center justify-between">
                                    <div class="flex items-center">
                                          <input id="remember_me" name="remember_me" type="checkbox"
                                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                                {{ $t(`Remember me`) }}
                                          </label>
                                    </div>

                                    <div class="text-sm">
                                          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                                                {{ $t(`Forgot your password?`) }}
                                          </a>
                                    </div>
                              </div>
                              <!-- sign in button container -->
                              <div>
                                    <button type="submit" @click.prevent="Loginuser"
                                          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                          {{ $t(`Sign in`) }}
                                    </button>
                              </div>
                        </form>

                        <br>
                        <hr>
                        <!-- media Images logo -->
                        <div class="mt-6 grid grid-cols-3 gap-3">

                              <div v-for="svg in mediaImg" key="svg"
                                    class="w-full center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <img class="h-5 w-5" :src="svg" alt="">
                              </div>

                        </div>
                  </div>
            </div>
      </div>
</template>

<script setup>
import { useUserAuthStore } from "~/store/userAuth";

const { login } = useUserAuthStore()
const email = ref()
const password = ref()

const mediaImg = [
      "https://www.svgrepo.com/show/512120/facebook-176.svg",
      "https://www.svgrepo.com/show/513008/twitter-154.svg",
      "https://www.svgrepo.com/show/506498/google.svg",
]

function Loginuser(){
       useLoginWithEmailPass(email.value , password.value)
}
</script>