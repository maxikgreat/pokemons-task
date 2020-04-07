
import {combineReducers} from "redux";
import {alertReducer} from "./alert/alertReducer";
import {pokemonsReducer} from "./pokemons/pokemonsReducer";

export const rootReducer = combineReducers({
    alert: alertReducer,
    pokemons: pokemonsReducer
});