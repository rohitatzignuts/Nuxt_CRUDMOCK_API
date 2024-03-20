<script setup lang="ts">
import { useProjectsStore } from "~/store/useProjects";

const router = useRouter()
const store = useProjectsStore()
// let user go back to the previous route 
const goBack = () => {
    store.clearProjectValue();
    router.back();
};
</script>

<template>
    <div>
        <div class="py-4">
            <VBtn variant="outlined" @click="goBack">Go Back</VBtn>
        </div>
        <!-- component for creating a new project -->
        <main>
            <ProjectsCreateForm />
        </main>
    </div>
</template>
