import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestPassword from './components/resetPassword';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RestPassword} />
      </Switch>
    </Router>
  );
}

export default App;
