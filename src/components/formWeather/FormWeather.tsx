import React from 'react'
import './FormWeather.sass'

interface FormWeatherProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const FormWeather: React.FC<FormWeatherProps> = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="weather_form">
            <div className="weather_form__search">
                <input type="search" name="searchQuery" placeholder='Oyonnax...' aria-label="Search weather by City" />
            </div>
        </form>
    )
}

export default FormWeather