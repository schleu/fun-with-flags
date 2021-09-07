/**
 *  Action types
 */
export enum CountriesTypes{
    LOAD_REQUEST = '@countries/LOAD_REQUEST',
    LOAD_SUCCESS = '@countries/LOAD_SUCCESS',
    LOAD_FAILURE = '@countries/LOAD_FAILURE'
}

/**
 *  Action types
 */
export interface Country{
    alpha3Code: string;
    name: string;
    capital: string;
    flag: {
        svgFile: string;
    }
}

/**
 *  Action types
 */

export interface CountriesState{
    data: Country[];
    loading: boolean;
    error: boolean;
}