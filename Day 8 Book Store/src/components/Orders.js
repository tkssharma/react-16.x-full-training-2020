import React, { Component } from "react";
import axios from "axios";

class Orders extends Component{
    constructor(props){
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = {
            orders: [],
            accNo: user.accountNumber
        }
    }

    componentDidMount(){
        document.title = "Orders";
        axios.get(`http://localhost:8081/listOrders?acctNumber=${this.state.accNo}`).then(
            (data) => {
                this.setState({
                    orders: data.data
                })
            }
        )
        .catch(console.error());
    }

    listOfBooks(props){
        return(
            <ol>
                {props.books.map(item =>
                    <li key={item.number}>
                        {item.title}
                    </li>
                )}
            </ol>
        )
    }

    emptyOrder(){
        if (this.state.orders.length < 1){
            return <div></div>
        }
        return (
            <div className="table">
                {this.state.orders.map(item =>
                    <div className="row" key={item.orderNumber}>
                        {item.orderNumber} {item.orderTime} ${item.total}
                        {this.listOfBooks(item)}
                    </div>
                )}
            </div>
        )
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
                <p>Purchase History:</p>
                {this.emptyOrder()}
            </div>
        );
    }
}

export default Orders;