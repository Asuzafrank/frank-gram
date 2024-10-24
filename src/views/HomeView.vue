<script setup>
import LightBox from '@/components/LightBox.vue';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-custom my-10 ">
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
    <div class="feeds">
      <div class="feed-ct bg-blue-200 rounded-md p-4">
        <div class="pr">
          <div class="name flex items-center justify-between">
            <div class="name flex items-center space-x-2">
              <img src="https://images.pexels.com/photos/5155322/pexels-photo-5155322.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" class="rounded-full w-16 h-16 object-cover">
              <div>
                <h4 class="font-bold text-sm">George lobko</h4>
                <p class="text-gray-400 text-xs font-semibold">2 hours ago</p>
              </div>
            </div>
            <i class="pi pi-ellipsis-v"></i>
          </div>
        </div>
        <div class="content mt-3">
          <p class="font-semibold text-sm">Hi everyone, today i was on the most beautiful mountain in the world, i also want to say hi to</p>
        </div>
        <div class="images my-4">
          <LightBox/>
        </div>
        <div class="reactions">
          <div class="flex space-x-3">
            <span class="text-sm text-gray-400"><i class="pi pi-eye"></i> 6335</span>
            <span class="text-sm text-gray-400"><i class="pi pi-heart"></i> Likes</span>
            <span class="text-sm text-gray-400"><i class="pi pi-comments"></i> Comment</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
