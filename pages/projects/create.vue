<script setup lang="ts">
const router = useRouter()
</script>
<template>
    <div>
        <div class="py-4">
            <VBtn variant="outlined" @click="$router.back()">Go Back</VBtn>
        </div>
        <main>
            <ProjectsCreateForm />
        </main>
    </div>
</template>
