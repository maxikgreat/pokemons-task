import {
    FETCH_MAIN_LIST,
    GET_MAX_COUNT,
    HIDE_LOADER_LISTING,
    READY_TO_LOAD,
    SET_POKEMONS_COUNT,
    SHOW_LOADER_LISTING
} from "../actionTypes";


const initialState = {
    ready: false,
    maxCount: null,
    count: 300, // default
    loading: true,
    listing: []
};


export const listingReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SHOW_LOADER_LISTING:
            return{
                ...state,
                loading: true
            };
        case HIDE_LOADER_LISTING:
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
        default:
            return state
    }
};
