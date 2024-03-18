<template>
    <div>
        <div>
            <HeroText />
        </div>
        <VDivider />
        <main class="mt-4">
            <div>
                <NuxtLink to="projects/create" class="text-decoration-none">
                    <VBtn class="text-none" color="grey-lighten-3" size="x-large" variant="flat" block>
                        {{$t("Let's Create a Project")}}</VBtn>
                </NuxtLink>
            </div>
            <ProjectsList />
        </main>
    </div>
</template>
