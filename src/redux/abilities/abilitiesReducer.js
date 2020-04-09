import {GET_POKEMON_ABILITIES, FETCH_ABILITIES_LIST, SHOW_LOADER, HIDE_LOADER} from "../actionTypes";

const initialState = {
    loading: true,
    listing: []
};

export const abilitiesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ABILITIES_LIST:
            return{
                ...state,
                listing: payload
            };
        default:
            return state
    }
};