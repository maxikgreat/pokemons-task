import React, {useEffect} from 'react';
//styles
import './scss/styles.scss'
//router
import {Route, Switch, Redirect} from 'react-router-dom'
//components
import {Listing} from "./pages/listing";
import {Pokemon} from "./pages/pokemon";
import {AbilitiesList} from "./pages/abilitiesList";
import {Ability} from "./pages/ability";
//icons
import {faTimesCircle, faMeteor, faSadCry, faStar, faSmile, faHeartbeat, faWind, faFireAlt, faShieldAlt, faBackward, faForward, faBabyCarriage, faStarHalfAlt, faMapPin} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {useDispatch} from "react-redux";
import {fetchAbilities} from "./redux/abilities/abilitiesState";
library.add(faTimesCircle, faMeteor, faSadCry, faStar, faSmile, faHeartbeat, faWind, faFireAlt, faShieldAlt, faBackward, faForward, faBabyCarriage, faStarHalfAlt, faMapPin);

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAbilities());
    }, []);

    return(
        <main>
            <Switch>
                <Route path={'/'} exact component={Listing}/>
                <Route path={'/pokemon/:id'} component={Pokemon} />
                <Route path={'/abilities'} component={AbilitiesList} />
                <Route path={'/ability/:id'} component={Ability} />
                <Redirect to={'/'}/>
            </Switch>
        </main>
    )
}

export default App;
