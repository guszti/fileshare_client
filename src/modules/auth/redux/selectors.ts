import { StoreState } from "../../../rootReducer";

export const getUserId = (state: StoreState) => state.auth.userId;
