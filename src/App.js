import React, {useState} from 'react';
import {
    Switch,
    Route,
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
            <TopMenu />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route  exact path="/blogposts">
                    <BlogPosts />
                </Route>
                <Route  exact path="/login">
                    <Login />
                </Route>
                <Route   path="/blogposts/:id">
                    <BlogPost />
                </Route>
            </Switch>
        </>
    );
}

export default App;
