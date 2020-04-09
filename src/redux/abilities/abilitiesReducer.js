import { FETCH_ABILITIES_LIST, SHOW_LOADER_ABILITIES, HIDE_LOADER_ABILITIES } from "../actionTypes";

const initialState = {
    loading: true,
    listing: [],
    activeAbility: {}
};

export const abilitiesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_LOADER_ABILITIES:
            return {
                ...state,
                loading: true
            };
        case HIDE_LOADER_ABILITIES:
            return{
                ...state,
                loading: false
            };
        case FETCH_ABILITIES_LIST:
            return{
                ...state,
                listing: payload
            };
        default:
            return state
    }
};