<script setup lang="ts">
import { useAuthStore } from '~/store/useAuth';
const store = useAuthStore()

</script>

<template>
    <VLayout class="rounded rounded-md px-15" style="background-color: #161A30;color:#fff">
        <VAppBar color="#31304D" title="CRUD_MOCK API" class="px-13">
            <NuxtLink to="/" class="me-2">
                <VBtn variant="outlined">{{$t('Home')}}</VBtn>
            </NuxtLink>
            <VBtn variant="outlined" @click="store.handleLogout">{{$t('Logout')}}</VBtn>
            <select id="locale-select" v-model="$i18n.locale">
                <option value="en" selected>en</option>
                <option value="ja">ja</option>
            </select>
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
select{
    text-align: center;
    padding: 5px 7.5px ;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    margin-left: 0.5rem;
}
</style>
