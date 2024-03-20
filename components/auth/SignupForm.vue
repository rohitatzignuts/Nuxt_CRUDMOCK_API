<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
import { requiredValidator, emailValidator, passwordValidator, validateConfirmPassword } from '~/validation';

const showPassword = ref<Boolean>(false);
const confirmShowPassword = ref<Boolean>(false);
const store = useAuthStore();
const formRef = ref<any>(null);

// validate form data before submitting
const validateAndSubmit = async () => {
    const { valid } = await formRef.value?.validate();
    if (valid) {
        await store.handleRegister();
    }
};
</script>

<template>
    <VToolbar dark color="#31304D">
        <VToolbarTitle>Welcome, And SignUp To Continue...</VToolbarTitle>
    </VToolbar>
    <VSheet class="pa-8 rounded-b" color="#F0ECE5">
        <!-- sign up form  -->
        <VForm ref="formRef" @submit.prevent="validateAndSubmit">
            <!-- name  -->
            <VTextField v-model="store.registerData.name" :rules="[requiredValidator]" label="Name" class="mb-2"
                variant="outlined" />
            <!-- email  -->
            <VTextField v-model="store.registerData.email" :rules="[requiredValidator, emailValidator]" label="E-mail"
                type="email" class="mb-2" variant="outlined" />
            <!-- password  -->
            <VTextField v-model="store.registerData.password" :rules="[requiredValidator, passwordValidator]"
                label="Password" class="mb-2" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                :append-inner-icon-cb="() => showPassword = !showPassword" :append-inner-icon-visible="showPassword"
                :append-inner-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'" variant="outlined" />
            <!-- confirm password  -->
            <VTextField v-model="store.registerData.password_confirmation"
                :rules="[requiredValidator, () => validateConfirmPassword(store.registerData.password, store.registerData.password_confirmation)]"
                label="Confirm Password" :append-inner-icon="confirmShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="confirmShowPassword = !confirmShowPassword"
                :append-inner-icon-cb="() => confirmShowPassword = !confirmShowPassword"
                :append-inner-icon-visible="confirmShowPassword"
                :append-inner-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="confirmShowPassword ? 'text' : 'password'" variant="outlined" />
            <VDivider />
            <!-- submit & clear buttons  -->
            <div class="mt-4">
                <VBtn type="submit" block color="#161A30" class="mb-2" rounded> submit </VBtn>
                <VBtn @click="store.clearRegisterData" variant="outlined" block rounded> clear </VBtn>
            </div>
            <!-- login page link  -->
            <div class="pt-4">
                <span class="me-2">Already have an Accout ?</span>
                <NuxtLink to="/login" class="text-decoration-underlined">Login</NuxtLink>
            </div>
        </VForm>
        <!-- end sign up form  -->
    </VSheet>
</template>

<style scoped>
a {
    color: #161A30;
}
</style>
