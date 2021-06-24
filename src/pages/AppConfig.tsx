import React from 'react'
import { useForm } from 'react-hook-form'

import PageContainer from './shared/PageContainer'

interface ConfigFormData {
  apiKey: string;
}

const AppConfig = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: ConfigFormData) => {
    console.log(data);
  }

  return (
    <PageContainer>
      <form onSubmit={event => event.preventDefault()} className='md:mt-4 md:w-2/3'>
        <input type='string' {...register('apiKey', { required: true })} className='rounded text-black w-full h-8 text-lg'/>
        {errors.exampleRequired && <span>API key is required</span>}
        <button type='submit' className='md:mt-4 md:mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit(onSubmit)}>Save configs</button>
      </form>
    </PageContainer>
  )
}

export default AppConfig
