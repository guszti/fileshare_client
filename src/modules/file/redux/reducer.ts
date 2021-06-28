import { filter } from "lodash";
import { File } from "../types";
import { deleteFile, setFiles } from "./actions";
import { FileActions } from "./constants";

export type FileState = {
    files: File[];
};

const initialState: FileState = {
    files: [],
};

type Actions = ReturnType<typeof setFiles> & ReturnType<typeof deleteFile>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case FileActions.SET_FILES:
            return {
                ...state,
                files: action.payload.files,
            };
        case FileActions.DELETE_FILE:
            return {
                ...state,
                files: filter(
                    state.files,
                    (file) => file._id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};
