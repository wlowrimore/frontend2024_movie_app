'use client'

import { useState, useEffect } from 'react'
import { GetCountries } from '../data-fetching/countryData'

const CountriesDropdown = ({ handleSelectCountry }) => {
  const [countries, setCountries] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getAllCountries = async () => {
      const countries = await GetCountries()
      setCountries(countries);
    }
    getAllCountries()
  }, [])

  const showDropdown = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <select onChange={handleSelectCountry} onClick={showDropdown} className='w-full p-2 border-2 border-zinc-300 rounded-lg cursor-pointer'>
        <option value="">Select Country</option>
        {countries && countries.map((country, index) => (
          <option key={index} value={country.english_name}>{country.english_name}</option>
        ))}
      </select>
    </div>
  )
}

export default CountriesDropdown