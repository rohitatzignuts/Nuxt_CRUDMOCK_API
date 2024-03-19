<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
import {requiredValidator,emailValidator,passwordValidator} from '~/validation'

const showPassword = ref<Boolean>(false);
const store = useAuthStore()
</script>

<template>
    <div>
        <VForm @submit.prevent="store.handleLogin">
            <VTextField v-model="store.loginData.email" label="E-main" type="email"
                :rules="[requiredValidator, emailValidator]" class="mb-2">
            </VTextField>
            <VTextField v-model="store.loginData.password" label="Password" class="mb-2" append-icon="mdi-eye"
                @click:append="showPassword = !showPassword" :append-icon-cb="() => showPassword = !showPassword"
                :append-icon-visible="showPassword" :append-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'" :rules="[requiredValidator]"></VTextField>
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
        </VForm>
    </div>
</template>

<style scoped>
a{
    color: #F0ECE5;
}
</style>