import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "../views/signup";
import BuyerProfile from "../views/buyerProfile";
import AllBuyers from "../views/viewAllBuyers";

export const RouterComponentsBuyer = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/buyerProfile" exact component={BuyerProfile}/>
                    <Route path="/viewAllB" exact component={AllBuyers}/>
                </Switch>
            </Router>
        </div>
    );
};