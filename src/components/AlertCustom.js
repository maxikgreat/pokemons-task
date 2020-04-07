
import React from 'react'
import {Alert} from "react-bootstrap";

export const AlertCustom = ({alert}) => {

    if(alert.isOpen){
        return(
            <Alert variant={alert.type}>
                {alert.text}
            </Alert>
        )
    }

    return null
};