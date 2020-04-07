
import React from 'react'
import {Carousel} from "react-bootstrap";
import {animated} from "react-spring";


export const Gallery = ({sprites}) => {

    const renderPhotos = () => {
        return sprites.map((sprite, index) => {
            return(
                <Carousel.Item key={index}>
                    <animated.img
                        src={sprite}
                    />
                </Carousel.Item>
            )
        })
    };

    return(
        <div className='gallery-container'>
            <Carousel indicators={false}>
                {renderPhotos()}
            </Carousel>
        </div>
    )
};