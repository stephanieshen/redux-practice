import { createSlice } from "@reduxjs/toolkit";

const projectState = {
    projects: [],
    changed: false
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
            state.projects.push(action.payload)
        },
        removeProject(state, action) {
            state.changed = true;
            const index = state.projects.findIndex(
                project => project.id === action.payload.id
            );
            state.projects.splice(index, 1);
        },
    }
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;