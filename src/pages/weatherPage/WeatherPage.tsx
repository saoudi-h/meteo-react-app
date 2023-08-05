import React, { useEffect, useState } from 'react'
import './WeaterPage.css'
import FormWeather from '../../components/formWeather/FormWeather'
import WeatherByCity from '../../repository/WeatherByCity';

const WeatherPage = () => {
    const [city, setCity] = useState<string>('');
    const [result, setresult] = useState<any>();
    const tokenApi = process.env.REACT_APP_WEATHER_TOKEN || '';
    const weatherByCity: WeatherByCity = new WeatherByCity(tokenApi);
    useEffect(() => {
        if (city !== "")
            weatherByCity.getWeather(city);
    }, [city]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchQuery = formData.get('searchQuery')?.toString() || "";
        if (searchQuery !== "") {
            setCity(searchQuery);
            console.log("submited");
        }
    }

    return (
        <>
            <FormWeather onSubmit={handleSubmit} />
            <div>
                {result}
            </div>
        </>
    )
}

export default WeatherPage