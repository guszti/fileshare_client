import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilesPage from "./modules/file/components/FilesPage";
import NavBar from "./common/components/NavBar";
import AuthPage from "./modules/auth/components/AuthPage";
import { apiService } from "./common/services/apiService";
import { User } from "./common/types";
import { useDispatch } from "react-redux";
import { setUserId } from "./modules/auth/redux/actions";
import BeautifulLoader from "./common/components/BeautifulLoader";

const App = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiService
            .get<User>("/auth/logged-in-user")
            .then(({ data }) => {
                const id = !!data._id ? data._id : "";

                dispatch(setUserId(id));

                setIsLoading(false);
            })
            .catch(() => {
                dispatch(setUserId(""));

                setIsLoading(false);
            });
    }, []);

    return isLoading ? (
        <BeautifulLoader />
    ) : (
        <div className="container">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/auth-page">
                        <AuthPage />
                    </Route>
                    <Route path="/dashboard">
                        <FilesPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
