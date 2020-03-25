import React from 'react';
import ReacDOM from 'react-dom';
import Routes from './Routes';
import './refs/global.scss';

const App = () => {
  return(
    <Routes />
  );
}

ReacDOM.render(<App />, document.getElementById('root'));
