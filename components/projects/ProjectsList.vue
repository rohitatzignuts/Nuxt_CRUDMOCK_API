<script setup lang="ts">
import { useProjectsStore } from "~/store/useProjects";
import type { Project } from "~/types/projectTypes";

const headers = [
    { title: "Name", value: "name", sortable: true, width: "20%" },
    { title: "Description", value: "description", width: "50%" },
    { title: "Actions", value: "actions", width: "30%" },
];
const search = ref<any>("");
const showDialog = ref<Boolean>(false);
const projectData = ref<Project>();
const store = useProjectsStore();

// show dialog and assign projectData
const handleProjectView = (project : Project) => {
    showDialog.value = true;
    projectData.value = project;
};

// get the projects as soon as componen mounts
onMounted(() => {
    store.fetchProjects();
});
</script>

<template>
    <div>
        <VCard :title="$t('Projects')" flat class="mt-4" width="100%" color="#31304D">
            <template v-slot:text>
                <vTextField v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></vTextField>
            </template>
            <!--  project list in table form  -->
            <VDataTable :headers="headers" :items="store.projects" :search="search">
                <template #item.actions="{ item }">
                    <VBtn color="#31304D" class="mx-2 my-2" @click="handleProjectView(item)">
                        <VIcon>mdi-eye</VIcon>
                    </VBtn>
                    <NuxtLink :to="`/projects/edit-${item.id}`" class="text-decoration-none">
                        <VBtn variant="tonal" class="mx-2 my-2" color="#31304D">
                            <VIcon>mdi-pencil</VIcon>
                        </VBtn>
                    </NuxtLink>
                    <VBtn color="#31304D" class="mx-2 my-2" @click="store.handleDelete(item.id)">
                        <VIcon>mdi-delete</VIcon>
                    </VBtn>
                </template>
            </VDataTable>
        </VCard>
    </div>
    <!-- dialog for project view -->
    <ProjectsViewProject :isVisible="showDialog" :project="projectData" @handleCloseDialog="showDialog = false" />
</template>
