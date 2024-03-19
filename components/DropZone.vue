<script setup lang="ts">
import { ref } from "vue";

const active = ref<Boolean>(false);
const toggleActive = () => {
    active.value = !active.value;
};
</script>

<template>
    <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent
        @drop.prevent="toggleActive" :class="{ 'active-dropzone': active }" class="dropzone">
        <span>Drag or Drop File</span>
        <span>OR</span>
        <label for="dropzoneFile">Select File</label>
        <input type="file" id="dropzoneFile" class="dropzoneFile" />
    </div>
</template>

<style scoped>
.dropzone {
    width: 75%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #B6BBC4;
    transition: 0.5s ease all;
}

.dropzone label {
    padding: 8px 12px;
    color: #fff;
    background-color: #B6BBC4;
    transition: 0.3s ease all;
}

.dropzone input {
    display: none;
}

.active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #31304D;
}

.active-dropzone label {
    background-color: #fff;
    color: #31304D;
}
</style>