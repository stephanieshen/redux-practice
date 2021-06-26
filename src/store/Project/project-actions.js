import { endpoint } from "../../firebase/firebase";
import { projectActions } from "./project";

export const getProjects = () => {
    return async (dispatch) => {
        const getProjectsData = async () => {
            const response = await fetch(
                endpoint + '/projects.json',
                {
                    method: 'GET'
                }
            );

            return await response.json();
        }

        try {
            const projects = await getProjectsData();
            dispatch(projectActions.setItems(projects))
        } catch (error) {
            getProjectsData().catch(() => {
                alert('error loading projects');
            });
        }
    }
}

export const addProject = (project) => {
    return async (dispatch) => {
        const addProjectData = async () => {
            const response = await fetch(
                endpoint + '/projects.json', 
                { 
                    method: 'POST', 
                    body: JSON.stringify(project) 
                }
            );

            return await response.json();
        }

        try {
            const addedProject = await addProjectData();
            dispatch(projectActions.addProject({ 
                id: addedProject.name, 
                ...project 
            }));
        } catch (error) {
            addProjectData.catch(() => {
                alert('error adding project');
            });
        }
    }
}

export const updateProject = (project) => {
    return async (dispatch) => {
        const updateProjectData = async () => {
            const response = await fetch(
                endpoint + `/projects/${project.id}.json`, 
                { 
                    method: 'PUT', 
                    body: JSON.stringify(project) 
                }
            );

            return await response.json();
        }

        try {
            await updateProjectData();
            dispatch(projectActions.updateProject(project));
        } catch (error) {
            updateProjectData.catch(() => {
                alert('error updating project');
            });
        }
    }
}

export const deleteProject = (project) => {
    return async (dispatch) => {
        const deleteProjectData = async () => {
            await fetch(
                endpoint + `/projects/${project.id}.json`, 
                { 
                    method: 'DELETE'
                }
            );
        }

        try {
            await deleteProjectData();
            dispatch(projectActions.removeProject(project));
        } catch (error) {
            deleteProjectData().catch(() => {
                alert('error deleting project');
            });
        }
    }
}