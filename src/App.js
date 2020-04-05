import React from 'react';
import './scss/styles.scss'
import {Route, Switch, Redirect} from 'react-router-dom'
//components
import {Listing} from "./pages/listing";
import {Pokemon} from "./pages/pokemon";

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
