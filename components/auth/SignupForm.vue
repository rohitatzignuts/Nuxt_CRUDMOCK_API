<script setup lang="ts">
import { useAuthStore } from "~/store/useAuth";
import {requiredValidator,emailValidator,passwordValidator} from '~/validation'

const showPassword = ref<Boolean>(false);
const store = useAuthStore();
</script>

<template>
    <div>
        <VForm @submit.prevent="store.handleRegister">
            <VTextField v-model="store.registerData.name" :rules="[requiredValidator]" label="Name" class="mb-2">
            </VTextField>
            <VTextField v-model="store.registerData.email" :rules="[requiredValidator,emailValidator]" label="E-mail" type="email"
                class="mb-2"></VTextField>
            <VTextField v-model="store.registerData.password" :rules="[requiredValidator,passwordValidator]" label="Password"
                class="mb-2" append-icon="mdi-eye" @click:append="showPassword = !showPassword"
                :append-icon-cb="() => showPassword = !showPassword" :append-icon-visible="showPassword"
                :append-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'"></VTextField>
            <VTextField v-model="store.registerData.password_confirmation" :rules="[requiredValidator,passwordValidator]"
                label="Confirm Password" class="mb-2" append-icon="mdi-eye" @click:append="showPassword = !showPassword"
                :append-icon-cb="() => showPassword = !showPassword" :append-icon-visible="showPassword"
                :append-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'"></VTextField>
            <div class="pb-4">
                <span class="me-2">Already have an Accout ?</span>
                <NuxtLink to="/login" class="text-decoration-underlined">Login</NuxtLink>
            </div>
            <VBtn class="me-4" type="submit"> submit </VBtn>
            <VBtn @click="" variant="outlined"> clear </VBtn>
        </VForm>
    </div>
</template>

<style scoped>
a {
    color: #f0ece5;
}
</style>
