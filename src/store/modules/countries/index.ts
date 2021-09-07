import { Reducer } from 'redux'
import { CountriesState, CountriesTypes } from './types'

const INITIAL_STATE: CountriesState = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<CountriesState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CountriesTypes.LOAD_REQUEST:
            return { ...state, loading: true }

        case CountriesTypes.LOAD_SUCCESS:
            return { 
                ...state, loading: true, error: false, data: action.payload.data
            }
        case CountriesTypes.LOAD_FAILURE:
            return { 
                ...state, loading: false, error:true, data: [] 
            }
        default:
            return state
    }
}

export default reducer