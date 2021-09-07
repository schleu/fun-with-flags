import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContryList } from './style'

import { client } from '../../config/client-graphql'
import gql from 'graphql-tag'


interface iCountry {
    alpha3Code: string;
    name: string;
    capital: string;
    area: number;
    population: number;
    flag: {
        svgFile: string;
    };
    topLevelDomains: {
        name: string;
    };
    location: {
        latitude: string;
        longitude: string;
    };
}

interface iParam{
    alpha3Code:string;   
}

const Country = (): JSX.Element => {

    const [country, setCountry] = useState<iCountry>()

    const { alpha3Code } = useParams<iParam>();
    const editLink = `${alpha3Code}/edit`

    useEffect(() => {
        async function loadCountry() {
            const countries = await client.query({
                query: gql`
                    query{
                        Country(alpha3Code:"${alpha3Code}") {
                            name
                            alpha3Code
                            capital
                            area
                            population
                            flag {
                                svgFile
                            }
                            topLevelDomains {
                                name
                            }
                            location {
                                latitude
                                longitude
                            }
                        }
                    }
                `
            })
            setCountry(countries.data['Country'][0])
        }

        loadCountry()
    },[])

    return (
        <>
            <ContryList>
                <section>
                    <header>
                        <img src={country?.flag.svgFile} alt={country?.name} />
                    </header>

                    <aside>
                        <div className="title"> {country?.name} ({country?.alpha3Code}) </div>
                        <div>
                            <strong>Capital:</strong>
                            {country?.capital}
                        </div>
                        <div>
                            <strong>Área:</strong>
                            {country?.area}
                        </div>
                        <div>
                            <strong>População:</strong>
                            {country?.population}
                        </div>
                        <div>
                            <strong>Domínios:</strong>
                            {country?.topLevelDomains.name}
                        </div>
                        <div>
                            <strong>Latitude:</strong>
                            {country?.location.latitude}
                        </div>
                        <div>
                            <strong>Longitude:</strong>
                            {country?.location.longitude}
                        </div>
                    </aside>

                    <footer>
                        <Link to={editLink}>
                            Editar
                        </Link>
                    </footer>
                </section>
            </ContryList>
        </>
    )
}

export default Country