import { createStore, Store } from 'redux'
import { CountriesState } from './modules/countries/types'

import rootReducer from './modules/rootReducer'

export interface ApplicationState{
    countries: CountriesState
}

const store: Store<ApplicationState> = createStore(rootReducer)
export default store;