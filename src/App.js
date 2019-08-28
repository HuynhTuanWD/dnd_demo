import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormTemplate from './pages/form-template/form-template.component'
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/form-template" component={FormTemplate} />
        <Redirect to="/form-template" />
      </Switch>
    </div>
  );
};

export default App;
