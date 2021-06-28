import { StoreState } from "../../../rootReducer";

export const getFiles = (state: StoreState) => state.file.files;
