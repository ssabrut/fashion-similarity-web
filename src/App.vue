<script setup>
import Gallery from './components/Gallery.vue';
import Navbar from './components/Navbar.vue'
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 absolute left-0 top-0 w-full">
    <Navbar />
  </nav>

  <div class="mb-8">
    <p class="text-center text-xl font-bold">The distance is 10.298, it means the images are <span
        class="font-bold">similar</span>.</p>
  </div>
  <div class="flex items-center justify-between mb-8">
    <Gallery />
    <Gallery />
  </div>
  <div class="text-center">
    <button class="bg-gray-800 text-white p-4 px-8 rounded-lg font-bold" type="button">Randomize Images</button>
  </div>
</template>