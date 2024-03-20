<template>
    <!-- layout for login and sign up pages  -->
    <div>
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped>
div{
    background-color: #161A30;
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
main{
    min-width: 50%;
}
</style>