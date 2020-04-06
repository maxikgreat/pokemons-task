

import React, {useState} from 'react'
import {Card, Button, ProgressBar} from 'react-bootstrap'
import {Gallery} from "./Gallery";

export const CardCustom = ({name, sprites}) => {

    const [galleryVisible, setGalleryVisible] = useState(false);

    const openGallery = () => {
        document.body.style.overflow = 'hidden';
        setGalleryVisible(true);
    };

    const filterSprites = (sprites) => {
        const filteredSprites = [];
        Object.values(sprites).forEach(sprite => {
            if(sprite) {
                filteredSprites.push(sprite);
            }
        });
        return filteredSprites
    };


    return(
        <>
            {
                galleryVisible ?
                    <Gallery
                        setVisible = {setGalleryVisible}
                        sprites={filterSprites(sprites)}
                    /> : null
            }
            <div className='card-container col-12 col-sm-6 col-md-4 col-lg-3'>
                <Card>
                    <Card.Img
                        variant="top"
                        src={sprites.front_default}
                        onClick = {() => {openGallery()}}
                    />
                    <Card.Body>
                        <Card.Title>{name.toUpperCase()}</Card.Title>
                        {/*<ProgressBar now={50} variant={'success'}/>*/}
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};