import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {PokemonState} from "./context/pokemons/pokemonsState";

const app = (
    <BrowserRouter>
        <PokemonState>
            <App />
        </PokemonState>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
