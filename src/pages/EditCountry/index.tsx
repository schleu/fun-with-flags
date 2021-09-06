import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContryList } from './style'

import { client } from '../../config/client-graphql'
import gql from 'graphql-tag'
import { Form } from '@unform/web'


interface iCountry {
    alpha3Code: string;
    name: string;
    capital: string;
    area: number;
    population: number;
    flag: {
        svgFile: string;
    }
    topLevelDomains: {
        name: string;
    }
    location: {
        latitude: string;
        longitude: string;
    }
}

interface iParam{
    alpha3Code:string;   
}

const EditCountry = (): JSX.Element => {

    const [country, setCountry] = useState<iCountry>()

    const { alpha3Code } = useParams<iParam>();
    const formRef = useRef<iCountry>(null);


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

    const handleSubmit = useCallback(
        async(data:iCountry) => {
        
        },
        []
    );

    return (
        <>
            <ContryList>
                <section>
                    <header>
                        <img src={country?.flag.svgFile} alt={country?.name} />
                    </header>

                    <Form  onSubmit={handleSubmit} initialData={country}>
                        <div className="title"> {country?.name} ({country?.alpha3Code}) </div>
                        <div>
                            <label htmlFor="capital">Capital:</label>
                            <input type="text" placeholder="Capital" name="capital" id="capital" value={country?.capital}/>
                        </div>
                        <div>
                            <label htmlFor="area">Área:</label>
                            <input type="text" placeholder="Área" name="area" id="area" value={country?.area}/>
                        </div>
                        <div>
                            <label htmlFor="population">População:</label>
                            <input type="text" placeholder="População" name="population" id="population" value={country?.population}/>
                        </div>
                        <div>
                            <label htmlFor="topLevelDomains">Domínios:</label>
                            <input type="text" placeholder="Domínios" name="topLevelDomains" id="topLevelDomains" value={country?.topLevelDomains.name}/>
                        </div>
                        <div>
                            <label htmlFor="latitude">Latitude:</label>
                            <input type="text" placeholder="Latitude" name="latitude" id="latitude" value={country?.location.latitude}/>
                        </div>
                        <div>
                            <label htmlFor="longitude">Longitude:</label>
                            <input type="text" placeholder="Longitude" name="longitude" id="longitude" value={country?.location.longitude}/>
                        </div>
                    </Form>

                    <footer>
                        <button type="submit">
                            Salvar
                        </button>
                    </footer>
                </section>
            </ContryList>
        </>
    )
}

export default EditCountry