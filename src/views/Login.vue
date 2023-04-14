<script setup>
import Input from '../components/base/Input.vue'
import Button from '../components/base/Button.vue';
</script>
<template>
    <div class="login">
        <form class="login__container" action="">
            <div class="login__container--header">
                <svg class="icon"></svg>
                <h1>Welcome to Agora</h1>
            </div>
            <div class="login__container--body">
                <Input :title="'Email'" :placeholder="'example@domain.com'"/>
                <Input :title="'Password'" :placeholder="'********'"/>
                <Button class="bg-red-200 hover:bg-red-300">Confirmar</Button>
            </div>
            <div class="login__container--footer">
                <h2>❮❯ roremDev</h2>
            </div>
            
        </form>
    </div>
</template>