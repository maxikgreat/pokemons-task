import {
    FETCH_MAIN_LIST, GET_ACTIVE_POKEMON,
    GET_MAX_COUNT,
    HIDE_ALERT,
    HIDE_LOADER,
    READY_TO_LOAD,
    SET_POKEMONS_COUNT,
    SHOW_ALERT,
    SHOW_LOADER
} from "../actionTypes";


const initialState = {
    ready: false,
    maxCount: null,
    count: 20, // default
    loading: true,
    listing: [],
    activePokemon: null
};


export const pokemonsReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SHOW_LOADER:
            return{
                ...state,
                loading: true
            };
        case HIDE_LOADER:
            return{
                ...state,
                loading: false
            };
        case READY_TO_LOAD:
            return{
                ...state,
                ready: true
            };
        case SET_POKEMONS_COUNT:
            return{
                ...state,
                count: payload
            };
        case GET_MAX_COUNT:
            return{
                ...state,
                maxCount: payload
            };
        case FETCH_MAIN_LIST:
            return{
                ...state,
                listing: payload
            };
        case GET_ACTIVE_POKEMON:
            return {
                ...state,
                activePokemon: payload
            };
        default:
            return state
    }
};