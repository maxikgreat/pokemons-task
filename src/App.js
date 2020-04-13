import React, {useEffect} from 'react';
//styles
import './scss/styles.scss'
//router
import {Route, Switch, Redirect} from 'react-router-dom'
//components
import {NavbarCustom} from "./components/UI/NavbarCustom";
import {Listing} from "./pages/listing";
import {Pokemon} from "./pages/pokemon";
import {AbilitiesList} from "./pages/abilitiesList";
import {Ability} from "./pages/ability";
//icons
import {
    faTimesCircle,
    faMeteor,
    faSadCry,
    faStar,
    faSmile,
    faHeartbeat,
    faWind,
    faFireAlt,
    faShieldAlt,
    faBackward,
    faForward,
    faBabyCarriage,
    faStarHalfAlt,
    faMapPin,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {useDispatch, useSelector} from "react-redux";
import {fetchAbilities} from "./redux/abilities/abilitiesState";
import {fetchList} from "./redux/pokemons/listingState";
import {hideAlert, showAlert} from "./redux/alert/alertState";
library.add(faTimesCircle, faMeteor, faSadCry, faStar, faSmile,
    faHeartbeat, faWind, faFireAlt, faShieldAlt, faBackward,
    faForward, faBabyCarriage, faStarHalfAlt, faMapPin, faArrowRight);

function App() {

    const dispatch = useDispatch();
    const listing = useSelector(state => state.listing);

    useEffect(() => {
        if(listing.ready){
            dispatch(fetchAbilities());
            dispatch(fetchList(listing.count, {showAlert, hideAlert}))
        }
    }, [listing.ready]);

    return(
        <>
            <header>
                <NavbarCustom />
            </header>
            <main>
                <Switch>
                    <Route path={'/'} exact component={Listing}/>
                    <Route path={'/pokemon/:id'} component={Pokemon} />
                    <Route path={'/abilities'} component={AbilitiesList} />
                    <Route path={'/ability/:id'} component={Ability} />
                    <Redirect to={'/'}/>
                </Switch>
            </main>
        </>
    )
}

export default App;
