import './App.css';
import React from 'react';
import Header from './components/header/header';
import WeatherCard from './components/weatherCard/weatherCard';


function App() {
  return (
    <div>
      <Header />
      <WeatherCard city="" />
    </div>
  );
}

export default App;





