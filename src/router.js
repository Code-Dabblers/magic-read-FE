import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

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
                </Switch>
            </BrowserRouter>
        </div>
    )
}
