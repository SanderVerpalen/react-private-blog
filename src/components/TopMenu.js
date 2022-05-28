import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function TopMenu({authenticator, authenticatorFunction}) {

    const history = useHistory();

    function logOut() {
        console.log("U wordt uitgelogd");
        authenticatorFunction(!authenticator);
        history.push("/");
    }

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
                        {authenticator &&
                            <NavLink
                                exact to="/blogposts"
                                className="nav-link"
                                activeClassName="active-link"
                            >
                                Blogposts
                            </NavLink>}
                    </li>

                    <li>
                        {!authenticator ? <NavLink
                            to="/login"
                            className="nav-link"
                            activeClassName="active-link"
                        >Login</NavLink> : <button onClick={logOut}>Logout</button>}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;