<script setup>
import Card from '../components/container/Card.vue'
import Navbar from '../components/container/Navbar.vue';
import Input from '../components/base/Input.vue';
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
        :url="'https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
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
