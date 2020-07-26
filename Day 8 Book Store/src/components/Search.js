import React, { Component } from "react";
import axios from "axios";

class Search extends Component{
    constructor(props){
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = {
            query: "",
            result: [],
            cartTotal: 0,
            cartItems: [],
            accNo: user["accountNumber"]
        }

        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount(){
        document.title = "Search";
        axios.get(`http://localhost:8081/cartCount?acctNumber=${this.state.accNo}`)
        .then((response) => this.setState({cartTotal: response.data}))
        .catch(console.error());
    }

    handleChange = ({target: {value}}) => {
        this.setState({query: value});
        axios.get("http://localhost:8081/search?searchTerm=" + this.state.query)
        .then(results => {
            this.setState({
                result: results.data
            })
        })
        .catch(console.error());
    }

    addToCart = (props) => {
        axios.get(`http://localhost:8081/addToCart?acctNumber=${this.state.accNo}&isbn=${props.isbn}`)
        .then(
            axios.get(`http://localhost:8081/cartCount?acctNumber=${this.state.accNo}`)
            .then((response) => {alert(props.isbn + " Added to cart"); this.setState({cartTotal: response.data})})
            .catch(console.error())
        )
        .catch(console.error());
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
                <a className="linkToPages" id="cartLink" href="/cart">Cart: {this.state.cartTotal}</a>
                <form className="form">
                    <label>
                        Search: <input value={this.state.query} type="text" onChange={this.handleChange} name="query" />
                    </label>
                </form>
                <div className="table">
                    {this.state.result.map(r => (
                        <div id="results" className="row" key={r.isbn}>
                            <div className="bookInfo">{r.title} by {r.author} {r.price}</div>
                            <div className="cartButton"><button onClick={() => this.addToCart(r)}>Add to Cart.</button></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Search;