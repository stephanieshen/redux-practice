import { createSlice } from "@reduxjs/toolkit";

const projectState = {
    projects: []
}

const projectSlice = createSlice({
    name: 'project',
    initialState: projectState,
    reducers: {
        addProject(state, action) {
            state.projects.push(action.payload)
        }
    }
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;