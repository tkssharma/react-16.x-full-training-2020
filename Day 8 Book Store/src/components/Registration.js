import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            confirmedPassword: ""
        }
    }

    componentDidMount(){
        document.title = "Register";
    }

    passwordMatch = (event) => {
        event.preventDefault();
        const reqBody = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.password !== this.state.confirmedPassword){
            alert("Passwords do not match.");
        }
        //if authenticated, will redirect to login page
        else{
            const checkUsername = axios.post("http://localhost:8081/checkUsername", reqBody)
            .then( () =>
                {
                    if (checkUsername.status === "ERROR"){
                        alert(checkUsername.message);
                    }
                    else{
                        axios.post("http://localhost:8081/register", reqBody);
                        this.props.history.push("/login");
                    }
                }
            )
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <div className="registration">
                <a className="linkToPages" href="/">Home</a>
                <h2>Create an account. All fields are required.</h2>
                <form className="form" onSubmit={this.passwordMatch}>
                    <label>
                        Username: <input value={this.state.username} type="text" name="username" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        First Name: <input value={this.state.firstName} type="text" name="firstName" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        Last Name: <input value={this.state.lastName} type="text" name="lastName" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        Street: <input value={this.state.street} type="text" name="street" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        City: <input value={this.state.city} type="text" name="city" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        State: <select value={this.state.state} name="state" onChange={e => this.handleChange(e)} required>
                            <option value="CA">CA</option>
                            <option value="FL">FL</option>
                            <option value="MA">MA</option>
                            <option value="NJ">NJ</option>
                            <option value="NY">NY</option>
                            <option value="PA">PA</option>
                            <option value="TX">TX</option>
                            <option value="WA">WA</option>
                        </select>
                    </label>
                    <label>
                        Zip: <input value={this.state.zip} type="text" pattern="[0-9]{5}" maxLength="5" name="zip" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        Phone #: <input value={this.state.phone} type="text" pattern="\d{3}[\-]\d{3}[\-]\d{4}" maxLength="12" placeholder="(XXX-XXX-XXXX)" name="phone" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        Email: <input value={this.state.email} type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}" name="email" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        Password: <input value={this.state.password} type="password" name="password" minLength="8" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <label>
                        Confirm Password: <input value={this.state.confirmedPassword} type="password" name="confirmedPassword" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <input type="submit" value="Register"/>
                </form>
                
                <p>Already have an account? Please <a href="login">log in</a></p>
            </div>
        );
    }
}

export default withRouter(Registration);