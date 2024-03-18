<script lang="ts" setup>
import { useProjectsStore } from '~/store/useProjects';

const store = useProjectsStore()
defineProps<{
    projectId? : string
}>()
</script>

<template>
    <h1 class="mb-4">{{ projectId ? 'Editing a Project' : 'Creating a Project' }}</h1>
    <VDivider class="my-4" />
    <form @submit.prevent="store.saveProject">
        <VTextField v-model="store.project.projectName" label="Title" type="text"></VTextField>
        <VTextarea v-model="store.project.projectDescription" label="Discription"></VTextarea>
        <VBtn class="me-4" type="submit">
            submit
        </VBtn>
        <VBtn @click="store.clearProjectValue" variant="outlined">
            clear
        </VBtn>
    </form>
</template>
