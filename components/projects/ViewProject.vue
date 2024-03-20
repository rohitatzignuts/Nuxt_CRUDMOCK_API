<script setup lang="ts">
import type { Project } from '~/types/projectTypes';

defineProps<{
    project: Project
    isVisible: boolean
}>()

const emit = defineEmits<{
    (event: 'handleCloseDialog', payload: boolean): void
}>()

</script>

<template>
    <div class="text-center d-inline pr-2" id="projectDetails">
        <!-- dialog with project details -->
        <VDialog :model-value="isVisible" width="25%" persistent>
            <VCard min-width="400" prepend-icon="mdi-eye" :text="project.description" :title="project.name">
                <template v-slot:actions>
                    <VBtn class="ms-auto" text="Close" @click="emit('handleCloseDialog', false)"></VBtn>
                </template>
            </VCard>
        </VDialog>
    </div>
</template>
