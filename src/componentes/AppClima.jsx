import React from 'react'
import Formulario from './Formulario'
import ShowWeather from './ShowWeather'
import useClima from '../hooks/useClima';


const AppClima = () => {

  const {weatherAnswer} = useClima();


  return (
    <>
     <main className='dos-columnas' >
        <Formulario />
        {weatherAnswer?.name && <ShowWeather />}
        
     </main>
    </>
  )
}

export default AppClima
