// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './Components/AuthLogin/Login';
import WeatherApp from './Components/WeatherApplication/WeatherApp';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <WeatherApp/>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default App;
