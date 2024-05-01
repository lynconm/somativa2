import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/principal" component={Principal} />
        <Route path="/" component={Cadastro} />
      </Switch>
    </Router>
  );
};

export default Routes
