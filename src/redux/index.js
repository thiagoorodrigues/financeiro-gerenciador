import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';

import global from "./reducers/global";

import storage from 'redux-persist/lib/storage'

const reducerRoot = combineReducers({ global });

const persistConfig = { key: 'root', storage };
const reducer = persistReducer(persistConfig, reducerRoot);

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export const persistor = persistStore(store);