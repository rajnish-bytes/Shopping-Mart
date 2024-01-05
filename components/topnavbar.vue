<template>
            <!-- top NavBar -->
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                  <div class="flex items-center justify-between">
                        <!-- Left top Logo  -->
                        <div class="flex items-center justify-start rtl:justify-end">
                              <!-- Website Logo -->
                              <NuxtLink to="/" class="flex ms-2 md:me-24">
                                    <img src="/icons/icons8-apple-logo-64.png" class="h-8 me-3"
                                          alt="FlowBite Logo" />
                                    <span
                                          class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Shopping Mart</span>
                              </NuxtLink>
                        </div>
                        <!-- User Profile Image top-right  -->
                        <div class="flex items-center">
                              <!-- Language Selector -->
        <div class="md:mr-32 md:block hidden">
            <select name="language" v-model="locale">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
            </select>
        </div>
                              <div class="flex items-center ms-3">
                                    <div>
                                          <button type="button"
                                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                                <span class="sr-only">Open user menu</span>
                                                <img class="w-8 h-8 rounded-full"
                                                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                      alt="user photo">
                                          </button>
                                    </div>
                                    <!-- user Profile detailes -->
                                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                                          id="dropdown-user">
                                          <div class="px-4 py-3" role="none">
                                                <p class="text-sm text-gray-900 dark:text-white" role="none">
                                                      Neil Sims
                                                </p>
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                                      role="none">
                                                      neil.sims@flowbite.com
                                                </p>
                                          </div>
                                          <ul class="py-1" role="none">
                                                <li>
                                                      <a href="#"
                                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                            role="menuitem">Dashboard</a>
                                                </li>
                                                <li>
                                                      <a href="#"
                                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                            role="menuitem">Settings</a>
                                                </li>
                                                <li>
                                                      <a href="#"
                                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                            role="menuitem">Earnings</a>
                                                </li>
                                                <li>
                                                      <a href="#"
                                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                            role="menuitem">Sign out</a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </nav>
</template>

<script setup>
const { locale } = useI18n()

</script>