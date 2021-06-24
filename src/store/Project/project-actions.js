import { projectActions } from "./project";

export const getProjects = () => {
    return async (dispatch) => {
        const getProjectsData = async () => {
            const response = await fetch(
                'https://projects-app-cd9bd-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json',
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
            await fetch(
                'https://projects-app-cd9bd-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json', 
                { 
                    method: 'POST', 
                    body: JSON.stringify(project) 
                }
            );
        }

        try {
            await addProjectData();
            dispatch(projectActions.addProject(project));
        } catch (error) {
            addProjectData.catch(() => {
                alert('error adding project');
            });
        }
    }
}