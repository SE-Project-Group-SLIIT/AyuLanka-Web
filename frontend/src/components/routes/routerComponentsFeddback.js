import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feedback from "../views/feedback";

export const RouterComponentsFeedback = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/feedback" exact component={Feedback}/>
                </Switch>
            </Router>
        </div>
    )
}