import React, { useState } from 'react'
import UseClima from '../hooks/useClima';

const Formulario = () => {

    const {search, dataSearch, requestWeather} = UseClima()

    const {city, country } = search;

    const [errorMsg, setErrorMsg] = useState("")

  function handleSubmit (e) {
    e.preventDefault();
    if (Object.values(search).includes("")){
        setErrorMsg("All fields are mandatory")
        return
    }
    setErrorMsg("")
    requestWeather(search)
  }

  return (
    <div className='contenedor'>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    name="city" 
                    id="city" 
                    value={city}
                    onChange={dataSearch}
                />
            </div>
            <div className="campo">
                <label htmlFor="country">Pais</label>
                <select 
                    name="country" 
                    id="country"
                    value={country}
                    onChange={dataSearch}
                    >
                    <option value="">Select a country</option>
                    <option value="US">USA</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <input type="submit" value="Check weather"/>

        </form>
    </div>
  )
}

export default Formulario
