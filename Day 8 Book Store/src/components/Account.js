import React, { Component } from "react";

class Account extends Component{
    constructor(props){
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            street: user.street,
            city: user.city,
            state: user.state,
            zip: user.zip,
            phone: user.phone,
            email: user.email
        }
    }

    componentDidMount(){
        document.title = "Account";
    }

    render(){
        return(
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/account">Account</a>
                    <a href="/signout">Sign out</a>
                </nav>
                <h2>Account Info</h2>
                <div id="accountInfo" className="table">
                    <div className="row">
                        <div className="accountField">Username:</div><div className="accountValue">{this.state.username}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">First Name:</div><div className="accountValue">{this.state.firstName}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">Last Name:</div><div className="accountValue">{this.state.lastName}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">Street:</div><div className="accountValue">{this.state.street}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">City:</div><div className="accountValue">{this.state.city}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">State:</div><div className="accountValue">{this.state.state}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">Zip Code:</div><div className="accountValue">{this.state.zip}</div>
                    </div>
                    <div className="row">
                       <div className="accountField">Phone:</div><div className="accountValue">{this.state.phone}</div>
                    </div>
                    <div className="row">
                        <div className="accountField">Email:</div><div className="accountValue">{this.state.email}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;