import { File } from "../types";
import { setFiles } from "./actions";
import { FileActions } from "./constants";

export type FileState = {
    files: File[];
};

const initialState: FileState = {
    files: [],
};

type Actions = ReturnType<typeof setFiles>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case FileActions.SET_FILES:
            return {
                ...state,
                files: action.payload.files,
            };
        default:
            return state;
    }
};
