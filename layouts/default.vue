<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
const store = useAuthStore()
</script>

<template>
    <VLayout class="rounded rounded-md px-15" style="background-color: #161A30;color:#fff">
        <VAppBar color="#31304D" title="CRUD_MOCK API" class="px-13">
            <NuxtLink to="/" class="me-2">
                <VBtn variant="outlined">Home</VBtn>
            </NuxtLink>
            <VBtn variant="outlined" @click="store.handleLogout">LogOut</VBtn>
        </VAppBar>
        <VMain class="mx-auto my-5" width="w-75" style="min-height: 100vh;">
            <slot />
        </VMain>
    </VLayout>
</template>

<style scoped>
a{
    color: #fff;
    text-decoration: none;
}
</style>
