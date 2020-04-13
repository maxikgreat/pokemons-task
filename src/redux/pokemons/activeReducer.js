
import {
    GET_POKEMON_ABILITIES,
    HIDE_LOADER_POKEMON,
    SET_ACTIVE_POKEMON,
    SET_POKEMON_ERROR,
    SHOW_LOADER_POKEMON,
    CLEAR_POKEMON_ERROR,
    GET_EVOLUTION_CHAIN
} from "../actionTypes";

const initialState = {
    error: '',
    loading: true,
    id: null,
    name: '',
    base_exp: null,
    sprites: null,
    stats: [],
    species: {},
    abilities: [],
    evolutionChain: []
};

export const activeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POKEMON_ERROR:
            return{
                ...state,
                error: payload
            };
        case CLEAR_POKEMON_ERROR:
            return {
                ...state,
                error: ''
            }
        case SHOW_LOADER_POKEMON:
            return{
                ...state,
                loading: true
            };
        case HIDE_LOADER_POKEMON:
            return{
                ...state,
                loading: false
            };
        case SET_ACTIVE_POKEMON:
            return{
                ...state,
                id: payload.id,
                name: payload.name,
                base_exp: payload.base_exp,
                sprites: payload.sprites,
                stats: payload.stats,
                species: payload.species
            };
        case GET_POKEMON_ABILITIES:
            return{
                ...state,
                abilities: payload
            };
        case GET_EVOLUTION_CHAIN:
            return{
                ...state,
                evolutionChain: payload
            };
        default:
            return state
    }
};