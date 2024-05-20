import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Interface from '..Interface/Interface';
/*import LoginForm from '../LoginForm/LoginForm';*/

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Interface}/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;


/*import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;*/


/*import LoginForm from './Components/LoginForm/LoginForm.jsx';


function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;*/