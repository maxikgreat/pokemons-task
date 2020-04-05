

import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const CardCustom = ({name}) => {
    return(
        <div className='card-container col-xs-6 col-12 col-sm-6 col-md-4'>
            <Card>
                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
};