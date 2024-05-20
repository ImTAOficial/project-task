import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* Aquí puedes agregar más rutas como esta:
          <Route path="/otra-ruta" element={<OtroComponente />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*import LoginForm from './Components/LoginForm/LoginForm.jsx';

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Interface from '../Interface/Interface';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Interface}/>
      </Switch>
    </BrowserRouter>
  );
}*/
