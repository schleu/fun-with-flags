import React from 'react';
import { client } from '../config/client-graphql'
import { gql } from '@apollo/client';

export const GetCountry = () => {

  client.query({
    query: gql`
        query GetCountries() {
          Country() {
            name
            alpha3Code
            capital
            flag {
              svgFile
            }
          }
        }
    `
  }).then( (res)=> console.log(res));
}

