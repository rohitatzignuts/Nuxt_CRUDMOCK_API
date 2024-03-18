<script setup lang="ts">
import { useProjectsStore } from "~/store/useProjects";
const router = useRouter();
const route = useRoute();
const store = useProjectsStore();

const projectId = route.params.id;
if (projectId) {
    store.getProject(projectId);
}

const goBack = () => {
    store.clearProjectValue();
    router.back();
}
</script>

<template>
    <div>
        <div class="py-4">
            <VBtn variant="outlined" @click="goBack">Go Back</VBtn>
        </div>
        <main>
            <ProjectsCreateForm :projectId="projectId" />
        </main>
    </div>
</template>
