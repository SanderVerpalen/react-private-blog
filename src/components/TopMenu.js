import React from 'react';
import {NavLink} from "react-router-dom";

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink
                            exact to="/"
                            className="nav-link"
                            activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink
                            exact to="/blogposts"
                            className="nav-link"
                            activeClassName="active-link"
                        >Blogposts</NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className="nav-link"
                            activeClassName="active-link"
                        >Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;