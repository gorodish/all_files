import React from 'react';
import TweetList from './TweetList';

var sampleData = [
  {id: 1, username: 'Dave1999', realName: 'Dave', text: 'Went to the office today'},
  {id: 2, username: 'Virgil1991', realName: 'Scott', text: 'I drove Thunderbird 1 today'},
  {id: 3, username: 'Brains199', realName: 'Gordon', text: 'I wrote a program'},
  {id: 4, username: 'Tracy99', realName: 'Alan', text: 'My Thunderbird is bigger than yours'}
];

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    };
  }
  render() {
    return (
        <div>
          <h1>Tweets</h1>
          <TweetList tweets={this.state.data} />
        </div>
      )
  }
}

export default Feed;