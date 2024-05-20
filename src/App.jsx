import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import Interface from './Components/Interface/Interface.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="./Components/Interface/Interface" element={<Interface />} />
          {/* Aquí puedes agregar más rutas como esta:
          <Route path="/otra-ruta" element={<OtroComponente />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
