import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import PageContainer from '../shared/hoc/PageContainer'
import { useApiKey } from '../shared/store/api-key/ApiKeyContext'

interface ConfigFormData {
  apiKey: string;
}

const AppConfig = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { key, setKey } = useApiKey();
  const [ inputApiKey, setInputApiKey ] = useState(key)

  const onSubmit = (data: ConfigFormData) => setKey(data.apiKey)

  return (
    <PageContainer>
      <form onSubmit={event => event.preventDefault()} className='md:mt-4 md:w-2/3'>
        <h1 className='text-xl pb-6'>Change configs</h1>
        <input type='string' {...register('apiKey', { required: true })}
               className='rounded text-black w-full h-8 text-lg'
               value={inputApiKey}
               onChange={event => setInputApiKey(event.target.value)}
        />
        {errors.exampleRequired && <span>API key is required</span>}
        <button type='submit'
                className='md:mt-4 md:mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleSubmit(onSubmit)}
        >Save configs</button>
      </form>
    </PageContainer>
  )
}

export default AppConfig
