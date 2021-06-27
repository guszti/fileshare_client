import React, { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => (
    <nav>
        <ul>
            <li>
                <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
                <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
                <Link to="/files">Files</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
