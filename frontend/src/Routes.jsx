import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login, Register, Profile, NewIncident } from './components';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/perfil" component={Profile} />
        <Route path="/casos/novo" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
