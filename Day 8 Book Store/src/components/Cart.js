import React, { Component } from "react";
import axios from "axios";

class Cart extends Component{
    constructor(props){
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = {
            books: [],
            accNo: user["accountNumber"]
        }
    }

    componentDidMount(){
        document.title = "Cart";
        axios.get(`http://localhost:8081/listItemsInCart?acctNumber=${this.state.accNo}`).then((response) => {this.setState({books: response.data.books})} );
    }

    removeItem(props){
        axios.get(`http://localhost:8081/removeFromCart?acctNumber=${this.state.accNo}&isbn=${props.isbn}`);   
    }

    totalCost(){
        let total = 0;
        this.state.books.forEach((book)=>{
            total += book.price;
        });

        return <div>${total}</div>
    }

    checkOut(){
        if (this.state.books.length !== 0){
            return <a className="linkToPages" href="/checkout">Check out.</a>
        }
        return <div></div>
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
                <p>Cart:</p>
                <div className="table">
                    {this.state.books.map(books => 
                        <div className="row" key={books.isbn}>
                            <div className="bookInfo">{books.title} by {books.author} {books.price}</div>
                            <div className="cartButton"><button onClick={() => this.removeItem(books)}>Remove</button></div>
                        </div>    
                    )}
                </div>
                {this.totalCost()}
                {this.checkOut()}
            </div>
        );
    }
}

export default Cart;