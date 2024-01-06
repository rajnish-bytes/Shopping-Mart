// import worker from '~/assets/workers/sw.ts?worker&url'
import worker from '~/sw.ts?worker&url'

import { register } from "register-service-worker";

function registerServiceWorker() {
      console.log('register chal raha hai')
      // register('/_nuxt/sw.ts?type=module&worker_file', {
      register( worker, {
            registered(registration) {
                  console.log('sab thik hai')

                  document.dispatchEvent(new CustomEvent("swRegistered"));
            },
            updated() {
                  // Add a custom event and dispatch it.
                  // Used to display of a 'refresh' banner following a service worker update.
                  document.dispatchEvent(new CustomEvent("swUpdated"));
            },
            error(er) {
                  console.log('kuch thik nahi')

                  console.log("🚀 ~ file: init.client.ts:17 ~ error ~ er:", er)
                  // Add a custom event and dispatch it.
                  // Used to run task which are dependent upon service worker.
                  document.dispatchEvent(new CustomEvent("swFailed"));
            },
            registrationOptions: {
                  scope: "/",
            },
      });
}

export default defineNuxtPlugin((nuxtApp) => {

      nuxtApp.hooks.hookOnce("page:finish", () => {

            // if ('serviceWorker' in window.navigator) {
            //       window.navigator.serviceWorker.register(worker, { scope: '/' }).then((a) => {
            //             console.log("🚀 ~ file: init.ts:13 ~ navigator.serviceWorker.register ~ consol:", a)
            //       }).catch(er => {
            //             console.log("🚀 ~ file: init.ts:13 ~ navigator.serviceWorker.register ~ er:", er)

            //       })
            // }
            registerServiceWorker()
      })
})