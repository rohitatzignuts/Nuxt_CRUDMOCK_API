<script setup lang="ts">
import { ref } from "vue";

let file : string | any = null;
const dropzoneFile = ref("");
const drop = (e: DragEvent) => {
    const droppedFile = e.dataTransfer.files[0];
    dropzoneFile.value = droppedFile.name;
    file = URL.createObjectURL(droppedFile);
};
const selectedFile = (e: InputEvent) => {
    const selected = (e.target as HTMLInputElement).files?.[0];
    if (selected) {
        dropzoneFile.value = selected.name;
        file = URL.createObjectURL(selected);
    }
};

const removeFile = () => {
    if (file) {
        URL.revokeObjectURL(file);
        file = null;
        dropzoneFile.value = "";
    }
};
</script>

<template>
    <div class="home d-flex justify-center flex-column align-center">
        <h1 class="text-h4 my-4">DropZone</h1>
        <DropZone @drop.prevent="drop" @change="selectedFile" />
        <div class="pa-2 my-4 d-flex justify-space-between align-center fileInfo">
            <span>File ~ {{ dropzoneFile }}</span>
            <div v-if="file">
            <a  :href="file" target="_blank" rel="noopener noreferrer"><VBtn variant="tonal" color="#31304D">View</VBtn></a>
            <VBtn variant="tonal" color="#31304D" class="ms-2" @click="removeFile">Remove</VBtn>
            </div>
        </div>
    </div>
</template>

<style scoped>  
.home {
    min-height: 75vh;
}
.fileInfo{
    width : 75%;
    background-color: #B6BBC4;
    color: #fff;
}
</style>
