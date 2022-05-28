import React, {useState} from 'react';
import {
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import TopMenu from "./components/TopMenu";
import HomePage from "./pages/Home"
import BlogPosts from "./pages/Blogposts";
import Login from "./pages/Login";
import BlogPost from "./pages/Blogpost";
import './App.css';

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
     const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <TopMenu
                authenticator={isAuthenticated}
                authenticatorFunction={toggleIsAuthenticated}
            />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route  exact path="/blogposts">
                    {isAuthenticated=== true ? <BlogPosts />: <Redirect to="/login"/>}
                </Route>
                <Route  exact path="/login">
                    <Login
                        authenticator={isAuthenticated}
                        authenticatorFunction={toggleIsAuthenticated}
                    />
                </Route>
                <Route   path="/blogposts/:id">
                    {isAuthenticated=== true ? <BlogPost />: <Redirect to="/login"/>}
                </Route>
            </Switch>
        </>
    );
}

export default App;
