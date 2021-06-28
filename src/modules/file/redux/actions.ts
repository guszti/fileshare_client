import { FileActions } from "./constants";
import { File } from "../types";

export const setFiles = (files: File[]) => ({
    type: FileActions.SET_FILES,
    payload: {
        files,
    },
});

export const deleteFile = (id: string) => ({
    type: FileActions.DELETE_FILE,
    payload: {
        id,
    },
});
