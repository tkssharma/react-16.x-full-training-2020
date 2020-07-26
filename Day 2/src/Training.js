import React from 'react';
import './App.css';

class Training extends React.Component {
  state = {
      active: false
  }
  clickHandler(){
      const { price, addTotal} = this.props;
     this.setState({ active : !this.state.active}, () => {
        addTotal(this.state.active ? price: -price)
     });
  }
  render() {
      const {name, price} = this.props;
      const {active} = this.state;
    return (
        <p className={active ? 'active' : '' }
        onClick={() => this.clickHandler()}>
            {name} <b>${price.toFixed(2)}</b>
        </p>
    );
  }
}

export default Training;
