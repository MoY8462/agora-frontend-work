<script setup>
import Button from '../base/Button.vue'

defineProps({
    url: String,
    title: String,
    price: Number,
    description: String,
    icon: String,
    pieces: Number
})
</script>

<template>
    <div class="card">
        <img class="card__img" :src="url" alt="">
        <div class="card__container shadow-md">
            <section class="card__container--headline">
                <h3 class="headline--title">{{ title }}</h3>
                <span class="headline--price">$ {{ price }}</span>
            </section>
            <p class="card__container--description">{{ description }}</p>
            <section class="card__container--footer">
                <svg class="footer--icon icon" :class="icon"></svg>
                <span class="footer--text">Quedan {{ pieces }} piezas.</span>
                <Button 
                class="bg-red-200 hover:bg-red-300"
                :icon="'icon_shopping_bag'"
                />
            </section>
        </div>
    </div>
</template>