import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './app/Layout';
import Login from './app/Login';
import Example from './pages/Example';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/example' component={Example} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Index} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
