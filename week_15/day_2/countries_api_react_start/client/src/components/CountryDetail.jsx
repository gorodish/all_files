import React from 'react';

class CountryDetail extends React.Component {
  render(){
    if(!this.props.country){
      return null;
    }

    return (
      <div>
      <h3>
        {this.props.country.name}

      </h3>
        
      <p>{this.props.country.nativeName}</p>
      <p>{this.props.country.area}</p>
      <p>{this.props.country.capital}</p>
      <img src={this.props.country.flag} />
      </div>
    );
  }
}

module.exports = CountryDetail;
