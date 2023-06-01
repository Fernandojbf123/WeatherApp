import React from 'react'
import useClima from '../hooks/useClima';

const ShowWeather = () => {

    const {weatherAnswer} = useClima();

    const {name: city, main} = weatherAnswer
    const temperature = main.temp-273.14;
    const feelsLike = main.feels_like-273.14;
    const humidity = main.humidity;



  return (
    <div className='contenedor'>
      <h2>The weather from {city} is:</h2>
      <p>Temperature: {temperature.toFixed(2)} ºC</p>
      <p>Feel: {feelsLike.toFixed(2)} ºC</p>
      <p>Humidity: {humidity.toFixed(0)} %</p>
    </div>
  )
}

export default ShowWeather
