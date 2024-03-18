<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
const store = useAuthStore()
</script>

<template>
    <div>
        <form @submit.prevent="store.handleLogin">
            <VTextField v-model="store.loginData.email" label="E-main" type="email" required></VTextField>
            <VTextField v-model="store.loginData.password" label="Password" type="password" required></VTextField>
            <div class="pb-4">
                <span class="me-2">Dont have an Accout ?</span>
                <NuxtLink to="/signup" class="text-decoration-underlined">Sign up</NuxtLink>
            </div>
            <VBtn class="me-4" type="submit">
                submit
            </VBtn>
            <VBtn @click="" variant="outlined">
                clear
            </VBtn>
        </form>
    </div>
</template>

<style scoped>
a{
    color: #F0ECE5;
}
</style>