import React from 'react';
import './scss/styles.scss'
import {Route, Switch, Redirect} from 'react-router-dom'
//components
import {Listing} from "./pages/listing";
import {Pokemon} from "./pages/pokemon";
//icons
import {faTimesCircle, faMeteor, faSadCry} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
//animation

library.add(faTimesCircle, faMeteor, faSadCry);

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
