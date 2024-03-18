export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = localStorage.getItem('token');
        const isAuthenticated = token !== null;
        if(to.path === '/login' || to.path === '/signup'){
            if(isAuthenticated){
                return navigateTo('/')
            }
        }else{
            if(!isAuthenticated){
                return navigateTo('/login') || navigateTo('/signup')
            }
        }
    }
});