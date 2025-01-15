import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London"); // Default city
  const [error, setError] = useState("");

  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError("");
      } catch (err) {
        setError("Error fetching weather data. Please try again.");
        setWeatherData(null);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    // Trigger fetchWeather again when city changes
    setCity(city);
  };

  return (
    <div>
      <h1>Current Weather</h1>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>
            Temperature: <strong>{weatherData.main.temp}°C</strong>
          </p>
          <p>
            Description: <strong>{weatherData.weather[0].description}</strong>
          </p>
          <p>
            Humidity: <strong>{weatherData.main.humidity}%</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
