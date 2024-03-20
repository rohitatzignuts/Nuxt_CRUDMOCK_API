<script lang="ts" setup>
import { useProjectsStore } from '~/store/useProjects';
import { requiredValidator, projectValueValidator } from '~/validation'

defineProps<{
    projectId?: string
}>()

const store = useProjectsStore()
</script>

<template>
    <h1 class="mb-4">{{ projectId ? `${$t('Editing a Project')}` : `${$t('Creating a Project')}` }}</h1>
    <VDivider class="my-4" />
    <!-- form for creatig a project  -->
    <VForm @submit.prevent="store.saveProject" rules="projectDataRule">
        <VTextField v-model="store.project.projectName" label="projectName" type="text"
            :rules="[requiredValidator, projectValueValidator]" class="mb-2"></VTextField>
        <VTextarea v-model="store.project.projectDescription" label="projectDiscription"
            :rules="[requiredValidator, projectValueValidator]" class="mb-2"></VTextarea>
        <VBtn class="me-4" type="submit">
            submit
        </VBtn>
        <VBtn @click="store.clearProjectValue" variant="outlined">
            clear
        </VBtn>
    </VForm>
    <!-- form for editing a project  -->
</template>
