<script setup type="ts">
import { useProjectsStore } from '~/store/useProjects';
const search = ref('')
const headers = [
    { title: 'Name', value: 'name', width: '20%' },
    { title: 'Description', value: 'description', width: '60%' },
    { title: 'Actions', value: 'actions', sortable: false, width: '20%' },
]
const store = useProjectsStore()
onMounted(() => {
    store.fetchProjects()   
})
</script>

<template>
    <div>
        <VCard title="Projects" flat class="mt-4" width="100%" color="#31304D">
            <template v-slot:text>
                <vTextField v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></vTextField>
            </template>
            <VDataTable :headers="headers" :items="store.projects" :search="search">
                <template #item.actions="{ item }">
                    <VBtn  color="#31304D" class="mx-2 my-2">
                        <VIcon>mdi-eye</VIcon>
                    </VBtn>
                    <NuxtLink :to="`/projects/edit-${item.id}`" class="text-decoration-none">
                        <VBtn  variant="tonal" class="mx-2 my-2" color="#31304D">
                            <VIcon>mdi-pencil</VIcon>
                        </VBtn>
                    </NuxtLink>
                    <VBtn  color="#31304D" class="mx-2 my-2" @click="store.handleDelete(item.id)">
                        <VIcon>mdi-delete</VIcon>
                    </VBtn>
                </template>
            </VDataTable>
        </VCard>
    </div>
</template>