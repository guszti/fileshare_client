import { AuthActions } from "./constants";

export const setUserId = (id: string) => ({
    type: AuthActions.SET_USER_ID,
    payload: {
        id,
    },
});
