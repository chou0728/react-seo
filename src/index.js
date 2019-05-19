import React from 'react';
// import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-snapshot';

const rootEl = document.getElementById('root');

  render(
    <HashRouter>
      <App/>
    </HashRouter>, 
    rootEl
  )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
