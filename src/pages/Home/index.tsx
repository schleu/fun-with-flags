import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'

import { ContryList, Filter } from './style'
import { client } from '../../config/client-graphql'

interface iCountries {
    alpha3Code: string;
    name: string;
    capital: string;
    flag: {
        svgFile: string;
    }
}
const Home = (): JSX.Element => {
    const [countries, setCountries] = useState<iCountries[]>([])
    const [filteredCountries, setFilteredCountries] = useState<iCountries[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [filteredCountry, setFilteredCountry] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadCountries() {
            const countries = await client.query({
                query: gql`
                    query{
                        Country {
                            name
                            alpha3Code
                            capital
                            flag {
                                svgFile
                            }
                        }
                    }
                `
              })
            setCountries(countries.data['Country'])
        }

        loadCountries()
    },[])

    useEffect(()=>{
        filterCountry(filteredCountry)
    },[countries])

    const filterCountry = (name: string) => {
        console.log(countries)
        if(name !== ''){

            const filteredCountries = countries.filter(country => {
                return country.name.toLowerCase().startsWith(filteredCountry)
            })
        
            setFilteredCountries(filteredCountries);
        }else{
            setFilteredCountries(countries);
        }

        setFilteredCountry(name)
    }

    const handleCountry = (alpha3Code: string) => {
        setSelectedCountry(alpha3Code)
    }


    return(
        <>
            <Filter>
                <input 
                    value={filteredCountry}
                    id="filter" 
                    type="search"
                    placeholder="Filter" 
                    onChange={(e: React.FormEvent<HTMLInputElement>)=>{filterCountry(e.currentTarget.value)}}
                />
                {selectedCountry}
            </Filter>
            
            <ContryList>
                {filteredCountries.map(country => {
                    return (
                        <li
                            key={country.alpha3Code}
                        >
                            <Link to={country.alpha3Code}>
                                <img src={country.flag.svgFile} alt={country.name} />
                                <footer>
                                    <div>
                                        <strong>Name:</strong>
                                        {country.name}
                                    </div>
                                    <div>
                                        <strong>Capital:</strong>
                                        {country.capital}
                                    </div>
                                </footer>
                            </Link>
                        </li>
                    )
                })}
            </ContryList>
        </>
    )
}

export default Home