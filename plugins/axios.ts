import axios from "axios";

// axios plugin 
export default defineNuxtPlugin(async () => {
    const runtimeConfig = useRuntimeConfig()
    axios.defaults.baseURL = runtimeConfig.public.BASE_URL
    axios.interceptors.request.use(function (config) {
        config.headers['X-Binarybox-Api-Key'] = runtimeConfig.public.API_KEY
        return config;
    });
    return {
        provide : {
            axios : axios,
        }
    }
})