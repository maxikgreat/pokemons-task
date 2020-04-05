
import React from 'react'
import {Alert} from "react-bootstrap";

export const AlertCustom = ({alert}) => {

    if(alert.show){
        return(
            <Alert variant={alert.variant}>
                {alert.message}
            </Alert>
        )
    }

    return null
};