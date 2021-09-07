import {action} from 'typesafe-actions'

import {CountriesTypes, Country} from './types'


export const loadRequest = () => action(CountriesTypes.LOAD_REQUEST)

export const loadSuccess = (data: Country[]) => action(CountriesTypes.LOAD_SUCCESS, data)

export const loadFailure = () => action(CountriesTypes.LOAD_FAILURE)