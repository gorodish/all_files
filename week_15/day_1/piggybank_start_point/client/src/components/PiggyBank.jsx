import React from 'react';

class PiggyBank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  addToSavings() {
    const input = document.getElementById("cash-amount");
    const amount = parseInt(input.value);
    this.setState({
      total: this.state.total + amount
    })
    input.value = "";
  }

  withdraw() {
    this.setState({
      total: this.state.total - 1
    })
  }

  render() {
    return(
        <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.owner}</h2>
        <p>Total: £{this.state.total}</p>
        
        <input id="cash-amount" />

        <button onClick={ () => { this.addToSavings() }}>Add</button>
        <button onClick={ () => { this.withdraw() }}>Withdraw £1</button>

        </div>
      )
  }
}

export default PiggyBank;