<script setup lang="ts">
import { useAuthStore } from "~/store/useAuth";
const store = useAuthStore();
</script>

<template>
    <div>
        <form @submit.prevent="store.handleRegister">
            <VTextField v-model="store.registerData.name" :counter="10" required label="Name" ></VTextField>
            <VTextField v-model="store.registerData.email" required :counter="7" label="E-mail" type="email">
            </VTextField>
            <VTextField v-model="store.registerData.password" required label="Password" type="password"></VTextField>
            <VTextField v-model="store.registerData.password_confirmation" required label="Confirm Password"
                type="password">
            </VTextField>
            <div class="pb-4">
                <span class="me-2">Already have an Accout ?</span>
                <NuxtLink to="/login" class="text-decoration-underlined">Login</NuxtLink>
            </div>
            <VBtn class="me-4" type="submit"> submit </VBtn>
            <VBtn @click="" variant="outlined"> clear </VBtn>
        </form>
    </div>
</template>

<style scoped>
a {
    color: #f0ece5;
}
</style>
