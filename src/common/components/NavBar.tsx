import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../modules/auth/redux/selectors";
import axios from "axios";
import { API_URL } from "../constants";
import { setUserId } from "../../modules/auth/redux/actions";
import { apiService } from "../services/apiService";

const NavBar: FC = () => {
    const history = useHistory();

    const userId = useSelector(getUserId);

    const dispatch = useDispatch();

    const onLogOut = async () => {
        try {
            await apiService.post("/auth/sign-out");

            dispatch(setUserId(""));
        } catch (e) {}
    };

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <Link to="/files" className="nav-link px-2 link-dark">
                        Files
                    </Link>
                </li>
            </ul>

            <div className="col-md-3 text-end">
                {!userId ? (
                    <>
                        <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={() => history.push("/auth-page")}
                        >
                            Authentication
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={onLogOut}
                    >
                        Log Out
                    </button>
                )}
            </div>
        </header>
    );
};

export default NavBar;
