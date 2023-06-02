import {useState, createContext} from 'react'
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

    const [search, setSearch] = useState({
        city: "",
        country: "",
    })

    let [weatherAnswer, setWeatherAnswer] = useState({})
    let [isLoading, setIsLoading] = useState(false)


    function dataSearch (e) {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    

    async function requestWeather (inputData) {
        setIsLoading(true)
        try {
            const {city, country} = inputData;
            const appId = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
            //get lon and lat
            const {data: coordinates} = await axios(url);
            const {lon, lat} = coordinates[0]
            //get weather
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const {data: weatherData} = await axios(urlWeather);
            setWeatherAnswer(weatherData)
            setIsLoading(false)
        } catch (error) {
            console.log(error) 
        }
    }

    return (
        <ClimaContext.Provider
            value ={{
                search,
                setSearch,
                dataSearch,
                requestWeather,
                weatherAnswer,
                isLoading,
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {ClimaProvider}

export default ClimaContext