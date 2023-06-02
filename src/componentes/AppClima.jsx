import React from 'react'
import Formulario from './Formulario'
import ShowWeather from './ShowWeather'
import useClima from '../hooks/useClima';
import ShowSpinner from './ShowSpinner';


const AppClima = () => {

  const {weatherAnswer, isLoading, msg, cityExist} = useClima();


  return (
    <>
     <main className='dos-columnas' >
        <Formulario />

        { isLoading ? <ShowSpinner /> : 
          weatherAnswer?.name && <ShowWeather /> 
        }
     </main>
    </>
  )
}

export default AppClima
