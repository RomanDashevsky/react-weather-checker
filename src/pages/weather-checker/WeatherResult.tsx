import React, { useEffect, useState } from 'react'
import { useApiKey } from '../shared/store/api-key/ApiKeyContext'
import { useCity } from './CityContext'
import axios from 'axios'

interface WeatherResultResponse {
  main: {
    temp: number;
    feels_like: number;
  }
}

export const useWeatherResult = (): WeatherResultResponse | undefined => {
  const [result, setResult] = useState<WeatherResultResponse>()

  const { key } = useApiKey()
  const { city } = useCity()

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      setResult(response.data)
    }

    getWeather();
  }, [city, key])

  return result
}

export const WeatherResult = () => {
  const result = useWeatherResult()
  const { city } = useCity()

  if (!result) return null

  return (
    <div className='block md:mt-4 md:w-2/3'>
      <h1 className='text-xl pb-6'><span className='font-bold'>City: </span><span className='capitalize'>{city}</span></h1>
      <h3 className='text-sm pb-2'><span className='font-bold'>Temp: </span>{result.main.temp}</h3>
      <h3 className='text-sm'><span className='font-bold'>Feels like: </span>{result.main.feels_like}</h3>
    </div>
  )
}
