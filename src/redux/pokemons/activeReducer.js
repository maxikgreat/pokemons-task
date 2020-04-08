
import {HIDE_LOADER, SET_ACTIVE_POKEMON, SHOW_LOADER} from "../actionTypes";

const initialState = {
    loading: true,
    activePokemon: {}
};

export const activeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
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
        case SET_ACTIVE_POKEMON:
            return{
                ...state,
                activePokemon: payload
            };
        default:
            return state
    }
};