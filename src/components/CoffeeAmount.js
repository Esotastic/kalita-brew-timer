import React from "react";

class CoffeeAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeGrams: 0
    }
  }


  render () {
    return (
      <div>
        <h1>Brew Setup</h1>
        <h3>How much ground coffee are you using?</h3>
        <p>Amount of ground coffee in grams:</p>
        <h3>Water total per phase:</h3>
        <p>Bloom Phase:</p>
        <p>Main Phase:</p>
      </div>
    )
  }
}

export default CoffeeAmount; 