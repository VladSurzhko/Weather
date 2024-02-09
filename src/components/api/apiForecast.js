import axios from 'axios';

const apiKey = "820290b87322a7c3595da95c899c3746"; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeatherForecast = async (city) => {
  try {
    const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast data:', error);
    throw error;
  }
};

export { getWeatherForecast };