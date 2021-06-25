import React, { useState } from 'react'
import PageContainer from '../shared/hoc/PageContainer'
import { useForm } from 'react-hook-form'
import { useCity } from './CityContext'
import { useWeatherResult, WeatherResult } from './WeatherResult'

interface CityFormData {
  city: string;
}

const WeatherChecker = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { city, setCity } = useCity()
  const [ inputCIty, setInputCity ] = useState(city)
  const result = useWeatherResult()
  const onSubmit = (data: CityFormData) => setCity(data.city)

  return (
    <PageContainer>
      <form onSubmit={event => event.preventDefault()} className='md:mt-4 md:w-2/3'>
        <h1 className='text-xl pb-6'>Check the weather</h1>
        <label htmlFor='city'>City:</label>
        <input
          id='city'
          type='string' {...register('city', { required: true })}
          className='rounded text-black w-full h-8 text-lg'
          value={inputCIty}
          onChange={event => setInputCity(event.target.value)}
        />
        {errors.exampleRequired && <span>City is required</span>}
        <button type='submit'
                className='md:mt-4 md:mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleSubmit(onSubmit)}
        >Save configs</button>
      </form>

      <WeatherResult/>
    </PageContainer>
  )
}

export default WeatherChecker
