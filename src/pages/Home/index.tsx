import React, { useEffect, useState } from 'react'

import { ContryList } from './style'

interface iCountries {
    alpha2Code: string;
    name: string;
    capital: string;
    flag: {
        svgFile: string;
    }
}

const Home = (): JSX.Element => {

    const [countries, setCountries] = useState<iCountries[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')

    useEffect(() => {
        async function loadCountries() {
            setCountries([{
                name: "Afghanistan",
                alpha2Code: "AF",
                capital: "Kabul",
                flag: {
                    svgFile: "https://restcountries.eu/data/afg.svg"
                }
            },
            {
                name: "Åland Islands",
                alpha2Code: "AX",
                capital: "Mariehamn",
                flag: {
                    svgFile: "https://restcountries.eu/data/ala.svg"
                }
            },
            {
                name: "Albania",
                alpha2Code: "AL",
                capital: "Tirana",
                flag: {
                    svgFile: "https://restcountries.eu/data/alb.svg"
                }
            },
            {
                name: "Algeria",
                alpha2Code: "DZ",
                capital: "Algiers",
                flag: {
                    svgFile: "https://restcountries.eu/data/dza.svg"
                }
            },
            {
                name: "American Samoa",
                alpha2Code: "AS",
                capital: "Pago Pago",
                flag: {
                    svgFile: "https://restcountries.eu/data/asm.svg"
                }
            },
            {
                name: "Andorra",
                alpha2Code: "AD",
                capital: "Andorra la Vella",
                flag: {
                    svgFile: "https://restcountries.eu/data/and.svg"
                }
            },
            {
                name: "Angola",
                alpha2Code: "AO",
                capital: "Luanda",
                flag: {
                    svgFile: "https://restcountries.eu/data/ago.svg"
                }
            },
            {
                name: "Anguilla",
                alpha2Code: "AI",
                capital: "The Valley",
                flag: {
                    svgFile: "https://restcountries.eu/data/aia.svg"
                }
            },
            {
                name: "Antarctica",
                alpha2Code: "AQ",
                capital: "",
                flag: {
                    svgFile: "https://restcountries.eu/data/ata.svg"
                }
            },
            {
                name: "Antigua and Barbuda",
                alpha2Code: "AG",
                capital: "Saint John's",
                flag: {
                    svgFile: "https://restcountries.eu/data/atg.svg"
                }
            },
            {
                name: "Argentina",
                alpha2Code: "AR",
                capital: "Buenos Aires",
                flag: {
                    svgFile: "https://restcountries.eu/data/arg.svg"
                }
            }])
        }

        loadCountries()
    })

    const handleCountry = (alpha2Code: string) => {
        setSelectedCountry(alpha2Code)
    }

    return (
        <ContryList>
            {countries.map(country => {
                return (
                    <li
                        key={country.alpha2Code}
                        onClick={() => handleCountry(country.alpha2Code)}
                    >
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
                    </li>
                )
            })}
        </ContryList>
    )
}

export default Home