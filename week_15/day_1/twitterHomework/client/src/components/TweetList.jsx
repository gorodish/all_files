import React from 'react';
import Tweet from './Tweet';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tweetComponents = this.props.tweets.map((tweet) => {
      return (
          <Tweet username={tweet.username} key={tweet.id}>
          {tweet.text}
          </Tweet>
        )
    })
    return(
      <div>{tweetComponents}</div>
      )
  }
}

export default TweetList;