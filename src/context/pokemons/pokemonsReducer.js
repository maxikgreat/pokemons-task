import {
    FETCH_MAIN_LIST,
    GET_MAX_COUNT,
    HIDE_ALERT,
    HIDE_LOADER,
    READY_TO_LOAD,
    SHOW_ALERT,
    SHOW_LOADER
} from "../types";


const handlers = {
    [SHOW_LOADER]: (state) => {return(
        {
            ...state,
            loading: true
        }
    )},
    [HIDE_LOADER]: (state) => {return(
        {
            ...state,
            loading: false
        }
    )},
    [SHOW_ALERT]: (state, {payload}) => {return(
        {
            ...state,
            alert: payload
        }
    )},
    [HIDE_ALERT]: (state) => {return(
        {
            ...state,
            alert: {
                show: false
            }
        }
    )},
    [READY_TO_LOAD]: (state) => {return(
        {
            ...state,
            ready: true
        }
    )},
    [GET_MAX_COUNT]: (state, {payload}) => {return(
        {
            ...state,
            maxCount: payload
        }
    )},
    [FETCH_MAIN_LIST]: (state, {payload}) => {return(
        {
            ...state,
            listing: payload
        }
    )},
    DEFAULT: state => state
};

export const pokemonsReducer = (state, action) => {
    const handler =  handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};