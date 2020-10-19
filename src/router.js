import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import NewStory from './pages/NewStory'


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"   
                        exact                 
                    >
                        <Home />
                    </Route>
                    <Route
                        path="/auth/login"
                    >
                        <Login />
                    </Route>
                    <Route
                        path="/auth/register"
                    >
                        <Register />
                    </Route>
                    <Route
                        path="/new/story"
                    >
                        <NewStory />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
