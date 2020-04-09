
import {combineReducers} from "redux";
import {alertReducer} from "./alert/alertReducer";
import {listingReducer} from "./pokemons/listingReducer";
import {activeReducer} from "./pokemons/activeReducer";
import {abilitiesReducer} from "./abilities/abilitiesReducer";

export const rootReducer = combineReducers({
    alert: alertReducer,
    listing: listingReducer,
    pokemon: activeReducer,
    ability: abilitiesReducer
});