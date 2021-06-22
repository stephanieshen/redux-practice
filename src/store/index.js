import { configureStore } from "@reduxjs/toolkit";

import projectReducer from './Project/project';

const store = configureStore({
    reducer: {
        project: projectReducer
    }
});

export default store;