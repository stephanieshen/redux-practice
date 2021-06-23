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
        }
    }
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;