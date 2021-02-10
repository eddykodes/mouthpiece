import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './app/Layout';
import Login from './app/Login';
import SinglePost from './features/posts/SinglePost';
import Example from './pages/Example';
import Following from './pages/Following';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/example' component={Example} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/posts/:postId' component={SinglePost} />
          <Route exact path='/posts' component={Following} />
          <Route exact path='/' component={Index} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
