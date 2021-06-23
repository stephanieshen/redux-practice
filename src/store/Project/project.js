import { createSlice } from "@reduxjs/toolkit";

const projectState = {
    projects: []
}

const projectSlice = createSlice({
    name: 'project',
    initialState: projectState,
    reducers: {
        setItems(state, action) {
            const projects = Object.keys(action.payload).reduce((acc, key) => {
                acc.push({
                    id: key,
                    title: action.payload[key].title,
                    description: action.payload[key].description,
                    dateStarted: action.payload[key].dateStarted,
                    developers: action.payload[key].developers
                })
                return acc;
            }, []);
            state.projects = projects;
        },
        addProject(state, action) {
            state.projects.push(action.payload)
        }
    }
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;