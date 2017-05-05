import React from 'react';

class PiggyBank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      amount: 0
    }
  }

  addToSavings() {
    this.setState({
      total: this.state.total + this.state.amount
    })
  }

  subtractFromSavings() {
    this.setState({
      total: 0
    })
  }

  handleAmountChange(event) {
    this.setState({
      amount: parseInt(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.owner}</h3>
        <p>Total: £{this.state.total}</p>
        <input id="cash-amount" onChange={ (event) => {this.handleAmountChange(event) }}/>
        <button onClick={ () => { this.addToSavings() } }>Add</button>
        <button onClick={ () => { this.subtractFromSavings() } }>Subtract</button>
      </div>
    )
  }

}

export default PiggyBank;