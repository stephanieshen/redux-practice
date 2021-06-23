import { projectActions } from "./project";

export const getProjects = () => {
    return async (dispatch) => {
        const getProjectsData = async () => {
            const response = await fetch(
                'https://redux-practice-b3796-default-rtdb.firebaseio.com/projects.json',
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
                'https://redux-practice-b3796-default-rtdb.firebaseio.com/projects.json', 
                { 
                    method: 'POST', 
                    body: JSON.stringify(project) 
                }
            );

            return await response.json();
        }

        try {
            await addProjectData();
        } catch (error) {
            addProjectData.catch(() => {
                alert('error adding project');
            });
        }
    }
}