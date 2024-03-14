<script lang="ts" setup>
import { useProjectsStore } from '~/store/useProjects';

const store = useProjectsStore()
defineProps<{
    projectId? : string
}>()
</script>

<template>
    <form @submit.prevent="store.saveProject">
        <VTextField v-model="store.project.projectName" label="Title" type="text"></VTextField>
        <VTextarea  v-model="store.project.projectDescription" label="Discription" ></VTextarea>
        <VBtn class="me-4" type="submit">
            submit
        </VBtn>
        <VBtn @click="store.clearProjectValue" variant="outlined">
            clear
        </VBtn>
    </form>
</template>
