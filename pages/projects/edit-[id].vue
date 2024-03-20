<script setup lang="ts">
import { useProjectsStore } from "~/store/useProjects";

const router = useRouter();
const route = useRoute();
const store = useProjectsStore();
// get the project id from the route
const projectId = route.params.id;
// if project id is there,then get the project
if (projectId) {
    store.getProject(projectId);
}
// let user go back to the previous route 
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
        <!-- componet for editing a existing project  -->
        <main>
            <ProjectsCreateForm :projectId="projectId" />
        </main>
    </div>
</template>
