import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About'

function App() {
  return (
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route exact  path="/about" component={About} />
    </Switch>
  );
}

export default App;
