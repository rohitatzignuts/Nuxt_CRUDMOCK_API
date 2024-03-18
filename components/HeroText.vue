<script setup lang="ts">
import { ref } from "vue";
const tab = ref<string | null>(null);

</script>

<template>
    <div class="mb-8 pb-2">
        <div>
            <p class="text-h3 py-4">{{$t('Welcome to ProjectMaker!')}}</p>
        </div>
        <VCard class="mt-4">
            <VTabs v-model="tab" bg-color="#B6BBC4">
                <VTab value="one">{{$t('Create')}}</VTab>
                <VTab value="two">{{$t('Visualize')}}</VTab>
                <VTab value="three">{{$t('Edit & Delete')}}</VTab>
            </VTabs>
            <VCardText>
                <VWindow v-model="tab">
                    <VWindowItem value="one" class="font-weight-bold">
                        Get started by creating your first project. Our intuitive interface makes it simple to outline
                        your goals, set milestones, and track progress every step of the way.
                    </VWindowItem>
                    <VWindowItem value="two" class="font-weight-bold">
                        See your projects come to life with our powerful visualization tools. Visualize your project's
                        timeline, tasks, and resources, helping you stay organized and focused on what matters most.
                    </VWindowItem>
                    <VWindowItem value="three" class="font-weight-bold">
                        Need to make changes? No problem. Edit your projects with ease, updating details or making
                        modifications as needed. And if a project is no longer relevant, you can easily delete it to
                        keep your workspace clutter-free.
                    </VWindowItem>
                </VWindow>
            </VCardText>
        </VCard>
    </div>
</template>
