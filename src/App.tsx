import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilesPage from "./modules/file/components/FilesPage";
import NavBar from "./common/components/NavBar";
import AuthPage from "./modules/auth/components/AuthPage";

const App = () => {
    useEffect(() => {
        
    }, []);
    
    return (
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
