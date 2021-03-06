import { FC, useState } from "react";
import "./AuthPage.scss";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { apiService } from "../../../common/services/apiService";
import { User } from "../../../common/types";
import ErrorSpan from "../../../common/components/ErrorSpan";

const AuthPage: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const history = useHistory();

    const onSubmit = async (endpoint: string) => {
        setError("");
        setUsernameError("");
        setPasswordError("");

        try {
            const { data } = await apiService.post<User>(`/auth/${endpoint}`, {
                username,
                password,
            });

            dispatch(setUserId(data._id));

            history.push("/");
        } catch (e) {
            if (e.response?.data?.fieldErrors) {
                setUsernameError(e.response?.data?.fieldErrors?.username || "");
                setPasswordError(e.response?.data?.fieldErrors?.password || "");
            } else {
                setError(e.response?.data?.message || "Unknown error.");
            }
        }
    };

    return (
        <div className={"AuthPage card"}>
            <div className="card-body">
                <div className="mb-3">
                    <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <ErrorSpan error={usernameError} />}
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="formGroupExampleInput2"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <ErrorSpan error={passwordError} />}
                </div>
                {error && <ErrorSpan error={error} />}
                <div
                    className="buttons btn-group"
                    role="group"
                    aria-label="Basic example"
                >
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => onSubmit("sign-in")}
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => onSubmit("sign-up")}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
