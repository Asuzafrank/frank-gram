<template>
    <div>
      <div class="image-gallery">
        <div
          v-for="(img, index) in displayedImages"
          :key="index"
          class="image-container"
          @click="showImage(index)"
        >
          <img :src="img.src || img" :alt="img.title || ''" />
          <div v-if="index === 1 && extraCount > 0" class="overlay">+{{ extraCount }}</div>
        </div>
      </div>
  
      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import VueEasyLightbox from 'vue-easy-lightbox';
  
  const visibleRef = ref(false);
  const indexRef = ref(0);
  const imgsRef = ref([
    { src: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Image 1' },
    { src: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Image 2' },
    { src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Image 3' },
   
  ]);
  
  const showImage = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
  };
  
  const onHide = () => {
    visibleRef.value = false;
  };
  
  // Calculate displayed images and extra count
  const displayedImages = imgsRef.value.slice(0, 2);
  const extraCount = imgsRef.value.length > 2 ? imgsRef.value.length - 2 : 0;
  </script>
  
  <style>
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    position: relative;
  }
  
  .image-container {
    cursor: pointer;
    position: relative;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.2s;
  }
  
  .image-container img:hover {
    transform: scale(1.05);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 24px;
  }
  </style>
  