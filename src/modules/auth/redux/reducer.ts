import { setUserId } from "./actions";
import { AuthActions } from "./constants";

export type AuthState = {
    userId: string;
};

const initialState: AuthState = {
    userId: "",
};

type Actions = ReturnType<typeof setUserId>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case AuthActions.SET_USER_ID:
            return {
                ...state,
                userId: action.payload.id,
            };
        default:
            return state;
    }
};
