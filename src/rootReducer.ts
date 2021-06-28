import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./modules/auth/redux/reducer";
import { reducer as fileReducer } from "./modules/file/redux/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    file: fileReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
