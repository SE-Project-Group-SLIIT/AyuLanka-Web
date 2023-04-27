import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feedback from "../views/feedback";
import AllFeedbacks from "../views/viewAllFeedbacks";

export const RouterComponentsFeedback = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/feedback" exact component={Feedback}/>
                    <Route path="/allFeedback" exact component={AllFeedbacks}/>
                </Switch>
            </Router>
        </div>
    )
}