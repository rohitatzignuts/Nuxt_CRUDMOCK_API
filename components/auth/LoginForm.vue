<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
import {requiredValidator,emailValidator} from '~/validation'

const showPassword = ref<Boolean>(false);
const store = useAuthStore()
</script>
<template>
    <VToolbar dark color="#31304D">
        <VToolbarTitle>Welcome And login to Continue..</VToolbarTitle>
    </VToolbar>
    <VSheet class="pa-8 rounded-b" color="#F0ECE5">
        <VForm @submit.prevent="store.handleLogin">
            <VTextField v-model="store.loginData.email" label="E-mail" type="email"
                :rules="[requiredValidator, emailValidator]" class="mb-2" variant="outlined" />
            <VTextField v-model="store.loginData.password" label="Password" class="mb-2" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword" :append-inner-icon-cb="() => showPassword = !showPassword"
                :append-inner-icon-visible="showPassword" :append-inner-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'" :rules="[requiredValidator]" variant="outlined" />
                <VDivider />
            <div class="mt-4">
                <VBtn type="submit" block color="#161A30" class="mb-2" rounded>
                    submit
                </VBtn>
                <VBtn @click="" variant="outlined" block rounded>
                    clear
                </VBtn>
            </div>
            <div class="pt-4">
                <span class="me-2">Dont have an Accout ?</span>
                <NuxtLink to="/signup" class="text-decoration-underlined">Sign up</NuxtLink>
            </div>
        </VForm>
    </VSheet>
</template>

<style scoped>
a{
    color: #161A30;
}
</style>