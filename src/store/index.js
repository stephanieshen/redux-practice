import { configureStore } from "@reduxjs/toolkit";

import projectReducer from './Project/project';

const store = configureStore({
    reducer: {
        projects: projectReducer
    }
});

export default store;