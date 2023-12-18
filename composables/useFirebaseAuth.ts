// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBNmAIfKfjagUqPJ-ZAgrL-bL_3YS6QZlU",
      authDomain: "shopping-mart-a8df0.firebaseapp.com",
      projectId: "shopping-mart-a8df0",
      storageBucket: "shopping-mart-a8df0.appspot.com",
      messagingSenderId: "450796256093",
      appId: "1:450796256093:web:9162ccc03c50104c6786b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

// Import the functions you need for UserAuth
import { useUserAuthStore } from "~/store/userAuth";


/** New Registration In Shopping Mart */
export const useAddEmailPass = (email: string, password: string, Fname:string, Lname:string) => {
      createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                  await updateProfile(userCredential.user, { displayName: Fname +" "+ Lname })
                  alert(`${userCredential.user.displayName} Register successfull `)
                  await navigateTo('/login')

            })
            .catch((e) => {
                  alert(" Registration Failed !!! ")
            })
}
//      END     //


/** Login Exesting User in Shopping Mart */
export const useLoginWithEmailPass = (email: string, password: string) => {
      const userAuth = useUserAuthStore()
      signInWithEmailAndPassword(auth, email, password)
            .then(async(currentUser) => {
                  await navigateTo("/")
                  alert( `${ currentUser.user.displayName } Login successfull !!` )
                  userAuth.userName = currentUser.user.displayName as string
                  userAuth.login()
            })
            .catch((e) => {
                  alert(" Invalid Detailes !!! ")
            })
}
//    END   //

/**
 * Logout User
 */
export const useLogoutUser = ()=>{
      const { login } = useUserAuthStore()
      signOut(auth)
      .then(()=>{
           login()
           alert('Sign-Out successful. ') 
      })
      .catch((e)=>{
            console.log("Sign-Out failed. ")
      })
}
//    END   //