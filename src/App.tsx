import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./modules/auth/components/SignUp";
import SignIn from "./modules/auth/components/SignIn";
import FilesPage from "./modules/file/components/FilesPage";
import NavBar from "./common/components/NavBar";

const App = () => (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/files">
                    <FilesPage />
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;
