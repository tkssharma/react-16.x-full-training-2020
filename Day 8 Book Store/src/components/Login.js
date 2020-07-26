import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount(){
        document.title = "Login";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = (e) => {
        e.preventDefault();
        const reqBody = {
            username: this.state.username,
            password: this.state.password
        }

        let loginData = {}
        axios.post("http://localhost:8081/logon", reqBody)
        .then((response) => {
                loginData["accountNumber"] = response.data.accountNumber;
                loginData["username"] = response.data.username;
                loginData["firstName"] = response.data.firstName;
                loginData["lastName"] = response.data.lastName;
                loginData["street"] = response.data.street;
                loginData["city"] = response.data.city;
                loginData["state"] = response.data.state;
                loginData["zip"] = response.data.zip;
                loginData["phone"] = response.data.phone;
                loginData["email"] = response.data.email;
                let stringedData = JSON.stringify(loginData);
                localStorage.setItem("user", stringedData);
                this.props.history.push("/");
            }
        )
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="login">
                <a className="linkToPages" href="/">Home</a>
                <h2>Please login.</h2>
                <form className="form" onSubmit={this.login}>
                    <label>
                        Username: <input value={this.state.username} type="text" name="username" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Password: <input value={this.state.password} type="password" name="password" onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" value="Login" />
                </form>
                <p>Don't have an account? Please <a className="linkToPages" href="register">register</a></p>
            </div>
        );
    }
}

export default withRouter(Login);