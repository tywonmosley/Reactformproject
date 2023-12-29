import React, { useState } from 'react';
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

function App() {
  // State variable to store the token
  const [token, setToken] = useState(null);

  // Function to update the token state
  const handleSetToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <div>
        {/* Pass the setToken function to SignUpForm */}
        <SignUpForm setToken={handleSetToken} />
        
        {/* Pass the token as a prop to Authenticate */}
        <Authenticate token={token} />
      </div>
    </>
  );
}

export default App;