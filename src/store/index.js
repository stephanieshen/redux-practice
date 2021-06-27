import { 
    configureStore, 
    getDefaultMiddleware 
} from "@reduxjs/toolkit";
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import projectReducer from './Project/project';

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    projects: projectReducer
})

export const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
