<script setup>
import { reactive } from 'vue';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from 'vue-toastification';

const toast = useToast()

const form = reactive({
    email:'',
    password:''
})

const signUp = async() => {
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, form.email, form.password)
        const user = userCredentials.user
        toast.success("user logged in successfully")
    }catch(error){
        const errorMessage = error.message;
        toast.error(errorMessage)
    }
    
}
</script>
<template>
    <div class="top-div bg-gray-800">
        <div class="container flex items-center justify-center min-h-screen">
        <div class="register bg-white rounded-lg shadow-lg p-3 max-w-lg mx-auto">
            <div class="flex items-center space-x-2">
                <img src="../assets/logo.png" alt="logo" class="w-9 object-cover">
                <span class="text-blue-500 font-bold">Frank-Gram</span>
            </div>
           
            <h1 class="text-center font-bold text-3xl">
                Login
            </h1>
            <form @submit.prevent="signUp">
            <div class="mb-3">
                <label for="email" class="text-sm block font-semibold">Email</label>
                <input data-cy="email" type="email" v-model="form.email" name="email" id="email" placeholder="Email" required class="rounded-md p-2 w-full">
            </div>
            <div class="mb-3">
                <label for="Password" class="text-sm block font-semibold">Password</label>
                <input data-cy="password" type="password" v-model="form.password" name="Password" id="Password" placeholder="Password" required class="rounded-md p-2 w-full">
            </div>
            <div class="mb-3 flex items-center justify-between">
                <div class="space-x-2">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <a href="#" class="text-blue-500 text-sm">Forgot password?</a>
            </div>
            <button type="submit" class="p-2 bg-blue-400 rounded-md w-full">Sign In</button>
            </form>
            <h6 class="my-4">Don't have an account <router-link to="/register">Sign Up</router-link></h6>

        </div>
    </div>
    </div>
    
</template>
<style scoped>
.register {
    min-width: 400px; /* Set a minimum width */
    min-height: 300px; /* Set a minimum height */
}
.top-div{
    background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.685), rgba(10, 1, 1, 0)),
     url('https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=600');
    background-size: cover;
    background-position: center; /* Center the image */
    min-height: 100vh; /* Full viewport height */
}
</style>