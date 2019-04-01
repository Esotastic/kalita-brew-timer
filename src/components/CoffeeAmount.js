import React from "react";

class CoffeeAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeGrams: 0
    };
  }

  handleChange(event) {
    this.setState({
      coffeeGrams: event.target.value
    });
  }



  render () {
    return (
      <div>
        <h1>Brew Setup</h1>
        <h3>How much ground coffee are you using?</h3>
        <p>Amount of ground coffee in grams: <input value={this.state.coffeeGrams} onChange = {this.handleChange.bind(this)}></input></p>
        <h3>Total Amount of Water: {(this.state.coffeeGrams * 15)}mL </h3>
        <p>Bloom Phase: {(this.state.coffeeGrams * 2)}mL</p>
        <p>Main Phase: {(this.state.coffeeGrams * 13)}mL</p>
      </div>
    )
  }
}

export default CoffeeAmount; 