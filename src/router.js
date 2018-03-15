import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/login/index';
import Userlist from './routes/userlist/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
    
           <Route path="/userlist" exact component={Userlist} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
