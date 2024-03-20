<template>
    <div>
        <div>
            <HeroText />
        </div>
        <VDivider />
        <main class="mt-4">
            <div>
                <!-- link to the create project page  -->
                <NuxtLink to="projects/create" class="text-decoration-none">
                    <VBtn class="text-none" color="grey-lighten-3" size="x-large" variant="flat" block>
                        {{$t("Let's Create a Project")}}</VBtn>
                </NuxtLink>
            </div>
            <!-- list of projects in tabular format  -->
            <ProjectsList />
        </main>
    </div>
</template>
