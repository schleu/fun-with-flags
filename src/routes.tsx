import { Switch, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Country from "./pages/Country"
import EditCountry from "./pages/EditCountry"

const Routes = (): JSX.Element => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:alpha3Code/edit" component={EditCountry} />
            <Route path="/:alpha3Code" component={Country} />
        </Switch>
    );
};

export default Routes;