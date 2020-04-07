
import {SHOW_ALERT, HIDE_ALERT} from "../actionTypes";

export const showAlert = (type, text) => {
    return({
        type: SHOW_ALERT,
        payload: {type, text}
    });
};

export const hideAlert = () => {
    return({
        type: HIDE_ALERT
    })
};