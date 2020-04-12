import {
    FETCH_ABILITIES_LIST,
    SHOW_LOADER_ABILITIES,
    HIDE_LOADER_ABILITIES,
    SET_ABILITY_ERROR,
    CLEAR_ABILITY_ERROR,
    SET_ACTIVE_ABILITY, SHOW_LOADER_ABILITY, HIDE_LOADER_ABILITY,
    GET_POKS_WITH_ABILITY
} from "../actionTypes";

const initialState = {
    error: '',
    loading: true,
    loadingAbility: true,
    listing: [],
    activeAbility: {},
    poksWithAbilities: []
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
        case SHOW_LOADER_ABILITY:
            return{
                ...state,
                loadingAbility: true
            };
        case HIDE_LOADER_ABILITY:{
            return{
                ...state,
                loadingAbility: false
            }
        }
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
        case GET_POKS_WITH_ABILITY:
            return{
                ...state,
                poksWithAbilities: payload
            };
        default:
            return state
    }
};