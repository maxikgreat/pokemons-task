import {
    FETCH_ABILITIES_LIST,
    SHOW_LOADER_ABILITIES,
    HIDE_LOADER_ABILITIES,
    SET_ABILITY_ERROR,
    CLEAR_ABILITY_ERROR,
    SET_ACTIVE_ABILITY
} from "../actionTypes";

const initialState = {
    error: '',
    loading: true,
    listing: [],
    activeAbility: {}
};

export const abilitiesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ABILITY_ERROR:
            return{
                ...state,
                error: payload
            };
        case CLEAR_ABILITY_ERROR:
            return{
                ...state,
                error: ''
            };
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
        case SET_ACTIVE_ABILITY:
            return{
                ...state,
                activeAbility: payload
            };
        default:
            return state
    }
};