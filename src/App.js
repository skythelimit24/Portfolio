// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './Components/AuthLogin/Login';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
const text = localStorage.getItem("USERNAME")
  return (
    <>
      {isAuthenticated ? (
        <h1>Welcome{text} You are authenticated.</h1>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default App;
