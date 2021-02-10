import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './app/Navbar'
import Example from './pages/Example';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/example' component={Example} />
        <Route exact path='/' component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
