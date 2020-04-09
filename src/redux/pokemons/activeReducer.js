
import {HIDE_LOADER_POKEMON, SET_ACTIVE_POKEMON, SHOW_LOADER_POKEMON} from "../actionTypes";

const initialState = {
    loading: true,
    activePokemon: {}
};

export const activeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
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
                activePokemon: payload
            };
        default:
            return state
    }
};