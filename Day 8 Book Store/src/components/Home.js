import React, { Component } from "react";

class Home extends Component{
    loggedIn(){
        if (!localStorage.getItem("user")){
            return(
                <div>
                    <div id="signIn" className="table">
                        <div className="row">
                            <div id="login" className="cell">
                                <a className="logReg" href="login">Log In</a>
                            </div>
                            <div id="register" className="cell">
                                <a className="logReg" href="register">Register</a>
                            </div>
                        </div>
                    </div>
                    <h1>Home</h1>
                    <p>Welcome to the bookseller! Buy your own books at your pleasure. Please sign in to see our catalog.</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/orders">Orders</a>
                        <a href="/account">Account</a>
                        <a href="/signout">Sign out</a>
                    </nav>
                    <h1>Home</h1>
                    <p>Welcome to the bookseller! Buy your own books at your pleasure. <a className="linkToPages" href="/search">Search</a> our catalog!</p>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.loggedIn()}
            </div>
        );
    }
}

export default Home;