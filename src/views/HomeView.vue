<script setup>
</script>

<template>
  <div class="grid grid-cols-custom my-10 ">
    <div class="profile text-center">
      <div class="img flex justify-center items-center relative">
        <!-- First image with left offset -->
        <img src="https://images.pexels.com/photos/1174932/pexels-photo-1174932.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" class="rounded-full w-20 h-20 object-cover relative left-4 z-10">
        
        <!-- Second image (profile pic) -->
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profile-pic" class="rounded-full w-20 h-20 object-cover z-20">
      </div>
      
      <div class="dt mt-4">
        <h3 class="font-bold text-sm">Frankline Asuza</h3>
        <p class="text-gray-400">asuza@gmail.com</p>
      </div>
      <div class="links mt-4 space-y-2">
        <router-link class="block ">News Feed</router-link>
        <router-link class="block ">Messages</router-link>
        <router-link class="block ">Forums</router-link>
        <router-link class="block ">Friends</router-link>
        <router-link class="block ">Settings</router-link>
      </div>
    </div>
  </div>
</template>
