
import React, {useState} from 'react'
import {Carousel} from "react-bootstrap";
import {PopupGallery} from "./PopupGallery";
import {deleteUndefinedNullValues} from '../helpFunctions/deleteUndefindeNullValues'


export const Gallery = ({sprites}) => {

    const [galleryVisible, setGalleryVisible] = useState(false);

    const openGallery = () => {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'relative';
        setGalleryVisible(true);
    };

    const renderPhotos = () => {
        return deleteUndefinedNullValues(sprites).map((sprite, index) => {
            return(
                <Carousel.Item
                    key={index}
                    onClick = {() => {openGallery()}}
                >
                    <img
                        alt={'Pokemon'}
                        src={sprite}
                    />
                </Carousel.Item>
            )
        })
    };

    return(
        <>
            {
                galleryVisible ?
                    <PopupGallery
                        setVisible = {setGalleryVisible}
                        sprites={deleteUndefinedNullValues(sprites)}
                    /> : null
            }
            <div className='gallery-container'>
                <Carousel indicators={false} controls={false}>
                    {renderPhotos()}
                </Carousel>
            </div>
        </>
    )
};