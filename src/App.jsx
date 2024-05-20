import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import Interface from './Components/Interfaces/Interface.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Interfaces" element={<Interface />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
