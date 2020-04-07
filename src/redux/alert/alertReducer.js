import {SHOW_ALERT, HIDE_ALERT} from "../actionTypes";

const initialState = {
    isOpen: false,
    type: null,
    text: ''
};

export const alertReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SHOW_ALERT:
            return{
                ...state,
                isOpen: true,
                type: payload.type,
                text: payload.text
            };
        case HIDE_ALERT:
            return{
                ...state,
                isOpen: false,
                type: null,
                text: ''
            };
        default:
            return state
    }
};