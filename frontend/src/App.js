import React, { useState } from 'react';
import Login from './Login';
import Success from './Success';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Success onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
