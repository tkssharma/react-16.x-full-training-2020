import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Account from "./components/Account";
import { PrivateRoute } from "./components/PrivateRoute";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Checkout from "./components/Checkout";
import {SignOut} from "./components/SignOut";
import "./App.css";

class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div>
                <Route exact={true} path="/" component={Home}/>
                <PrivateRoute exact={true} path="/account" component={Account}/>
                <PrivateRoute exact={true} path="/orders" component={Orders}/>
                <PrivateRoute exact={true} path="/cart" component={Cart}/>
                <PrivateRoute exact={true} path="/search" component={Search}/>
                <PrivateRoute exact={true} path="/checkout" component={Checkout}/>
                <Route exact={true} path="/login" render={Login}/>
                <Route exact={true} path="/register" render={Registration}/>
                <Route exact={true} path="/signout" render={SignOut}/>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;