<script setup>
import Card from './components/container/Card.vue'
import Navbar from './components/container/Navbar.vue';
import Input from './components/base/Input.vue';
</script>

<template>
  <div class="home">
    <Navbar/>
    <section class="home__search">
      <Input placeholder="Search"/>
    </section>
    <div class="home__list">
      <Card
        v-for="item in 6"
        :url="'https://pixabay.com/get/g5bcd021b53ebcbf4b9ea98553836aec206cb0731b7daf0513e8e738300b7832a3bb5beb322571133546c84a006f8db6df47df486b63a9fa3538f3026e68059f9b752e40e9b0ff29ef88384061fc1001b_1280.jpg'"
        :title="'Card Title'"
        :price="12.35"
        :description="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
        :icon="'icon_inbox_stack'"
        :pieces="6"
        />
    </div>
  </div>
  
</template>

<style>
</style>
