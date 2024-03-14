import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import type { UserLogin, User } from "~/types/userTypes";
import Swal from "sweetalert2";

export const useAuthStore = defineStore("auth", () => {
    const token = ref<string | null>(null);
    const loginData = ref<UserLogin>({
        email: "",
        password: "",
    });

    const registerData = ref<User>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegister = () => {
        axios
            .post("api/register", registerData.value)
            .then((response: any) => {
                if (response.data && response.data.token) {
                    localStorage.setItem("token", response.data.token);
                }
                Swal.fire({
                    icon: 'success',
                    title: 'User Registered successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                registerData.value.name = "";
                registerData.value.email = "";
                registerData.value.password = "";
                registerData.value.password_confirmation = "";
                return response;
            })
            .catch((error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred!',
                    showConfirmButton: false,
                    timer: 1500
                });
                return error;
            });
    };

    const handleLogin = () => {
        axios
            .post("api/login", loginData.value)
            .then((response: any) => {
                if (response.data && response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    Swal.fire({
                        icon: 'success',
                        title: 'Logged in successfully!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    loginData.value.email = "";
                    loginData.value.password = "";
                } else {
                    alert("error");
                }
            })
            .catch((error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid password or email!',
                    showConfirmButton: false,
                    timer: 1500
                })
                return error;
            });
    };
    return {
        registerData,
        handleRegister,
        loginData,
        handleLogin,
        token,
    };
});
