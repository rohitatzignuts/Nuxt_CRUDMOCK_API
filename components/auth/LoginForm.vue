<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
import { requiredValidator, emailValidator } from '~/validation'

const showPassword = ref<Boolean>(false);
const store = useAuthStore()
const formRef = ref<any>(null);

// validate form data before submitting
const validateAndSubmit = async () => {
    const { valid } = await formRef.value?.validate();
    if (valid) {
        await store.handleLogin();
    }
};
</script>

<template>
    <VToolbar dark color="#31304D">
        <VToolbarTitle>Welcome And login to Continue..</VToolbarTitle>
    </VToolbar>
    <VSheet class="pa-8 rounded-b" color="#F0ECE5">
        <!-- login form  -->
        <VForm @submit.prevent="validateAndSubmit" ref="formRef">
            <!-- email  -->
            <VTextField v-model="store.loginData.email" label="E-mail" type="email"
                :rules="[requiredValidator, emailValidator]" class="mb-2" variant="outlined" />
            <!-- password  -->
            <VTextField v-model="store.loginData.password" label="Password" class="mb-2"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                :append-inner-icon-cb="() => showPassword = !showPassword" :append-inner-icon-visible="showPassword"
                :append-inner-icon-props="{ 'aria-label': 'Toggle password visibility' }"
                :type="showPassword ? 'text' : 'password'" :rules="[requiredValidator]" variant="outlined" />
            <VDivider />
            <!-- submit & clear buttons  -->
            <div class="mt-4">
                <VBtn type="submit" block color="#161A30" class="mb-2" rounded>
                    submit
                </VBtn>
                <VBtn @click="store.clearLoginData" variant="outlined" block rounded>
                    clear
                </VBtn>
            </div>
            <!-- sign up page link  -->
            <div class="pt-4">
                <span class="me-2">Dont have an Accout ?</span>
                <NuxtLink to="/signup" class="text-decoration-underlined">Sign up</NuxtLink>
            </div>
        </VForm>
        <!-- login form end  -->
    </VSheet>
</template>

<style scoped>
a {
    color: #161A30;
}
</style>