import React from 'react';
import ReactDOM from 'react-dom';

import PiggyBank from './components/PiggyBank';

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Big Al's piggybank" owner="Big Al" />,
    document.getElementById('app')
  );
}

