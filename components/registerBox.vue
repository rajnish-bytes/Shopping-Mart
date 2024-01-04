<template>
      <div class="h-2/4 md:w-2/4 w-full mx-10 sm:mx-0">
            <!--  Heading -->

            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 class=" text-center text-3xl font-extrabold text-gray-900">
                        {{ $t(`Create new account`) }}
                  </h2>
                  <p class="mt-2 text-center text-sm text-gray-600 max-w">
                        {{ $t(`Or`) }}
                        <NuxtLink to="/login" class="font-medium text-blue-700 hover:text-blue-800">
                              {{ $t(`Login`) }}
                        </NuxtLink>
                  </p>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <!--  Lgin && register box -->
                  <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="space-y-6">
                              <!-- firstname && Lastname  -->
                              <div>
                                    <label for="Fname" class="block text-sm font-medium text-gray-700">
                                          {{ $t(`First Name`) }}
                                    </label>
                                    <div class="mt-1">
                                          <input id="Fname" type="text" autocomplete="email" required
                                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="First Name" v-model="newUser.Fname">
                                    </div>

                                    <label for="Lname" class="block text-sm font-medium text-gray-700 mt-6">
                                          {{ $t(`Last Name`) }}
                                    </label>
                                    <div class="mt-1">
                                          <input id="Lname" type="text" autocomplete="email" required
                                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Last Name" v-model="newUser.Lname">
                                    </div>
                              </div>

                              <!--  email address container -->
                              <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">
                                          {{ $t(`Email address`) }}
                                    </label>
                                    <div class="mt-1">
                                          <input id="email" name="email" type="email" autocomplete="email" required
                                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter your email address" v-model="newUser.email">
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
                                                placeholder="Enter your password" v-model="newUser.password">
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

                              </div>
                              <!-- sign up button container -->
                              <div>
                                    <button type="submit" @click.prevent="add()"
                                          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                          {{ $t(`Sign Up`) }}
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

const mediaImg = [
      "https://www.svgrepo.com/show/512120/facebook-176.svg",
      "https://www.svgrepo.com/show/513008/twitter-154.svg",
      "https://www.svgrepo.com/show/506498/google.svg",
]
const newUser = ref({
      email: '',
      password: '',
      Fname: '',
      Lname: '',
})

function add(){
      useAddEmailPass(newUser.value.email , newUser.value.password , newUser.value.Fname , newUser.value.Lname)
}
</script>