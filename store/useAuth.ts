import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import type { UserLogin, User } from "~/types/userTypes";
import Swal from "sweetalert2";

export const useAuthStore = defineStore("auth", () => {
    const token = ref<string | null>(null);
    const router = useRouter();
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

    // handle user registration
    const handleRegister = async () => {
        try {
            const response = await axios.post("api/register", registerData.value);
            if (response.data && response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
            Swal.fire({
                icon: "success",
                title: "User Registered successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
            router.push({ path: "/" });
            registerData.value.name = "";
            registerData.value.email = "";
            registerData.value.password = "";
            registerData.value.password_confirmation = "";
            return response;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                let errorMessage = '' 
                for (let key in error.response.data.errors) {
                    errorMessage += error.response.data.errors[key][0] + "\n";
                }
                Swal.fire({
                    icon: "error",
                    text: errorMessage,
                    showConfirmButton: false,
                    timer: 2000,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "An Error Occurred!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    // handle user login
    const handleLogin = async () => {
        try {
            const response = await axios.post("api/login", loginData.value);
            if (response.data && response.data.token) {
                localStorage.setItem("token", response.data.token);
                router.push({ path: "/" });
                Swal.fire({
                    icon: "success",
                    title: "Logged in successfully!",
                    showConfirmButton: false,
                    timer: 1000,
                });
                loginData.value.email = "";
                loginData.value.password = "";
            }
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    icon: "error",
                    title: error.response.data.error,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "An Error Occurred!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    // handle user logout
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        const result = await Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes !",
        });
        if (result.isConfirmed) {
            try {
                const response = await axios.post("api/logout", null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push({ path: "/login" });
                localStorage.removeItem("token");
                return response;
            } catch (error) {
                if (error.response) {
                    Swal.fire({
                        icon: "error",
                        title: error.response.data.error,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "An Error Occurred!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        }
    };

    return {
        registerData,
        handleRegister,
        loginData,
        handleLogin,
        handleLogout,
        token,
    };
});
