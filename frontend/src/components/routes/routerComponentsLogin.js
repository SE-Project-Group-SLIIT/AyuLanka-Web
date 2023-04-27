import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../views/login";

export const RouterComponentsLogin = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </Router>
        </div>
    );
};