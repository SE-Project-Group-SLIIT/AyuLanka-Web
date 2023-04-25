import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCatelog from "../views/productCatelog";
import SingleProduct from "../views/singleProduct";
import Checkout from "../views/checkout";
import Home from "../views/home"

export const RouterComponentsProduct = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact component={ProductCatelog} />
        <Route path="/single" exact component={SingleProduct}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/home" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};
