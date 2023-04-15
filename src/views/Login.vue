<script setup>
import Input from '../components/base/Input.vue'
import Button from '../components/base/Button.vue';
import { ref } from 'vue'
import axios from 'axios'
const email = ref('')
const password = ref('')

const loginHandler = async() => {
    axios.post('https://reqres.in/api/login',{
        email: email.value,
        password: password.value
    }).then((resolve) => {
        console.log(resolve)
    }).catch((reject) => {
        console.log(reject)
    })
    
}
</script>
<template>
    <div class="login">
        <div class="login__container">
            <section class="login__container--header">
                <svg class="icon"></svg>
                <h1>Welcome to Agora</h1>
            </section>
            <section class="login__container--body">
                <Input :type="'email'" v-model="email" :title="'Email'" :placeholder="'example@domain.com'"/>
                <Input :type="'password'" v-model="password" :title="'Password'" :placeholder="'********'"/>
                <Button @click="loginHandler" class="bg-red-200 hover:bg-red-300">Confirmar</Button>
            </section>
            <section class="login__container--footer">
                <h2>❮❯ roremDev</h2>
            </section>
        </div>
    </div>
</template>