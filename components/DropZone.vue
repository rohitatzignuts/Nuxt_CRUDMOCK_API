<template>
    <div>
        <VBtn @click="clearFile" variant="tonal" v-if="file" class="my-4">Clear</VBtn>
        <div class="dropzone" @dragover.prevent @drop.prevent="handleDrop">
            <div v-if="!file" @click="handleClick">Drag & drop files here </div>
            <div v-else>
                <VSheet>file Name : {{ file.name }}</VSheet>
                <div v-if="fileData">
                    <img v-if="isImage" :src="fileData" alt="Uploaded Image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const file = ref<File | null>(null);
const fileData = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const handleDrop = (e: DragEvent) => {
    const droppedFile = e.dataTransfer?.files[0];
    if (droppedFile) {
        file.value = droppedFile;
        readFile(droppedFile);
    }
};

const handleClick = () => {
    fileInput.value?.click();
};

const handleFileInput = (e: Event) => {
    const inputElement = e.target as HTMLInputElement;
    const selectedFile = inputElement.files?.[0];
    if (selectedFile) {
        file.value = selectedFile;
        readFile(selectedFile);
    }
};

const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
        fileData.value = reader.result as string;
    };
    reader.readAsDataURL(file);
};

const clearFile = () => {
    file.value = null;
    fileData.value = null;
};

const isImage = computed(() => fileData.value?.startsWith('data:image'));
</script>

<style scoped>
.dropzone {
    border: 2px dashed #ccc;
    padding: 20px;
    cursor: pointer;
    min-height: 50vh;
}

.dropzone div {
    text-align: center;
}
img{
    object-fit: cover;
    max-width: 100%;
    overflow: hidden;
}
</style>
