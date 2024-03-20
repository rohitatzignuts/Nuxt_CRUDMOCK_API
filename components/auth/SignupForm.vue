<script setup lang="ts">
import { useAuthStore } from "~/store/useAuth";
import { requiredValidator, emailValidator, passwordValidator } from '~/validation'

const showPassword = ref<Boolean>(false);
const store = useAuthStore();
const formRef = ref<any>(null);

const validateAndSubmit = () => {
    if (formRef.value) {
        formRef.value.validate().then((valid: boolean) => {
            if (valid) {
                store.handleRegister();
            }
        });
    }
};
</script>

<template>
    <VToolbar dark color="#31304D">
        <VToolbarTitle>Welcome, And SignUp To Continue...</VToolbarTitle>
    </VToolbar>
    <VSheet class="pa-8 rounded-b" color="#F0ECE5">
        <VForm ref="form" @submit.prevent="validateAndSubmit">
            <VTextField v-model="store.registerData.name" :rules="[requiredValidator]" label="Name" class="mb-2"
                variant="outlined" />

            <VTextField v-model="store.registerData.email" :rules="[requiredValidator, emailValidator]" label="E-mail"
                type="email" class="mb-2" variant="outlined" />
            <VTextField v-model="store.registerData.password" :rules="[requiredValidator, passwordValidator]"
                label="Password" class="mb-2" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                :append-inner-icon-cb="() => showPassword = !showPassword" :append-inner-icon-visible="showPassword"
                :append-inner-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'" variant="outlined" />
            <VTextField v-model="store.registerData.password_confirmation"
                :rules="[requiredValidator, passwordValidator]" label="Confirm Password"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                :append-inner-icon-cb="() => showPassword = !showPassword" :append-inner-icon-visible="showPassword"
                :append-inner-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'" variant="outlined" />
            <VDivider />
            <div class="mt-4">
                <VBtn type="submit" block color="#161A30" class="mb-2" rounded> submit </VBtn>
                <VBtn @click="store.clearRegisterData" variant="outlined" block rounded> clear </VBtn>
            </div>
            <div class="pt-4">
                <span class="me-2">Already have an Accout ?</span>
                <NuxtLink to="/login" class="text-decoration-underlined">Login</NuxtLink>
            </div>
        </VForm>
    </VSheet>
</template>

<style scoped>
a {
    color: #161A30;
}
</style>
