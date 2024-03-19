<script lang="ts" setup>
import { useProjectsStore } from '~/store/useProjects';
import {requiredValidator, projectValueValidator } from '~/validation'
const store = useProjectsStore()
defineProps<{
    projectId?: string
}>()
</script>

<template>
    <h1 class="mb-4">{{ projectId ? `${$t('Editing a Project')}` : `${$t('Creating a Project')}` }}</h1>
    <VDivider class="my-4" />
    <VForm @submit.prevent="store.saveProject" rules="projectDataRule">
        <VTextField v-model="store.project.projectName" label="projectName" type="text" :rules="[requiredValidator,projectValueValidator]"
            class="mb-2"></VTextField>
        <VTextarea v-model="store.project.projectDescription" label="projectDiscription" :rules="[requiredValidator,projectValueValidator]"
            class="mb-2"></VTextarea>
        <VBtn class="me-4" type="submit">
            submit
        </VBtn>
        <VBtn @click="store.clearProjectValue" variant="outlined">
            clear
        </VBtn>
    </VForm>
</template>
