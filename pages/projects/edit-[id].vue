<script setup lang="ts">
import { useProjectsStore } from '~/store/useProjects';
const route = useRoute();
const store = useProjectsStore();

const projectId = route.params.id;
if (projectId) {
    store.getProject(projectId);
}
</script>

<template>
    <div>
        <div class="py-4">
            <VBtn variant="outlined" @click="$router.back()">Go Back</VBtn>
        </div>
        <main>
            <ProjectsCreateForm :projectId="projectId"/>
        </main>
    </div>
</template>
