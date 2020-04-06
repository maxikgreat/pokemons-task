import React from 'react';
import './scss/styles.scss'
import {Route, Switch, Redirect} from 'react-router-dom'
//components
import {Listing} from "./pages/listing";
import {Pokemon} from "./pages/pokemon";
//icons
import {faTimesCircle, faMeteor} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faTimesCircle, faMeteor);

function App() {
    return(
        <main>
            <Switch>
                <Route path={'/'} exact component={Listing}/>
                <Route path={'/pokemon/:id'} component={Pokemon} />
                <Redirect to={'/'}/>
            </Switch>
        </main>
    )
}

export default App;
