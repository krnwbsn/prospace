import React from 'react';
import router from './router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {router.map(item => <Route key={item.name} {...item} />)}
      </Switch>
    </Router>
  );
};

export default Routes;