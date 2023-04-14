import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation logic here, e.g., checking if the username and password are correct

    // If validation is successful, you can redirect to another page or perform other actions
    // For this example, let's just show an error message if the form is submitted without any data
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
    } else {
      setErrorMessage('');
      // Perform the login logic here, e.g., make an API call to authenticate the user
      // You can also use a state management library like Redux to handle the authentication state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
