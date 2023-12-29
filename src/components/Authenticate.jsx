import React, { useState } from 'react';

export default function Authenticate({ token }) {
  // State variable for error handling
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle the authentication request
  const handleClick = async () => {
    try {
      // Your authentication logic here, using the token
      console.log("Token:", token);
      
      // Make API request to /authenticate using the token in the Authorization header
      const response = await fetch("https://your-api-url/authenticate", {
        method: "GET",
    headers: {
      "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      // Handle the response as per your application requirements
      const data = await response.json();
			setSuccessMessage(result.message);
      console.log("Authentication Response:", data);

    } catch (error) {
      // Handle errors
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}      
      {/* Conditionally render the error message */}
      {error && <p>Error: {error}</p>}
      
      {/* Button to trigger the authentication */}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
