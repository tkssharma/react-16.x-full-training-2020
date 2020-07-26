import React from 'react';
import './App.css';
import Training from './Training';
class App extends React.Component {
  state = {
    total: 0
  }
  addTotal(price) {
    this.setState({
      total: this.state.total + price
    })
  }
  render() {
    const { trainings } = this.props;
    return (
      <>
        <h1>Our Trainings</h1>
        {
          trainings.map((i, index) => {
            return <Training addTotal={(price) => this.addTotal(price)}
              name={i.name}
              price={i.price}
              key={index}
              active={i.ative} />
          })
        }
        <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
      </>
    );
  }
}

export default App;
