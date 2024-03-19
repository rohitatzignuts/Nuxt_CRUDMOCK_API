import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { ref } from "vue";
import axios from "axios";
import type { Project } from '~/types/projectTypes';

export const useProjectsStore = defineStore("projects", () => {
    const router = useRouter();
    const projects = ref<Array<Project>>([]);
    const projectId = ref<string | number>(null);
    const project = ref({
        projectName: "",
        projectDescription: ""
    });

    // clear project values
    const clearProjectValue = () => {
        project.value = {
            projectName: "",
            projectDescription: ""
        }
    }

    // fetch the projects
    const fetchProjects = async () => {
        try {
            const res = await axios.get("/api/projects");
            projects.value = res.data;
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    // save edited & created project
    const saveProject = async () => {
        try {
            // switch HTTP methods according to the project id 
            const method = projectId.value ? "patch" : "post";
            const url = projectId.value
                ? `/api/projects/${projectId.value}`
                : "/api/projects";
            await axios[method](url, {
                name: project.value.projectName,
                description: project.value.projectDescription,
            });
            Swal.fire({
                icon: "success",
                title: "Project Saved successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
            router.push({ path: "/" });
            project.value.projectName = "";
            project.value.projectDescription = "";
        } catch (error) {
            return error
        }
    };


    // get data of the selected project
    const getProject = async (id: string) => {
        projectId.value = id;
        if (projectId.value) {
            try {
                const response = await axios.get(`/api/projects/${projectId.value}`);
                let projectData = response.data;
                project.value.projectName = projectData.name;
                project.value.projectDescription = projectData.description;
                return response;
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "An Error Occurred!",
                    showConfirmButton: false,
                    timer: 1500
                });
                return error;
            }
        }
    };

    //delete project
    const handleDelete = async (id: number) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axios.delete(`/api/projects/${id}`);
                Swal.fire({
                    icon: 'success',
                    title: 'Project deleted successfully!',
                    showConfirmButton: false,
                    timer: 500
                });
                fetchProjects();
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "An Error Occurred!",
                showConfirmButton: false,
                timer: 1500,
            });
        }
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
