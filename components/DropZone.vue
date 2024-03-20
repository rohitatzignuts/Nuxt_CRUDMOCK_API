<script setup lang="ts">
import { ref, computed } from "vue";

// Define reactive variables
const file = ref<File | null>(null);
const fileData = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

// Handle file drop event
const handleDrop = (e: DragEvent) => {
    const droppedFile = e.dataTransfer?.files[0];
    if (droppedFile) {
        file.value = droppedFile; // Update the file reference
        readFile(droppedFile); // Read the file data
    }
};

// Handle click to trigger file input
const handleClick = () => {
    fileInput.value?.click(); // Click the file input
};

// Read the file data as base64
const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
        fileData.value = reader.result as string;
    };
    reader.readAsDataURL(file);
};

// Clear the file and file data
const clearFile = () => {
    file.value = null;
    fileData.value = null;
};

// Compute if the dropped file is an image
const isImage = computed(() => {
    if (file.value) {
        return file.value.type.startsWith("image"); // Check if the file is an image
    }
    return false;
});
</script>

<template>
    <div class="text-h4 text-center pt-4 pb-8 font-weight-bold text-decoration-underline">DropZone</div>
    <div>
        <!-- Button to clear the file -->
        <VBtn @click="clearFile" variant="tonal" v-if="file" class="my-4">Clear</VBtn>
        <!-- Dropzone area -->
        <div class="dropzone" @dragover.prevent @drop.prevent="handleDrop">
            <!-- Display message if no file is selected -->
            <div v-if="!file" @click="handleClick">Drag & drop files here (images / videos)</div>
            <!-- Display file information if a file is selected -->
            <div v-else>
                <VSheet>file Name : {{ file.name }}</VSheet>
                <!-- Display file name -->
                <div v-if="fileData">
                    <!-- Display image if file is an image, otherwise display video -->
                    <img v-if="isImage" :src="fileData" alt="Uploaded Image" />
                    <video v-else :src="fileData" controls></video>
                </div>
            </div>
        </div>
    </div>
</template>

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

img,
video {
    max-width: 100%;
}
</style>
