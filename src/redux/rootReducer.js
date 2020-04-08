
import {combineReducers} from "redux";
import {alertReducer} from "./alert/alertReducer";
import {listingReducer} from "./pokemons/listingReducer";
import {activeReducer} from "./pokemons/activeReducer";

export const rootReducer = combineReducers({
    alert: alertReducer,
    listing: listingReducer,
    pokemon: activeReducer
});