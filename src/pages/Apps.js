import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import "./styles.css"; // Assuming the common styles are in this file

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true); // Toggle between login and register pages

  const handleLogin = (email) => {
    setUser(email);
  };

  return (
    <div>
      {user ? (
        <div className="user-info">
          <p>Welcome, {user}!</p>
        </div>
      ) : (
        <div>
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register onLogin={handleLogin} />
          )}
          <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "Need to Register?" : "Already have an account? Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
