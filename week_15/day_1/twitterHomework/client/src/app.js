import React from 'react';
import ReactDOM from 'react-dom';

import Feed from './components/Feed';

window.onload = function(){
  ReactDOM.render(
    <Feed />,
    document.getElementById('app')
  );
}

