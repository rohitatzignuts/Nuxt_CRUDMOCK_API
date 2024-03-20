// global middleware for user authentication 
export default defineNuxtRouteMiddleware((to, from) => {
    // check the environment
    if (process.client) {
        // get the token from the localstorage
        const token = localStorage.getItem('token');
        const isAuthenticated = token !== null;
        // restrict access to user /login and /signup if he is authenticated
        if(to.path === '/login' || to.path === '/signup'){
            if(isAuthenticated){
                return navigateTo('/')
            }
        }
        // redirect user to the /login page if he is not authenticated
        else{
            if(!isAuthenticated){
                return navigateTo('/login') || navigateTo('/signup')
            }
        }
    }
});