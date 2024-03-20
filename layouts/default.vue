<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
const store = useAuthStore()
</script>

<template>
    <!-- default layout for the website -->
    <VLayout class="rounded rounded-md px-15" style="background-color: #161A30;color:#fff">
        <!-- navbar  -->
        <VAppBar color="#31304D" title="CRUD_MOCK API" class="px-13">
            <NuxtLink to="/" class="me-2">
                <VBtn variant="tonal">
                    <VIcon>mdi-home</VIcon>
                </VBtn>
            </NuxtLink>
            <VBtn variant="tonal" class="me-2 pa-0">
                <select id="locale-select" v-model="$i18n.locale">
                    <option value="en">en</option>
                    <option value="ja">ja</option>
                </select>
            </VBtn>
            <VBtn variant="tonal" @click="store.handleLogout" color="#fff">
                <VIcon>mdi-logout</VIcon>
            </VBtn>
            <NuxtLink to="/dropzone" class="ms-2">
                <VBtn variant="tonal">
                    <VIcon>mdi-select-drag</VIcon>
                </VBtn>
            </NuxtLink>
        </VAppBar>
        <!-- navbar ends  -->
        <!-- main content -->
        <VMain class="mx-auto my-5" width="w-75" style="min-height: 100vh;">
            <slot />
        </VMain>
    </VLayout>
</template>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
}

select {
    text-align: center;
    padding: 5px 7.5px;
    border-radius: 5px;
    color: #fff;
    background-color: transparent;
}
</style>
