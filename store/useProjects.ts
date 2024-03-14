import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { ref } from "vue";
import axios from "axios";

export const useProjectsStore = defineStore("projects", () => {
    const router = useRouter();
    const projects = ref([]);
    const projectId = ref(null);
    const project = ref({
        projectName: "",
        projectDescription: ""
    });

    const clearProjectValue = () => {
        project.value = {}
    }
    // fetch the projects
    const fetchProjects = () => {
        axios
            .get("/api/projects")
            .then((res) => {
                projects.value = res.data;
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    };

    // save edited & created project
    const saveProject = () => {
        if (!project.value.projectName || !project.value.projectDescription) {
            Swal.fire({
                icon: "error",
                title: "Please fill in all required fields!",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        const method = projectId.value ? "patch" : "post";
        const url = projectId.value
            ? `/api/projects/${projectId.value}`
            : "/api/projects";
        axios[method](url, {
            name: project.value.projectName,
            description: project.value.projectDescription,
        })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Project Saved successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push({ path: "/" })
                project.value.projectName = "";
                project.value.projectDescription = "";
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "An Error Occurred!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return error;
            });
    };

    // get data of the selected project
    const getProject = (id: string) => {
        // Use the provided ID instead of router.params.id
        projectId.value = id;
        if (projectId.value) {
            axios
                .get(`/api/projects/${projectId.value}`)
                .then((response) => {
                    let projectData = response.data;
                    project.value.projectName = projectData.name;
                    project.value.projectDescription = projectData.description;
                    return response;
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "An Error Occurred!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return error;
                });
        }
    };

    //delete project
    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/projects/${id}`)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Project deleted successfully!',
                            showConfirmButton: false,
                            timer: 500
                        });
                        fetchProjects();
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'An Error Occurred!',
                            showConfirmButton: false,
                            timer: 500
                        });
                    });
            }
        });
    };

    return {
        projects,
        fetchProjects,
        saveProject,
        project,
        projectId,
        getProject,
        handleDelete,
        clearProjectValue
    };
});
