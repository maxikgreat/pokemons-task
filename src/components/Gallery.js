

import React from 'react'
import { useSpring, animated } from 'react-spring'
import {Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Gallery = ({visible, setVisible, sprites}) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    const closeGallery = () => {
        document.body.style.overflow = 'auto';
        setVisible(false);
    };

    const renderPhotos = () => {
        return sprites.map((sprite, index) => {
            return(
                <Carousel.Item key={index}>
                    <animated.img
                        src={sprite}
                        className="photo"
                        onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                        onMouseLeave={() => set({xys: [0, 0, 1]})}
                        style={{transform: props.xys.interpolate(trans)}}
                    />
                </Carousel.Item>
            )
        })
    }

    if(visible){
        return(
            <div className='gallery-container'>
                <FontAwesomeIcon
                    icon='times-circle'
                    onClick = {() => closeGallery()}
                />
                <Carousel indicators={false}>
                    {renderPhotos()}
                </Carousel>
            </div>
        )
    }

    return null

};