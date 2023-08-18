import React, { useState } from 'react'
import './SearchForm.sass'
import SearchSvg from '../../icons/SearchSvg'
import LocationSvg from '../../icons/locationSvg'

interface SearchFormProps {
  onSearch: (city: string, useGeoLocation: boolean) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState('')
  const [useGeoLocation, setUseGeoLocation] = useState(false)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(city, useGeoLocation)
  }
  const handleGeoLocationClick = async () => {
    if (useGeoLocation) {
    } else {
      const response = await window.navigator.permissions.query({ name: 'geolocation' })
      if (response.state === 'granted' || response.state === 'prompt') {
        setUseGeoLocation(true)
      } else {
        alert('Please grant permission for geolocation to use this feature.')
      }
    }
  }
  return (
    <form onSubmit={handleSearch} className="search_form">
      <div className="search_form__search">
        <button type="submit" className="button-submit">
          <SearchSvg />
        </button>
        <input
          type="search"
          name="searchQuery"
          placeholder="Oyonnax..."
          aria-label="Cherchez la météo par ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="button-location" type="button" onClick={handleGeoLocationClick}>
          <LocationSvg />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
