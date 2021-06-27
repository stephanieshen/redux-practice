import { createSlice } from "@reduxjs/toolkit";

const projectState = {
    projects: [],
    changed: false,
    activeProject: null
}

const projectSlice = createSlice({
    name: 'project',
    initialState: projectState,
    reducers: {
        setItems(state, action) {
            const projects = Object.keys(action.payload)
                .reduce((acc, key) => {
                    acc.push({ 
                        id: key, 
                        ...action.payload[key] 
                    });
                    return acc;
                }, []);
            state.projects = projects;
        },
        addProject(state, action) {
            state.changed = true;
            state.projects.push(action.payload);
            state.activeProject = action.payload;
        },
        updateProject(state, action) {
            state.changed = true;
            const index = state.projects.findIndex(
                project => project.id === action.payload.id
            );
            state.projects[index] = {...action.payload}
            
            state.activeProject = action.payload;
        },
        removeProject(state, action) {
            state.changed = true;
            const index = state.projects.findIndex(
                project => project.id === action.payload.id
            );
            state.projects.splice(index, 1);
        },
        setActiveProject(state, action) {
            const project = state.projects.find(
                project => project.id === action.payload
            );
            state.activeProject = project;
        }
    }
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;